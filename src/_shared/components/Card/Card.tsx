import { FC } from "react";
import { CardContent } from "./CardContent";
import { CardFooter } from "./CardFooter";
import { CardHeader } from "./CardHeader";
import { CardProps } from "./types";

export const Card: FC<CardProps> = ({
	post,
	variant = "regular",
	toggleHashtag,
}) => {
	const handleToggle = (tag: string) => toggleHashtag && toggleHashtag(tag);
	return (
		<article
			className={`p-6 text-white ${
				variant === "small" ? "aspect-[6/5]" : "aspect-[5/6]"
			} rounded-2xl overflow-hidden hover:shadow-md h-full bg-card-gradient`}
		>
			<div className="flex flex-col justify-between h-full relative">
				<CardHeader hashtags={post.hashtags} handleToggle={handleToggle} />
				<CardContent post={post} />
				<CardFooter post={post} />
			</div>
		</article>
	);
};
