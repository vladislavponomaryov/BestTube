import cn from 'clsx'
import { FC, useEffect } from 'react'

import MainDrawer from '@/components/layout/MainLayout/Drawer/MainDrawer'
import Index from '@/components/layout/MainLayout/Drawer/MainDrawer/Footer'
import MiniDrawer from '@/components/layout/MainLayout/Drawer/MiniDrawer/MiniDrawer'
import styles from '@/components/layout/MainLayout/Drawer/style.module.sass'

import getPathname from '@/hooks/getPathname'
import { useActions } from '@/hooks/useActions'
import { useApp } from '@/hooks/useApp'
import useMediaQuery from '@/hooks/useMediaQuery'

const Drawer: FC = () => {
	const { isMainDrawer, isOpenDrawer } = useApp()
	const { setIsMainDrawer, setIsOpenDrawer } = useActions()
	let isDesktopBreakpoint = useMediaQuery(`(min-width:1348px)`)
	const pathname = getPathname()
	let isVideoPage = pathname === 'video'

	useEffect(() => {
		let drawerState = isDesktopBreakpoint && isOpenDrawer !== null ? isOpenDrawer : isDesktopBreakpoint
		if (isMainDrawer !== drawerState) {
			setIsMainDrawer(drawerState)
		}
	}, [isDesktopBreakpoint, isOpenDrawer])

	useEffect(() => {
		isDesktopBreakpoint ? setIsOpenDrawer(true) : setIsOpenDrawer(false)
	}, [])

	return (
		<div
			className={cn('sidebar', styles.sidebar, {
				[styles.mobileDrawer]: !isMainDrawer,
				[styles.isVideoPage]: isVideoPage,
			})}
		>
			<nav>
				{isMainDrawer ? (
					<>
						<MainDrawer />
						<Index />
					</>
				) : (
					<MiniDrawer />
				)}
			</nav>
		</div>
	)
}

export default Drawer
