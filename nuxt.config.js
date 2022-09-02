import axios from "axios"
import pkg from "./package"

export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: pkg.name,
		htmlAttrs: {
			lang: "en",
		},
		meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { name: "format-detection", content: "telephone=no" }],
		link: [
			{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Montserrat&display=swap",
			},
		],
	},

   transition: {
      name: "fade",
      mode: "out-in"
   },

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [{ src: "~/assets/scss/main.scss", lang: "scss" }],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: ["~plugins/app-components.js"],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// ['@nuxtjs/google-analytics', {
		//    id: "UA-1234-1"
		// }]
	],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},
	generate: {
		routes() {
			return axios.get("https://blog-nuxt-c3be8-default-rtdb.europe-west1.firebasedatabase.app/posts.json").then((res) => {
				const postsArray = []
				for (let key in res.data) {
					postsArray.push({ ...res.data[key], id: key })
				}

				return postsArray.map((post) => {
					return "/blog/" + post.id
				})
			})
		},
	},
	server: {
		port: 3000,
	},
}
