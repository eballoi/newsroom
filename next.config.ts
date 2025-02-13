import type { NextConfig } from "next";
import { i18n } from "./next-i18next.config.js";
const nextConfig: NextConfig = {
	/* config options here */
	reactStrictMode: true,
	env: {
		API_BASE_URL: process.env.API_BASE_URL,
	},
	i18n,
};

export default nextConfig;
