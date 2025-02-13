import { FC } from "react";

import { Text } from "@/_shared/components/Text";
import { Post } from "@/_shared/types/core";
import { truncateText } from "@/_shared/utils/truncateText";
import { useTranslation } from "next-i18next";
import Link from "next/link";

interface FeaturedCardProps {
	post: Post;
}

export const FeaturedCard: FC<FeaturedCardProps> = ({ post }) => {
	const { t } = useTranslation("post");

	return (
		<li className="w-full py-4 flex flex-col h-full group">
			<div className="flex flex-1 gap-2 pb-1">
				{post.hashtags.map((tag) => (
					<Text key={tag} variant="small">
						{tag}
					</Text>
				))}
			</div>
			<Text variant="p3">
				<Link href={`/post/${post.id}`}>{truncateText(post.title, 80)}</Link>
			</Text>
			<div className="flex justify-end items-center mt-4">
				<Link
					href={`/post/${post.id}`}
					className="hover:underlinetransition-transform duration-300 group-hover:translate-x-1"
				>
					<Text variant="small">{t("readMore")}</Text>
				</Link>
			</div>
		</li>
	);
};
