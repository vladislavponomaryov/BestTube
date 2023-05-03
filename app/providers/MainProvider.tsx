import React, { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'

import MainLayout from '@/components/layout/MainLayout'

import { Children } from '@/shared/types/providers/MainProvider.interface'

import index from '@/store/index'

import HeadProvider from '@/providers/HeadProvider'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})
export const MyContext = React.createContext('')

const MainProvider: FC<Children> = ({ children }) => {
	return (
		<HeadProvider>
			<Provider store={index}>
				<QueryClientProvider client={queryClient}>
					<MainLayout>{children}</MainLayout>
				</QueryClientProvider>
			</Provider>
		</HeadProvider>
	)
}

export default MainProvider
