import Authentication from 'react/src/components/screens/auth/Authentication'
import {Channel} from 'react/src/components/screens/channel'
import {Home} from 'react/src/components/screens/home'
import {Video} from 'react/src/components/screens/video'

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
	},
	{
		path: 'login',
		component: Authentication,
		isAuth: false
	}
]
