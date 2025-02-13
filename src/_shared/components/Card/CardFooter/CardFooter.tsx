import { AvatarPlaceholder } from "@/post/components/AvatarPlaceholder";
import { Text } from "@/_shared/components/Text";
import { Post } from "@/_shared/types/core";
import Link from "next/link";
import { FC } from "react";
import { useTranslation } from "next-i18next";

export const CardFooter: FC<{ post: Post }> = ({ post }) => {
	const { t } = useTranslation("common");
	return (
		<div className="flex justify-between items-center mt-auto relative">
			<div className="flex items-center space-x-2">
				<AvatarPlaceholder name={post.author.name} />
				<span className="hidden lg:block font-medium">{post.author.name}</span>
			</div>
			<Link href={`/post/${post.id}`} className="group">
				<div className="inline-flex items-center uppercase hover:underline transition-transform duration-300 group-hover:translate-x-1">
					<Text variant="small/uppercase">{t("components.card.readMore")}</Text>
				</div>
			</Link>
		</div>
	);
};
