import { Post } from "@/_shared/types/core";

export interface CardProps {
	post: Post;
	toggleHashtag?: (tag: string) => void;
	variant?: "regular" | "small";
}
