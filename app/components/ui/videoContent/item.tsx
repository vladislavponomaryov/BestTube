import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from '@/components/ui/videoContent/style.module.sass'

import getPathname from '@/hooks/getPathname'

import { IChannel } from '@/shared/types/services/channel.interface'
import { IVideo } from '@/shared/types/services/video.interface'

interface Item {
	item: IVideo
	channels: IChannel[]
}

const Item: FC<Item> = ({ item, channels }) => {
	const sn = item.snippet,
		st = item.statistics
	const videoId = item?.contentDetails?.videoId ? item?.contentDetails?.videoId : item.id
	let channel: IChannel = channels.find((channel: IChannel) => channel.id === sn.channelId)
	const pathname = getPathname()

	return (
		<section
			className={cn(styles.section, {
				[styles['videoSection']]: pathname === 'video',
				[styles['channelSection']]: pathname === 'channel',
			})}
		>
			<Link href={{ pathname: `/video/${videoId}` }} className={styles.imageBlock}>
				<div>
					<Image src={sn.thumbnails.high.url} className={styles.image} width={338} height={253} alt='Preview image' />
					{/*<div className={styles.videoLength}>23:45</div>*/}
				</div>
			</Link>
			<div className={styles.wrapper}>
				<Link className={styles.account} href={`/channel/${sn.channelId}`}>
					<Image height={36} width={36} src={channel.snippet.thumbnails.default.url} alt='Account image' />
				</Link>
				<Link className={styles.information} href={`/video/${item.id}`}>
					<h4>{sn.title}</h4>
					<span className={styles.accountName}>{sn.channelTitle}</span>
					{st && st.viewCount && <span>{st.viewCount} Views</span>}

					<span>1 week ago</span>
				</Link>
			</div>
		</section>
	)
}

export default Item
