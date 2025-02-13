export const shareViaWhatsApp = (url: string) => {
	window.open(
		`https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`,
		"_blank"
	);
};
