import { Post, User } from "@/_shared/types/core";

export type HomeProps = {
	posts: Post[];
};

export type PostDetailProps = {
	post: Post;
	similarPosts: Post[];
	featuredPosts: Post[];
	author: User;
};
