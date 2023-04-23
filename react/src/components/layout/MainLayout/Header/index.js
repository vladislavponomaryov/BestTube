import hiddenHeader from 'react/src/components/layout/MainLayout/Header/hiddenHeader'

import HeaderNavigation from 'react/src/components/layout/MainLayout/Header/headerNavigation'
import Logotype from 'react/src/components/layout/MainLayout/Header/logo'
import Search from 'react/src/components/layout/MainLayout/Header/search'
import 'react/src/components/layout/MainLayout/Header/style.component.sass'

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
