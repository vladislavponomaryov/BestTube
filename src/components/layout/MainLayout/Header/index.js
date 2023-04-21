import hiddenHeader from 'components/layout/MainLayout/Header/hiddenHeader'

import HeaderNavigation from './headerNavigation'
import Logotype from './logo'
import Search from './search'
import './style.component.sass'

export default function Header() {
	hiddenHeader()

	return (
		<header>
			<Logotype />
			<Search />
			<HeaderNavigation />
		</header>
	)
}
