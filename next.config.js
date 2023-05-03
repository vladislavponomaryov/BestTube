/** @type {import('next').NextConfig} */
const nextConfig = {
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

module.exports = nextConfig
