import { Text } from "@/_shared/components/Text";
import { FC } from "react";
import { ArticleHashtags } from "./ArticleHashtags";
import { ArticleImage } from "./ArticleImage";
import { ShareRow } from "./ShareRow";
import { ArticleProps } from "./types";

export const Article: FC<ArticleProps> = ({ post }) => {
	return (
		<section className="flex flex-col col-span-12 lg:col-span-9 px-8 md:px-24 rounded-lg gap-2">
			<ArticleHashtags tags={post.hashtags} />
			<Text variant="p1" className="text-center">
				{post.title}
			</Text>
			<ShareRow />
			<ArticleImage />
			<Text variant="p3">{post.body}</Text>
		</section>
	);
};
