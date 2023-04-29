import NavGroup from 'components/layout/MainLayout/Drawer/MainDrawer/NavGroup'

import Subscriptions from '@/ui/sidebarSubscriptions'

import menuItems from '@/configs/menu-items'

export default function MainDrawer() {
	// Subscriptions block
	const navGroups = menuItems.children.map(item => {
		if (item.id === 'group-3') return <Subscriptions key={item.id} item={item} />
		return <NavGroup key={item.id} item={item} />
	})

	return <div>{navGroups}</div>
}
