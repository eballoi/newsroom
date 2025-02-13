import { Text } from "@/_shared/components/Text";
import { FeaturedCard } from "@/post/components/FeaturedCard";
import { useTranslation } from "next-i18next";
import { FC } from "react";
import { FeaturedListProps } from "./types";

export const FeaturedList: FC<FeaturedListProps> = ({ featuredPosts }) => {
	const { t } = useTranslation("post");
	return (
		<div>
			<Text variant="p1">{t("featuredTitle")}</Text>
			<ul className="space-y-3 divide-y divide-gray-300">
				{featuredPosts.slice(0, 4).map((post) => (
					<FeaturedCard post={post} key={post.id} />
				))}
			</ul>
		</div>
	);
};
