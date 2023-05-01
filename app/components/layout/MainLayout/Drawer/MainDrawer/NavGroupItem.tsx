import { FC } from 'react'

import NavItem from '@/components/layout/MainLayout/Drawer/MainDrawer/NavItem'
import styles from '@/components/layout/MainLayout/Drawer/MainDrawer/style.module.sass'

interface NavGroupItem {
	item: {
		id: string
		title: string
		type: string
		children?: {
			id: string
			title: string
			type: string
		}[]
	}
}

const NavGroup: FC<NavGroupItem> = ({ item }) => {
	const navItem = item.children?.map(item => {
		return <NavItem key={item.id} item={item} />
	})

	return (
		<div>
			{item.title && <h5 className={styles.h5}>{item.title}</h5>}
			<ul className={styles.category}>{navItem}</ul>
		</div>
	)
}

export default NavGroup
