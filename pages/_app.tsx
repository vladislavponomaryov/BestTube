import type { AppProps } from 'next/app'

import '@/assets/style/main.sass'

import MainProvider from '@/providers/MainProvider'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<MainProvider>
			<Component {...pageProps} />
		</MainProvider>
	)
}
