import { Card } from "@/_shared/components/Card";
import { Text } from "@/_shared/components/Text";
import { useTranslation } from "next-i18next";
import { FC } from "react";
import { ArticleGridProps } from "./types";

export const SimilarArticles: FC<ArticleGridProps> = ({ posts }) => {
	const { t } = useTranslation("post");
	return (
		<div className="bg-white pt-12">
			<div className="flex flex-col gap-4 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<Text variant="p1">{t("similarArticles")}</Text>
			</div>
			<div className="w-full overflow-hidden overflow-x-scroll flex space-x-4 animate-marquee py-12">
				{posts.map((post) => (
					<div
						key={post.id}
						className="flex-shrink-0 w-2/3 sm:w-1/2 lg:w-1/4 mx-8"
					>
						<Card key={post.id} post={post} variant="small" />
					</div>
				))}
			</div>
		</div>
	);
};
