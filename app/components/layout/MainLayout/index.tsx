import cn from 'clsx'
import { FC } from 'react'

import Drawer from '@/components/layout/MainLayout/Drawer'
import Header from '@/components/layout/MainLayout/Header'
import styles from '@/components/layout/MainLayout/style.module.scss'

import getPathname from '@/hooks/getPathname'
import { useApp } from '@/hooks/useApp'
import useMediaQuery from '@/hooks/useMediaQuery'

import { Children } from '@/shared/types/providers/MainProvider.interface'

const MainLayout: FC<Children> = ({ children }) => {
	const isDesktopBreakpoint = useMediaQuery(`(min-width:1348px)`)
	const { isMainDrawer } = useApp()
	const pathname = getPathname()
	const isVideoPage = pathname === 'video'

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
