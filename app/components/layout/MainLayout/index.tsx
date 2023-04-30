import cn from 'clsx'
import Drawer from 'components/layout/MainLayout/Drawer'
import Header from 'components/layout/MainLayout/Header'
import { useRouter } from 'next/router'

import { useApp } from '@/hooks/useApp'
import useMediaQuery from '@/hooks/useMediaQuery'

import styles from 'components/layout/MainLayout/style.module.scss'

const MainLayout = ({ children }) => {
	const isDesktopBreakpoint = useMediaQuery(`(min-width:1348px)`)
	const { isMainDrawer } = useApp()
	const { pathname } = useRouter()
	const isVideoPage = pathname === '/video'

	return (
		<div id={'app'} className={cn({ [styles.appVideoPage]: isVideoPage })}>
			<Header />
			<Drawer />
			<main
				className={cn(styles.main, {
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
