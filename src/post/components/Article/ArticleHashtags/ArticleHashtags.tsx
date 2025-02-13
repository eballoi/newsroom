import { FC } from "react";
import { Text } from "@/_shared/components/Text";

export const ArticleHashtags: FC<{ tags: string[] }> = ({ tags }) => {
	return (
		<div className="flex flex-row justify-center text-center gap-4">
			{tags.map((tag, i) => (
				<Text key={i}>{tag}</Text>
			))}
		</div>
	);
};
