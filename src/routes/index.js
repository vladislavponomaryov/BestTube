import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { useAuth } from '../hooks/useAuth'

import { routes } from './routes.data'

export default function Router() {
	const { isAuth } = useAuth()

	return (
		<BrowserRouter>
			<Routes>
				{routes.map(route => {
					if (route.isAuth && !isAuth) {
						return false
					}

					return <Route key={route.path} path={route.path} element={<route.component />} />
				})}
			</Routes>
		</BrowserRouter>
	)
}
