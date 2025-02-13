import { routes } from "@/_shared/constants/routes";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { LanguageDropdown } from "../LanguageDropdown";
import { NavLink } from "../NavLink";

export const Navbar: FC = () => {
	const { t } = useTranslation("common");
	const [isScrolled, setIsScrolled] = useState(false);

	const navLinks = [
		{ href: routes.HOME, text: t("navbar.home") },
		{ href: routes.ABOUT, text: t("navbar.about") },
	];

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={`fixed top-0 left-0 bg-white w-full backdrop-blur-sm z-50 transition-all duration-300 ${
				isScrolled ? "bg-white/80" : "bg-transparent"
			}`}
		>
			<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
				<Link href={routes.HOME} className="text-xl font-bold">
					{t("appName")}
				</Link>
				<div className="flex space-x-8 items-center">
					{navLinks.map((navLink) => (
						<NavLink
							key={navLink.text}
							text={navLink.text}
							href={navLink.href}
						/>
					))}
					<LanguageDropdown />
				</div>
			</div>
		</nav>
	);
};
