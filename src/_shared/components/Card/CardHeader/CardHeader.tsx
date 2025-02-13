import { Tag } from "@/_shared/components/Tag";
import { FC } from "react";
import { CardHeaderProps } from "./types";

export const CardHeader: FC<CardHeaderProps> = ({ hashtags, handleToggle }) => {
	return (
		<div className="flex flex-row gap-2">
			{hashtags.map((tag, i) => (
				<Tag
					key={i}
					tag={tag}
					onClick={() => handleToggle(tag)}
					className="hover:bg-indigo-400"
				/>
			))}
		</div>
	);
};
