export const getInitials = (name: string) => {
	const words = name.trim().split(" ");
	return words.length > 1 ? words[0][0] + words[1][0] : words[0][0];
};
