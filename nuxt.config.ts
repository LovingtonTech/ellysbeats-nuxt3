import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
	//serverMiddleware: ["~/server/server.js"],
	buildModules: [
		"@pinia/nuxt",
		//"@nuxtjs/vuetify"
		"nuxt-windicss"
		// ['@nuxtjs/fontawesome',
		// 	{
		// 		component: "fa",
		// 		suffix: false,
		// 		icons: {
		// 			solid: true,
		// 			brands: true
		// 		}
		// 	},
		// ]
	],
	build: {
		// postcss: {
		// 	postcssOptions: {
		// 		plugins: {
		// 			tailwindcss: {},
		// 			autoprefixer: {}
		// 		}
		// 	}
		// }
	},
	css: [
		"~/assets/css/tailwind.css",
		"@fortawesome/fontawesome-svg-core/styles.css",'primevue/resources/themes/saga-blue/theme.css',
		'primevue/resources/primevue.css',
		'primeicons/primeicons.css'
	],

})
