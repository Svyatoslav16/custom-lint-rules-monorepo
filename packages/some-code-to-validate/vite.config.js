import fs from 'fs'
import { resolve } from 'path'

import { viteCommonjs } from '@originjs/vite-plugin-commonjs'
import ViteRequireContext from '@originjs/vite-plugin-require-context'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'
import envCompatible from 'vite-plugin-env-compatible'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

// import HtmlExtFallbackPlugin from './devserver/html-ext-fallback'

/** @typedef {object} CONFIG
 * @property {'test' | ''} env
 * @property {string} WEB_TEST
 * @property {string} SIGNALR_TEST
 * @property {string} HUB_CONNECTIONS_URL_TEST
 * @property {string} CHAT_CONNECTIONS_URL_TEST
 * @property {string} GLOBAL_CHAT_CONNECTIONS_URL_TEST
 * @property {string} WEB_PROD
 * @property {string} SIGNALR_PROD
 * @property {string} HUB_CONNECTIONS_URL_PROD
 * @property {string} CHAT_CONNECTIONS_URL_PROD
 * @property {string} GLOBAL_CHAT_CONNECTIONS_URL_PROD
 */

/**
 * @type {CONFIG}
 */
const config = JSON.parse(
	fs.readFileSync(resolve(__dirname, 'devserver/config/config.json'), 'utf8'),
)

const getSuffix = () => `_${config.env === 'test' ? 'TEST' : 'PROD'}`
const viewsFolder = '/devserver/views'
const serviceWorkerName = 'service-worker'

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 3000,
		open: true,
		fs: {
			// allow: [
			// searchForWorkspaceRoot(process.cwd()),
			// searchForWorkspaceRoot('C:\Projects\work\Vmeste.Web.Mobile\ILive.Web.Mobile\wwwroot')
			// ]
			strict: false,
		},
		proxy: {
			'/api': config[`WEB${getSuffix()}`],
			'/auth': config[`WEB${getSuffix()}`],
			'/file': config[`WEB${getSuffix()}`],
			'/provider': config[`WEB${getSuffix()}`],
			'/chat': config[`WEB${getSuffix()}`],
		},
	},
	mode: config.env === 'test' ? 'development' : 'production',
	build: {
		outDir: resolve(__dirname, '../Backend/public'),
		emptyOutDir: true,
		rollupOptions: {
			input: {
				mainsite: new URL(`.${viewsFolder}/mainsite.html`, import.meta.url)
					.pathname,
				login: new URL(`.${viewsFolder}/login.html`, import.meta.url).pathname,
				[serviceWorkerName]: new URL(
					`./${serviceWorkerName}.js`,
					import.meta.url,
				).pathname,
			},
			output: {
				assetFileNames: (assetInfo) => {
					const info = assetInfo.name.split('.')
					let extType = info[info.length - 1]
					if (/svg|webp|ico|png|jpe?g|gif|tiff|bmp/i.test(extType)) {
						extType = 'images'
					}
					if (/ttf|woff2?|eot/g.test(extType)) {
						extType = 'fonts'
					}

					return `${extType}/[name]-[hash].[ext]`
				},
				entryFileNames: (entryInfo) => {
					const info = entryInfo.name.split('.')
					const fileName = info[0]
					if (fileName === serviceWorkerName) {
						return 'js/[name].js'
					}

					return 'js/[name]-[hash].js'
				},
				chunkFileNames: 'js/[name]-[hash].js',
			},
		},
	},
	esbuild: {
		logOverride: { 'this-is-undefined-in-esm': 'silent' },
	},
	plugins: [
		viteCommonjs(),
		ViteRequireContext(),
		envCompatible(),
		vanillaExtractPlugin({
			esbuildOptions: { loader: { '.webp': 'dataurl', '.svg?url': 'dataurl' } },
		}),
		tsconfigPaths(),
		svgr({
			exportAsDefault: true,
		}),
		react(),
		checker({
			typescript: true,
			eslint: false,
			enableBuild: false,
		}),
		// HtmlExtFallbackPlugin({
		// 	rootDir: __dirname,
		// 	viewsFolder,
		// }),
	],
})
