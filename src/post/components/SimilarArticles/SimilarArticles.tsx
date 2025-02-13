import { Card } from "@/_shared/components/Card";
import { Text } from "@/_shared/components/Text";
import { useTranslation } from "next-i18next";
import { FC } from "react";
import { ArticleGridProps } from "./types";
import clsx from "clsx";

export const SimilarArticles: FC<ArticleGridProps> = ({ posts }) => {
	const { t } = useTranslation("post");
	return (
		<div className="bg-white pt-12">
			<div className="flex flex-col gap-4 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<Text variant="p1">{t("similarArticles")}</Text>
			</div>
			<div className="w-full overflow-hidden overflow-x-scroll flex space-x-4 animate-marquee py-12">
				{posts.map((post, index) => {
					const isFirst = index === 0;
					const isLast = index === posts.length - 1;
					return (
						<div
							key={post.id}
							className={clsx(
								"flex-shrink-0 w-[80%] sm:w-[60%] md:w-[50%] lg:w-[33%] xl:w-[25%] snap-start",
								isFirst && "ml-8",
								isLast && "mr-8"
							)}
						>
							<Card key={post.id} post={post} variant="small" />
						</div>
					);
				})}
			</div>
		</div>
	);
};
