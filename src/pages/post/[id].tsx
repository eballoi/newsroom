import { TwoThirdGrid } from "@/_shared/components/TwoThirdGrid/TwoThirdGrid";
import { Article } from "@/post/components/Article";
import { ArticleNotFound } from "@/post/components/ArticleNotFound";
import { Author } from "@/post/components/Author";
import { FeaturedList } from "@/post/components/FeaturedList";
import { SimilarArticles } from "@/post/components/SimilarArticles";

import { fetchAllPosts } from "@/_shared/api/fetchAllPosts";
import { fetchFeaturedPosts } from "@/_shared/api/fetchFeaturedPosts";
import { fetchPostById } from "@/_shared/api/fetchPostById";
import { fetchSimilarPosts } from "@/_shared/api/fetchSimilarPosts";
import { fetchUserById } from "@/_shared/api/fetchUserById";
import { fetchUsers } from "@/_shared/api/fetchUsers";
import { PostDetailProps } from "@/_shared/types/pages";
import { GetStaticPaths, GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

const PostDetailPage = ({
	post,
	similarPosts,
	featuredPosts,
	author,
}: PostDetailProps) => {
	const { t } = useTranslation("post");

	if (!post) {
		return <ArticleNotFound />;
	}

	return (
		<main>
			<Head>
				<title>{t("seo.title", { title: post.title })}</title>
			</Head>
			<section>
				<div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 py-24">
					<TwoThirdGrid>
						<Article post={post} />
						<aside className="col-span-12 lg:col-span-3 rounded-lg flex flex-1 with-full flex-col gap-8">
							<Author author={author} />
							<FeaturedList featuredPosts={featuredPosts} />
						</aside>
					</TwoThirdGrid>
				</div>
				<SimilarArticles posts={similarPosts} />
			</section>
		</main>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = await fetchAllPosts();

	const paths = posts.map((post) => ({
		params: { id: post.id.toString() },
	}));

	return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async ({
	params,
	locale = "en",
}) => {
	if (!params?.id) return { notFound: true };

	try {
		const post = await fetchPostById(params.id as string);
		const author = await fetchUserById(post.userId);
		const similarPosts = await fetchSimilarPosts();
		const featuredPosts = await fetchFeaturedPosts();
		const users = await fetchUsers();
		const translations = await serverSideTranslations(locale, [
			"common",
			"post",
		]);
		return {
			props: {
				...translations,
				post,
				author,
				featuredPosts,
				similarPosts: similarPosts.map((similarPost) => ({
					...similarPost,
					author: users[similarPost.userId - 1],
				})),
			},
			revalidate: 60,
		};
	} catch (error) {
		console.error(error);
		return { notFound: true };
	}
};

export default PostDetailPage;
