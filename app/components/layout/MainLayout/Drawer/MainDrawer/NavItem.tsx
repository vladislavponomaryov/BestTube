import Link from 'next/link'

import styles from '@/components/layout/MainLayout/Drawer/MainDrawer/style.module.sass'

export default function NavItem({ item }) {
	let icon = item.icon ? '_icon-' + item.icon : false

	return (
		<li className={styles.li}>
			<Link href={item.url} className={styles.a}>
				{icon && <span className={icon}></span>}
				<span className={styles.title}>{item.title}</span>
			</Link>
		</li>
	)
}
