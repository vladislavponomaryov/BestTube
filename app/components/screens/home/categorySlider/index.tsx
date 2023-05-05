import cn from 'clsx'
import { useEffect, useRef } from 'react'

import slider from '@/screens/home/categorySlider/slider'

import styles from '@/components/screens/home/categorySlider/style.module.sass'

import { useApp } from '@/hooks/useApp'
import useMediaQuery from '@/hooks/useMediaQuery'

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

const CategorySlider = () => {
	const { isMainDrawer } = useApp()
	const mainDrawerBreakpoint = useMediaQuery(`(min-width:1348px)`)
	const ref = useRef(null)

	const sliderItems = sliderItemsData.map((item, index) => {
		return (
			<li
				className={cn(styles.li, {
					[styles.active]: index === 0,
				})}
				key={index}
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

export default CategorySlider
