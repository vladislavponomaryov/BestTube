import Subscriptions from 'react/src/components/ui/sidebarSubscriptions'
import menuItems from 'react/src/menu-items'

import NavGroup from 'react/src/components/layout/MainLayout/Drawer/MainDrawer/NavGroup'
import 'react/src/components/layout/MainLayout/Drawer/MainDrawer/style.sass'

export default function MainDrawer() {
	// Subscriptions block
	const navGroups = menuItems.children.map(item => {
		if (item.id === 'group-3') return <Subscriptions key={item.id} item={item} />
		return <NavGroup key={item.id} item={item} />
	})

	return <div className='full-guide'>{navGroups}</div>
}
