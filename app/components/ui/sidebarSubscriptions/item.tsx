import Link from 'next/link'
import { FC } from 'react'
import { useQuery } from 'react-query'
import ChannelService from 'services/channel.service'

import styles from '@/components/layout/MainLayout/Drawer/MainDrawer/style.module.sass'

interface Item {
	id: string
}

const Item: FC<Item> = ({ id }) => {
	const { data: channel } = useQuery(`channel${id}`, () => ChannelService.getById(id))

	//const channel = item

	return (
		<li className={styles.li}>
			{channel && (
				<Link href={`/channel?id=${channel.id && channel.id}`} className={styles.a}>
					<img src={channel.snippet.thumbnails.default.url} alt='User avatar' className={styles.image} />
					<span className={styles.title}>{channel.snippet.title}</span>
				</Link>
			)}
		</li>
	)
}

export default Item
