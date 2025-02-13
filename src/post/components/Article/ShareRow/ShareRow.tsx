import { shareViaEmail } from "@/post/utils/shareViaMail";
import { shareViaWhatsApp } from "@/post/utils/shareViaWhatsapp";
import { Clipboard, ClipboardCheck, Mail, MessageCircle } from "lucide-react";
import { FC, useEffect, useState } from "react";

export const ShareRow: FC = () => {
	const [copied, setCopied] = useState(false);
	const [url, setUrl] = useState("");

	useEffect(() => {
		if (typeof window !== "undefined") {
			setUrl(window.location.href);
		}
	}, []);

	const copyToClipboard = () => {
		navigator.clipboard.writeText(url);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000); // Reset after 2s
	};

	return (
		<div className="flex flex-row justify-start gap-2 pb-4">
			{/* WhatsApp */}
			<button
				onClick={() => shareViaWhatsApp(url)}
				className="p-2 rounded-full hover:bg-gray-200"
			>
				<MessageCircle />
			</button>

			{/* Email */}
			<button
				onClick={() => shareViaEmail(url)}
				className="p-2 rounded-full hover:bg-gray-200"
			>
				<Mail />
			</button>

			{/* Copy to Clipboard */}
			<button
				onClick={copyToClipboard}
				className="p-2 rounded-full hover:bg-gray-200"
			>
				{copied ? <ClipboardCheck /> : <Clipboard />}
			</button>
		</div>
	);
};
