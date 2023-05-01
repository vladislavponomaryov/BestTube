import Link from 'next/link'
import React, { FC } from 'react'

import styles from '@/components/layout/MainLayout/Drawer/MainDrawer/Footer/style.module.sass'

interface Item {
	name: string
	href: string
}

const Item: FC<Item> = ({ name, href }) => {
	return (
		<li className={styles.li}>
			<Link href={href} className={styles.a}>
				{name}
			</Link>
		</li>
	)
}

export default Item
