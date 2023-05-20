import cn from 'clsx'
import Link from 'next/link'
import { FC } from 'react'

import styles from '@/components/layout/MainLayout/Drawer/MainDrawer/style.module.sass'

interface NavItem {
	item: any
	path: string
}

const NavItem: FC<NavItem> = ({ item, path }) => {
	let icon = item.icon ? '_icon-' + item.icon : false
	if (path === '') path = 'Home'

	return (
		<li
			className={cn(styles.li, {
				[styles.active]: item.title === path,
			})}
		>
			<Link href={item.url} className={styles.a}>
				{icon && <span className={icon}></span>}
				<span className={styles.title}>{item.title}</span>
			</Link>
		</li>
	)
}

export default NavItem
