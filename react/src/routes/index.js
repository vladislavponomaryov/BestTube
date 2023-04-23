import {useAuth} from 'react/src/hooks/useAuth'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {routes} from 'react/src/routes/routes.data'

import {NotFound} from 'react/src/components/screens/404'

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
