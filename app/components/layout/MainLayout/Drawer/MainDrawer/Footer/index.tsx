import Item from '@/components/layout/MainLayout/Drawer/MainDrawer/Footer/item'
import styles from '@/components/layout/MainLayout/Drawer/MainDrawer/Footer/style.module.sass'

const footerMenuItemsFirst = [
	{ name: 'About', href: 'about' },
	{ name: 'Press', href: 'press' },
	{ name: 'Copyright', href: 'copyright' },
	{ name: 'Contact us', href: 'contactUs' },
	{ name: 'Creators', href: 'creators' },
	{ name: 'Advertise', href: 'advertise' },
	{ name: 'Developers', href: 'developers' },
]

const footerMenuItemsSecond = [
	{ name: 'Terms', href: 'terms' },
	{ name: 'Privacy', href: 'privacy' },
	{ name: 'Policy & Safety', href: 'policySafety' },
	{ name: 'How YouTube works', href: 'HowYouTubeWorks' },
	{ name: 'Test new features', href: 'testNewFeatures' },
]

export default function Footer() {
	const drawerFooterFirst = footerMenuItemsFirst.map((item, index) => <Item key={index} name={item.name} href={item.href} />)
	const drawerFooterSecond = footerMenuItemsSecond.map((item, index) => <Item key={index} name={item.name} href={item.href} />)

	return (
		<footer className={styles.footer}>
			<ul className={styles.ul}>{drawerFooterFirst}</ul>
			<ul className={styles.ul}>{drawerFooterSecond}</ul>
		</footer>
	)
}
