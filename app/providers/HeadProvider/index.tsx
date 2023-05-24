import Head from 'next/head'
import { FC } from 'react'

import { Children } from '@/shared/types/providers/MainProvider.interface'

import Favicon from '@/providers/HeadProvider/Favicon'

const HeadProvider: FC<Children> = ({ children }) => {
	return (
		<>
			<Head>
				<title>Youtube Clone Next.js App</title>
				<meta charSet='UTF-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1.0' />
				<Favicon />
			</Head>
			{children}
		</>
	)
}

export default HeadProvider
