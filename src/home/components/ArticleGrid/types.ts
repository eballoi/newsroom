import { Post } from "@/_shared/types/core";

export interface ArticleGridProps {
	posts: Post[];
	toggleHashtag: (tag: string) => void;
}
