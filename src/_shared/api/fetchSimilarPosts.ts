import { Post } from "@/_shared/types/core";
import { getHashtagsForPost } from "../utils/getHashtagsForPost";

export const fetchSimilarPosts = async () => {
	const res = await fetch(`${process.env.API_BASE_URL}/posts`);
	if (!res.ok) throw new Error("Failed to fetch similar posts");

	const posts: Post[] = await res.json();

	return posts.slice(0, 10).map((post) => ({
		...post,
		hashtags: getHashtagsForPost(post.id, post.userId),
	}));
};
