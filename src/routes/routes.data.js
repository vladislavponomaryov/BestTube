import { Channel } from '../components/screens/channel'
import { Home } from '../components/screens/home'
import { Video } from '../components/screens/video'

export const routes = [
	{
		path: '/',
		component: Home,
		isAuth: false
	},
	{
		path: '/home',
		component: Home,
		isAuth: false
	},
	{
		path: 'channel',
		component: Channel,
		isAuth: true
	},
	{
		path: 'video',
		component: Video,
		isAuth: true
	}
]
