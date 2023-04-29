import cn from 'clsx'
import MiniDrawer from 'components/layout/MainLayout/Drawer/MiniDrawer/MiniDrawer'
import useMediaQuery from 'hooks/useMediaQuery'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'

import MainDrawer from '@/components/layout/MainLayout/Drawer/MainDrawer'
import Index from '@/components/layout/MainLayout/Drawer/MainDrawer/Footer'
import styles from '@/components/layout/MainLayout/Drawer/style.module.sass'

import { useActions } from '@/hooks/useActions'
import { useApp } from '@/hooks/useApp'

const Drawer: FC = () => {
	const { isMainDrawer, isOpenDrawer } = useApp()
	const { setIsMainDrawer, setIsOpenDrawer } = useActions()
	const isDesktopBreakpoint = useMediaQuery(`(min-width:1348px)`)
	let { pathname } = useRouter()
	let isVideoPage = pathname === '/video'

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
		<>
			<div
				className={cn(styles.sidebar, {
					[styles.mobileDrawer]: !isDesktopBreakpoint || (isDesktopBreakpoint && !isMainDrawer),
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
		</>
	)
}

export default Drawer
