import { useState } from "react";

export const useLoadMore = (step: number = 6) => {
	const [visibleItems, setVisibleItems] = useState(step);

	const loadMore = () => {
		setVisibleItems((prev) => prev + step);
	};

	return {
		visibleItems,
		setVisibleItems,
		loadMore,
	};
};
