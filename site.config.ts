import siteConfig from "./src/utils/config";

const config = siteConfig({
	title: "Ficor",
	prologue: "一个重新站起来，准备出发的人\nDo one Thing at a Time, and Do Well.",
	author: {
		name: "Ficor",
		email: "ficor@qq.com",
		link: "https://lawpan.CC"
	},
	description: "在路上的思绪与脚印",
	copyright: {
		type: "CC BY-NC-ND 4.0",
		year: "2008"
	},
	i18n: {
		locales: ["en", "zh-cn"],
		defaultLocale: "zh-cn"
	},
	pagination: {
		note: 15,
		jotting: 24
	},
	heatmap: {
		unit: "day",
		weeks: 20
	},
	feed: {
		section: "*",
		limit: 20
	},
	latest: "*"
});

export const monolocale = Number(config.i18n.locales.length) === 1;

export default config;
