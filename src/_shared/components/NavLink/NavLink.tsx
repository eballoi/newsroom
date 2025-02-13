import Link from "next/link";
import { FC } from "react";
import { Text } from "@/_shared/components/Text";
import { useRouter } from "next/router";

export const NavLink: FC<{ href: string; text: string }> = ({ href, text }) => {
	const router = useRouter();
	const isActive = router.pathname === href;

	return (
		<Link
			href={href}
			className={`py-2 px-4 rounded-full hover:bg-gray-100 active:bg-gray-200 focus:bg-gray-200 ${
				isActive ? "bg-gray-100" : "hover:bg-gray-100"
			}`}
		>
			<Text variant="small">{text}</Text>
		</Link>
	);
};
