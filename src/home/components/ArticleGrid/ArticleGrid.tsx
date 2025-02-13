import { useLoadMore } from "@/home/hooks/useLoadMore";
import { FC } from "react";

import { Card } from "@/_shared/components/Card";
import { FullGrid } from "../../../_shared/components/FullGrid/FullGrid";
import { LoadMore } from "./LoadMore";
import { ArticleGridProps } from "./types";

export const ArticleGrid: FC<ArticleGridProps> = ({ posts, toggleHashtag }) => {
	const { visibleItems, loadMore } = useLoadMore(6);

	return (
		<>
			<FullGrid>
				{posts.slice(0, visibleItems).map((post) => (
					<Card key={post.id} post={post} toggleHashtag={toggleHashtag} />
				))}
			</FullGrid>
			{visibleItems < posts.length && <LoadMore loadMore={loadMore} />}
		</>
	);
};
