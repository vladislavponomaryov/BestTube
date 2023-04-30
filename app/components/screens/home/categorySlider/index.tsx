import cn from 'clsx'
import useMediaQuery from 'hooks/useMediaQuery'
import { useEffect, useRef } from 'react'

import slider from '@/components/screens/home/categorySlider/slider'
import styles from '@/components/screens/home/categorySlider/style.module.sass'

import { useApp } from '@/hooks/useApp'

const sliderItemsData = [
	'All',
	'Live',
	'UX/UI',
	'Music',
	'User Interface design',
	'Graphic design',
	'User experience design',
	'UI',
	'Interaction design',
	'My web components',
	'Web Sites',
	'Live',
	'UX/UI',
	'Music',
	'User Interface design',
]

export default function CategorySlider() {
	const { isMainDrawer } = useApp()
	const mainDrawerBreakpoint = useMediaQuery(`(min-width:1348px)`)
	const ref = useRef()

	const sliderItems = sliderItemsData.map((item, index) => {
		return (
			<li
				className={cn(styles.li, {
					[styles.active]: index === 0,
				})}
			>
				{item}
			</li>
		)
	})

	useEffect(() => {
		if (ref.current) slider(ref.current)
	}, [])

	return (
		<header className={styles.menuHeader}>
			<div
				className={cn(styles.topMenu, {
					[styles.mobileWidth]: !isMainDrawer,
				})}
			>
				<div ref={ref} className={styles.myslider}>
					<div className={styles.wrapper}>
						<ul className={styles.ul}>{sliderItems}</ul>
					</div>
				</div>
			</div>
		</header>
	)
}
