import { fetchAllPosts } from "@/_shared/api/fetchAllPosts";
import { fetchUsers } from "@/_shared/api/fetchUsers";
import { Text } from "@/_shared/components/Text";
import { Layout } from "@/components/Layout";
import { ArticleGrid } from "@/home/components/ArticleGrid";
import { HashtagFilter } from "@/home/components/HashtagFilter";
import { useSelectedTags } from "@/home/hooks/useSelectedTags";

import { HomeProps } from "@/_shared/types/pages";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useMemo } from "react";

export default function Home({ posts }: HomeProps) {
	const { t } = useTranslation("home");
	const { selectedTags, toggleHashtag } = useSelectedTags();

	const filteredPosts = useMemo(() => {
		if (selectedTags.length === 0) return posts;

		const selectedTagSet = new Set(selectedTags);
		return posts.filter((post) =>
			post.hashtags.some((tag) => selectedTagSet.has(tag))
		);
	}, [posts, selectedTags]);

	return (
		<Layout>
			<Head>
				<title>{t("seo.title")}</title>
				<meta name="description" content={t("seo.description")} />
			</Head>
			<Text variant="p1">{t("title")}</Text>
			<HashtagFilter
				posts={posts}
				toggleHashtag={toggleHashtag}
				selectedTags={selectedTags}
			/>
			<ArticleGrid posts={filteredPosts} toggleHashtag={toggleHashtag} />
		</Layout>
	);
}

export const getStaticProps: GetStaticProps<HomeProps> = async ({
	locale = "en",
}) => {
	const posts = await fetchAllPosts();
	const users = await fetchUsers();
	const translations = await serverSideTranslations(locale, ["common", "home"]);

	return {
		props: {
			posts: posts.map((post) => ({ ...post, author: users[post.userId - 1] })),
			...translations,
		},
		revalidate: 60,
	};
};
