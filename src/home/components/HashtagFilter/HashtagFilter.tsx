import { Tag } from "@/_shared/components/Tag";
import { Post } from "@/_shared/types/core";
import { frontendTags } from "@/home/constants/frontendTags";
import { FC } from "react";

export const HashtagFilter: FC<{
	posts: Post[];
	selectedTags: string[];
	toggleHashtag: (tag: string) => void;
}> = ({ selectedTags, toggleHashtag }) => (
	<div className="py-4 md:py-6 lg:py-8">
		<div className="flex flex-wrap gap-2 mt-2 justify-center">
			{frontendTags.map((tag) => (
				<Tag
					key={tag}
					tag={tag}
					onClick={() => toggleHashtag(tag)}
					isSelected={selectedTags.some((hashtag) => tag === hashtag)}
				/>
			))}
		</div>
	</div>
);
