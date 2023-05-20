import Link from 'next/link'
import { FC } from 'react'
import { useQuery } from 'react-query'

import styles from '@/components/layout/MainLayout/Drawer/MainDrawer/style.module.sass'

import { IChannel } from '@/shared/types/services/channel.interface'
import { IVideo } from '@/shared/types/services/video.interface'

import ChannelService from '@/services/channel.service'

interface Item {
	id: string
	item?: IVideo
	key?: string | number
}

const Item: FC<Item> = ({ id }) => {
	const { data } = useQuery(`channel${id}`, () => ChannelService.getById(id))
	const channel: IChannel = data

	//const channel = item

	return (
		<li className={styles.li}>
			{channel && (
				<Link href={{ pathname: `/channel/${channel?.id}` }} className={styles.a}>
					<img src={channel.snippet.thumbnails.default.url} alt='User avatar' className={styles.image} />
					<span className={styles.title}>{channel.snippet.title}</span>
				</Link>
			)}
		</li>
	)
}

export default Item
