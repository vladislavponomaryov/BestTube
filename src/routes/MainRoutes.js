import { lazy } from 'react'
import Loadable from '../components/common/Loadable'
import MainLayout from '../layout/MainLayout'

const HomeDefault = Loadable(lazy(() => import('../pages/home')))
const Channel = Loadable(lazy(() => import('../pages/channel')))
const Video = Loadable(lazy(() => import('../pages/video')))

const MainRoutes = {
	path: '/',
	element: <MainLayout />,
	children: [
		{
			path: '/',
			element: <HomeDefault />
		},
		{
			path: '/home',
			element: <HomeDefault />
		},
		{
			path: 'channel',
			element: <Channel />
		},
		{
			path: 'video',
			element: <Video />
		}
	]
}

export default MainRoutes
