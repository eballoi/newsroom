export const shareViaEmail = (url: string) => {
	window.open(
		`mailto:?subject=Check this article&body=${encodeURIComponent(url)}`,
		"_blank"
	);
};
