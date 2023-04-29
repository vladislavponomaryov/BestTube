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
		],
	},
}

module.exports = nextConfig
