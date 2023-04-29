import cn from 'clsx'
import Drawer from 'components/layout/MainLayout/Drawer'
import Header from 'components/layout/MainLayout/Header'
import useMediaQuery from 'hooks/useMediaQuery'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

import styles from 'components/layout/MainLayout/style.module.scss'

const MainLayout = ({ children }) => {
	//const mainDrawer = useDrawer()

	const isMainDrawer = useSelector(state => state.app.mainDrawer)
	const isDesktopBreakpoint = useMediaQuery(`(min-width:1348px)`)
	const { pathname } = useRouter()
	const isVideoPage = pathname === '/video' // TODO: refactor

	return (
		<div id={'app'} className={cn({ [styles.appVideoPage]: isVideoPage })}>
			<Header />
			<Drawer />
			<main
				className={cn({
					[styles.mobileDesktop]: !isMainDrawer && isDesktopBreakpoint,
					[styles.mainVideoPage]: isVideoPage,
				})}
			>
				{children && children}
			</main>
		</div>
	)
}

export default MainLayout
