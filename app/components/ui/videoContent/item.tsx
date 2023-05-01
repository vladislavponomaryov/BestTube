import cn from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import styles from '@/components/ui/videoContent/style.module.sass'

interface Item {
	item: any
	channels: any
}

const Item: FC<Item> = ({ item, channels }) => {
	const sn = item.snippet,
		st = item.statistics
	const videoId = item?.contentDetails?.videoId ? item?.contentDetails?.videoId : item.id
	let channel = channels.find((channel: any) => channel.id === sn.channelId)
	const { pathname } = useRouter()

	return (
		<section
			className={cn(styles.section, {
				[styles['videoSection']]: pathname === '/video',
				[styles['channelSection']]: pathname === '/channel',
			})}
		>
			<Link href={{ pathname: '/video', query: { id: videoId } }} className={styles.imageBlock}>
				<div>
					<img src={sn.thumbnails.high.url} className={styles.image} alt='Preview image' />
					{/*<div className={styles.videoLength}>23:45</div>*/}
				</div>
			</Link>
			<div className={styles.wrapper}>
				<Link className={styles.account} href={`/channel?id=${sn.channelId}`}>
					<img src={sn.thumbnails.default.url} alt='Account image' />
				</Link>
				<Link className={styles.information} href={`/video?id=${item.id}`}>
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
