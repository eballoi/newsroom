import { useState } from "react";

export const useSelectedTags = () => {
	const [selectedTags, setSelectedTags] = useState<string[]>([]);

	const toggleHashtag = (hashtag: string) => {
		setSelectedTags((prevTags: string[]) => {
			const index = prevTags.findIndex((tag) => tag === hashtag);

			if (index !== -1) {
				// Hashtag exists, remove it
				return prevTags.filter((tag) => tag !== hashtag);
			} else {
				// Hashtag does not exist, add it
				return [...prevTags, hashtag];
			}
		});
	};

	return {
		selectedTags,
		toggleHashtag,
	};
};
