import { getHashtagsForPost } from "@/_shared/utils/getHashtagsForPost";
import { Post } from "@/_shared/types/core";

export const fetchPostById = async (id: string) => {
	const res = await fetch(`${process.env.API_BASE_URL}/posts/${id}`);
	if (!res.ok) throw new Error("Failed to fetch post");

	const post: Post = await res.json();

	return {
		...post,
		body: post.body.repeat(5),
		hashtags: getHashtagsForPost(post.id, post.userId),
	};
};
