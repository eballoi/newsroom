import { Post } from "@/_shared/types/core";
import { getHashtagsForPost } from "../utils/getHashtagsForPost";

export const fetchFeaturedPosts = async () => {
	const res = await fetch(`${process.env.API_BASE_URL}/posts`);
	if (!res.ok) return [];

	const posts: Post[] = await res.json();

	return posts.slice(-10).map((post) => ({
		...post,
		hashtags: getHashtagsForPost(post.id, post.userId),
	}));
};
