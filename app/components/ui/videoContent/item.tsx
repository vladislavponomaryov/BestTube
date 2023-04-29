import Link from 'next/link'

import styles from '@/components/ui/videoContent/style.module.sass'

export default function Item({ item, channels }) {
	const sn = item.snippet,
		st = item.statistics
	const videoId = item?.contentDetails?.videoId ? item?.contentDetails?.videoId : item.id
	let channel = channels.find(channel => channel.id === sn.channelId)

	return (
		<section className={styles.section}>
			<Link href={`/video?id=${videoId}`}>
				<div className={styles.imageBlock}>
					<img src={sn.thumbnails.high.url} className={styles.image} alt='Preview image' />
					<div className={styles.videoLength}>23:45</div>
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
