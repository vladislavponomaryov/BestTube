import { FC } from 'react'

import NavGroup from '@/components/layout/MainLayout/Drawer/MainDrawer/NavGroupItem'

import Subscriptions from '@/ui/sidebarSubscriptions'

import menuItems from '@/configs/menu-items'

const MainDrawer: FC = () => {
	// Subscriptions block
	const navGroups = menuItems?.children?.map(item => {
		if (item.id === 'group-3') return <Subscriptions key={item.id} item={item} />
		return <NavGroup key={item.id} item={item} />
	})

	return <div>{navGroups}</div>
}

export default MainDrawer
