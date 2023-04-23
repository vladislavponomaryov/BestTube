import { useAuth } from 'hooks/useAuth'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from 'routes/routes.data'

import { NotFound } from 'components/screens/404'

export default function Router() {
	const { isAuth } = useAuth()

	return (
		<BrowserRouter basename='/Youtube-clone'>
			<Routes>
				{routes.map(route => {
					if (route.isAuth && !isAuth) {
						return false
					}

					return <Route key={route.path} path={route.path} element={<route.component />} />
				})}
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}
