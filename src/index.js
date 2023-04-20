import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import Router from 'routes'
import index from 'store'

import './assets/style/bootstrap-reboot.min.css'
import './assets/style/iconsFont.css'
import './assets/style/main.sass'
import './assets/style/media.sass'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})
export const MyContext = React.createContext()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<Provider store={index}>
		<MyContext.Provider value='Reed'>
			<QueryClientProvider client={queryClient}>
				<Router />
			</QueryClientProvider>
		</MyContext.Provider>
	</Provider>
)
