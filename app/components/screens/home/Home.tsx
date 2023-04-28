import React, { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import { IHome } from '@/screens/home/home.interface'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})
export const MyContext = React.createContext('')

const Home: FC<IHome> = () => {
	return (
		<MyContext.Provider value='Reed'>
			<QueryClientProvider client={queryClient}>
				<>Home</>
			</QueryClientProvider>
		</MyContext.Provider>
	)
}

export default Home
