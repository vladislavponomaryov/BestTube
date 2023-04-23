import cn from 'clsx'
import useMediaQuery from 'react/src/hooks/useMediaQuery'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useLocation} from 'react-router-dom'
import {setMainDrawer, toggleDrawer} from 'react/src/store/slices/app'

import MainDrawer from 'react/src/components/layout/MainLayout/Drawer/MainDrawer'
import DrawerFooter from 'react/src/components/layout/MainLayout/Drawer/MainDrawer/DrawerFooter'
import MiniDrawer from 'react/src/components/layout/MainLayout/Drawer/MiniDrawer/MiniDrawer'
import 'react/src/components/layout/MainLayout/Drawer/style.component.sass'
import styles from 'react/src/components/layout/MainLayout/Drawer/style.module.scss'

const Drawer = () => {
	/* Sidebar */
	const dispatch = useDispatch()
	const state = useSelector(state => state.app) // TODO: provider
	const isOpenDrawer = state.openDrawer
	let isMainDrawer = state.mainDrawer
	const isDesktopBreakpoint = useMediaQuery(`(min-width:1348px)`)
	let { pathname } = useLocation()
	let isVideoPage = pathname === '/video' // TODO: refactor

	useEffect(() => {
		let drawerState = isDesktopBreakpoint && isOpenDrawer !== null ? isOpenDrawer : isDesktopBreakpoint
		if (isMainDrawer !== drawerState) {
			dispatch(setMainDrawer(drawerState))
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
					[styles.isVideoPage]: isVideoPage
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
