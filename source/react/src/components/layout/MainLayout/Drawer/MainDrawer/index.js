import menuItems from 'menu-items'

import NavGroup from 'components/layout/MainLayout/Drawer/MainDrawer/NavGroup'
import 'components/layout/MainLayout/Drawer/MainDrawer/style.sass'

import Subscriptions from 'components/ui/sidebarSubscriptions'

export default function MainDrawer() {
	// Subscriptions block
	const navGroups = menuItems.children.map(item => {
		if (item.id === 'group-3') return <Subscriptions key={item.id} item={item} />
		return <NavGroup key={item.id} item={item} />
	})

	return <div className='full-guide'>{navGroups}</div>
}
