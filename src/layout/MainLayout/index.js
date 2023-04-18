import cn from 'clsx'
import { useSelector } from 'react-redux'
import { Outlet, useLocation } from 'react-router-dom'

import useMediaQuery from '../../hooks/useMediaQuery'

import Drawer from './Drawer'
import Header from './Header'
import styles from './style.module.scss'

const MainLayout = () => {
	//const mainDrawer = useDrawer()

	const isMainDrawer = useSelector(state => state.app.mainDrawer)
	const isDesktopBreakpoint = useMediaQuery(`(min-width:1348px)`)
	const { pathname } = useLocation()
	const isVideoPage = pathname === '/video'

	return (
		<div id={'app'} className={cn({ [styles.appVideoPage]: isVideoPage })}>
			<Header />
			<Drawer />
			<main
				className={cn({
					[styles.mobileDesktop]: !isMainDrawer && isDesktopBreakpoint,
					[styles.mainVideoPage]: isVideoPage
				})}
			>
				<Outlet />
			</main>
		</div>
	)
}

export default MainLayout
