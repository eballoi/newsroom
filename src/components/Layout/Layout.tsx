import { FC } from "react";
import { LayoutProps } from "./types";

export const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<main className="container mx-auto max-w-7xl px-12 sm:px-24 lg:px-8 py-24">
			{children}
		</main>
	);
};
