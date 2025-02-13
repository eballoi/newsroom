import { FC } from "react";
import { TagProps } from "./types";

export const Tag: FC<TagProps> = ({
	tag,
	className = "",
	isSelected,
	onClick,
}) => {
	return (
		<div
			onClick={onClick}
			className={`${
				isSelected
					? "bg-indigo-400 text-white hover:bg-indigo-300"
					: "bg-muted hover:bg-gray-200"
			} cursor-pointer px-2 py-1 rounded-full text-sm font-medium ${className}`.trim()}
		>
			{tag}
		</div>
	);
};
