/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')

const config = {
	reactStrictMode: true,
	poweredByHeader: false,
	images: {
		remotePatterns: [
			{
				hostname: 'yt3.googleusercontent.com',
			},
			{
				hostname: 'yt3.ggpht.com',
			},
			{
				hostname: 'lh3.googleusercontent.com',
			},
			{
				hostname: 'i.ytimg.com',
			},
		],
	},
}

const nextConfig = withPWA({
	dest: 'public',
	register: true,
	skipWaiting: true,
	disable: process.env.NODE_ENV === 'development',
})(config)

module.exports = nextConfig
