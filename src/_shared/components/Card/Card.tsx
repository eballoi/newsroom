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
			className={`p-6 text-white min-h-[350] md:min-h-[200] ${
				variant === "small"
					? "sm:aspect-[1/1] md:aspect-[6/5] lg:aspect-[4/5]"
					: "sm:aspect-[1/1] md:aspect-[5/6] lg:aspect-[4/6] xl:aspect-[5/6]"
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
