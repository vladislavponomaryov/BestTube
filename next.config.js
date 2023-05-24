/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')

const config = {
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
})(config)

module.exports = nextConfig
