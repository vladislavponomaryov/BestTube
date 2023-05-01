import React, { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'

import MainLayout from '@/components/layout/MainLayout'

import index from '@/store/index'

import { Children } from '@/providers/MainProvider.interface'

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
		<Provider store={index}>
			<QueryClientProvider client={queryClient}>
				<MainLayout>{children}</MainLayout>
			</QueryClientProvider>
		</Provider>
	)
}

export default MainProvider
