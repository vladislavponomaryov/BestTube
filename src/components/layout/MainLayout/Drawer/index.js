import cn from 'clsx'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import useMediaQuery from '../../../../hooks/useMediaQuery'

import { setMainDrawer, toggleDrawer } from '../../../../store/slices/app'

import MainDrawer from './MainDrawer'
import DrawerFooter from './MainDrawer/DrawerFooter'
import MiniDrawer from './MiniDrawer/MiniDrawer'
import './style.component.sass'
import styles from './style.module.scss'

const Drawer = () => {
	/* Sidebar */
	const dispatch = useDispatch()
	const state = useSelector(state => state.app)
	const isOpenDrawer = state.openDrawer
	let isMainDrawer = state.mainDrawer
	const isDesktopBreakpoint = useMediaQuery(`(min-width:1348px)`)
	let { pathname } = useLocation()
	let isVideoPage = pathname === '/video'

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
