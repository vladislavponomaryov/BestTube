import NavItem from '@/components/layout/MainLayout/Drawer/MainDrawer/NavItem'
import styles from '@/components/layout/MainLayout/Drawer/MainDrawer/style.module.sass'

import { MenuItem } from '@/configs/menu.interface'

type NavGroupItemProps = {
	id: string
	title: string
	type: string
	children?: MenuItem[]
}

const NavGroup = ({ item }) => {
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
