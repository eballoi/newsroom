import { Text } from "@/_shared/components/Text";
import { truncateText } from "@/_shared/utils/truncateText";
import Link from "next/link";
import { FC } from "react";
import { CardContentProps } from "./types";

export const CardContent: FC<CardContentProps> = ({ post }) => {
	return (
		<div className="flex flex-col mb-5 gap-2">
			<Text variant="p2">
				<Link href={`/post/${post.id}`}>{post.title}</Link>
			</Text>
			<Text variant="small" className="tracking-normal">
				{truncateText(post.body, 100)}
			</Text>
		</div>
	);
};
