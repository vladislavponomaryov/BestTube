import cn from 'clsx'
import MainDrawer from 'components/layout/MainLayout/Drawer/MainDrawer'
import DrawerFooter from 'components/layout/MainLayout/Drawer/MainDrawer/DrawerFooter'
import MiniDrawer from 'components/layout/MainLayout/Drawer/MiniDrawer/MiniDrawer'
import useMediaQuery from 'hooks/useMediaQuery'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'

import { useActions } from '@/hooks/useActions'
import { useApp } from '@/hooks/useApp'

import styles from 'components/layout/MainLayout/Drawer/style.module.scss'

import 'components/layout/MainLayout/Drawer/style.component.sass'

const Drawer: FC = () => {
	const { isMainDrawer, isOpenDrawer } = useApp()
	const { setIsMainDrawer, setIsOpenDrawer } = useActions()
	const isDesktopBreakpoint = useMediaQuery(`(min-width:1348px)`)
	let { asPath } = useRouter()
	let isVideoPage = asPath === 'video' // TODO: refactor

	useEffect(() => {
		let drawerState = isDesktopBreakpoint && isOpenDrawer !== null ? isOpenDrawer : isDesktopBreakpoint
		if (isMainDrawer !== drawerState) {
			setIsMainDrawer(drawerState)
		}
	}, [isDesktopBreakpoint, isOpenDrawer])

	useEffect(() => {
		isDesktopBreakpoint ? dispatch(toggleDrawer(true)) : dispatch(toggleDrawer(false))
	}, [])

	return (
		<>
			<div
				className={cn(`sidebar`, {
					[styles.mobileDrawer]: !isDesktopBreakpoint || (isDesktopBreakpoint && !isMainDrawer),
					[styles.isVideoPage]: isVideoPage,
				})}
			>
				<nav>
					{isMainDrawer ? (
						<>
							<MainDrawer />
							<DrawerFooter />
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
