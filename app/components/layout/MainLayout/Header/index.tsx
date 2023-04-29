import HeaderNavigation from '@/components/layout/MainLayout/Header/headerNavigation'
import Logotype from '@/components/layout/MainLayout/Header/logo'
import Search from '@/components/layout/MainLayout/Header/search'
import styles from '@/components/layout/MainLayout/Header/style.module.sass'

export default function Header() {
	//hiddenHeader()

	return (
		<header className={styles.header}>
			<Logotype />
			<Search />
			<HeaderNavigation />
		</header>
	)
}
