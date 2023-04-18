import Subscriptions from '../../../../components/sidebarSubscriptions'
import menuItems from '../../../../menu-items'

import NavGroup from './NavGroup'
import './style.sass'

export default function MainDrawer() {
	// Subscriptions block
	const navGroups = menuItems.children.map(item => {
		if (item.id === 'group-3') return <Subscriptions key={item.id} item={item} />
		return <NavGroup key={item.id} item={item} />
	})

	return <div className='full-guide'>{navGroups}</div>
}
