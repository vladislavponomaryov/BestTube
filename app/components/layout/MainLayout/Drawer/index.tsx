import cn from 'clsx'
import { FC, useEffect } from 'react'

import MainDrawer from '@/components/layout/MainLayout/Drawer/MainDrawer'
import styles from '@/components/layout/MainLayout/Drawer/style.module.sass'

import { useActions } from '@/hooks/useActions'
import { useApp } from '@/hooks/useApp'
import useMediaQuery from '@/hooks/useMediaQuery'
import usePathname from '@/hooks/usePathname'

const Drawer: FC = () => {
	const { isMainDrawer, isOpenDrawer } = useApp()
	const { setIsMainDrawer, setIsOpenDrawer } = useActions()
	let isDesktopBreakpoint = useMediaQuery(`(min-width:1348px)`)
	const pathname = usePathname()
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
						{/*<Footer />*/}
					</>
				) : (
					<></>
					/*<MiniDrawer />*/
				)}
			</nav>
		</div>
	)
}

export default Drawer
