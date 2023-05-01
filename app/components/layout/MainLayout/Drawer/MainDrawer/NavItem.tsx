import Link from 'next/link'
import { FC } from 'react'

import styles from '@/components/layout/MainLayout/Drawer/MainDrawer/style.module.sass'

interface NavItem {
	item: any
}

const NavItem: FC<NavItem> = ({ item }) => {
	let icon = item.icon ? '_icon-' + item.icon : false

	return (
		<li className={styles.li}>
			<Link href={item.url} className={styles.a}>
				{icon && <span className={icon}></span>}
				<span className={styles.title}>{item.title}</span>
			</Link>
		</li>
	)
}

export default NavItem
