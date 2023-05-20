import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from '@/screens/search/style.module.scss'

import { ISearch } from '@/shared/types/services/search.interface'

interface SearchItem {
	item: ISearch
}

const Item: FC<SearchItem> = ({ item }) => {
	const sn = item.snippet

	return (
		<section className={styles.section}>
			<Link href={{ pathname: `/video/${item.id.videoId}` }} className={styles.imageBlock}>
				<div>
					<Image src={sn?.thumbnails?.high?.url} className={styles.image} width={338} height={253} alt='Preview image' />
					{/*<div className={styles.videoLength}>23:45</div>*/}
				</div>
			</Link>
			<div className={styles.wrapper}>
				<Link className={styles.account} href={`/channel/${sn.channelId}`}>
					<Image height={36} width={36} src={sn?.thumbnails?.default?.url} alt='Account image' />
				</Link>
				<Link className={styles.information} href={`/video/${item.id}`}>
					<h4>{sn.title}</h4>
					<span className={styles.accountName}>{sn.channelTitle}</span>

					<span>1 week ago</span>
				</Link>
			</div>
		</section>
	)
}

export default Item
