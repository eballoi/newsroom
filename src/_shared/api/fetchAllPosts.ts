import { getHashtagsForPost } from "@/_shared/utils/getHashtagsForPost";
import { Post } from "@/_shared/types/core";

export const fetchAllPosts = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/posts`);
	if (!res.ok) throw new Error("Failed to fetch posts");

	const posts: Post[] = await res.json();

	return posts.map((post) => ({
		...post,
		hashtags: getHashtagsForPost(post.id, post.userId),
	}));
};
