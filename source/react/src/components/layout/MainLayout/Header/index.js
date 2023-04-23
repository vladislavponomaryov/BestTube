import HeaderNavigation from 'components/layout/MainLayout/Header/headerNavigation'
import hiddenHeader from 'components/layout/MainLayout/Header/hiddenHeader'
import Logotype from 'components/layout/MainLayout/Header/logo'
import Search from 'components/layout/MainLayout/Header/search'
import 'components/layout/MainLayout/Header/style.component.sass'

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
