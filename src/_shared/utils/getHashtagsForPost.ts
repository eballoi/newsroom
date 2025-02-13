import { frontendTags } from "@/home/constants/frontendTags";

export const getHashtagsForPost = (postId: number, userId: number) => {
	const numTags = ((postId + userId) % 3) + 1;
	const indexes = [
		postId % frontendTags.length,
		userId % frontendTags.length,
		(postId + userId) % frontendTags.length,
	].slice(0, numTags);

	return indexes.map((i) => frontendTags[i]);
};
