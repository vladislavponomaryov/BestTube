import cn from 'clsx'
import useMediaQuery from 'react/src/hooks/useMediaQuery'
import {useSelector} from 'react-redux'
import {useLocation} from 'react-router-dom'

import Drawer from 'react/src/components/layout/MainLayout/Drawer'
import Header from 'react/src/components/layout/MainLayout/Header'
import styles from 'react/src/components/layout/MainLayout/style.module.scss'

const MainLayout = ({ children }) => {
	//const mainDrawer = useDrawer()

	const isMainDrawer = useSelector(state => state.app.mainDrawer)
	const isDesktopBreakpoint = useMediaQuery(`(min-width:1348px)`)
	const { pathname } = useLocation()
	const isVideoPage = pathname === '/video' // TODO: refactor

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
				{children && children}
			</main>
		</div>
	)
}

export default MainLayout
