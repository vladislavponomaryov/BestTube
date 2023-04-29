import Link from 'next/link'
import { useQuery } from 'react-query'
import VideoService from 'services/video.service'

import styles from '@/components/screens/channel/feature/style.module.sass'

export default function Feature({ id }) {
	const { data: item } = useQuery(id, () => VideoService.getById(id))

	return (
		<>
			{item && (
				<div className={styles.feature}>
					<Link href={`/video?id=${item.id}`}>
						<img src={item.snippet.thumbnails.high.url} alt='Feature image' />
					</Link>
					<div className={styles.information}>
						<h3>{item.snippet.title}</h3>
						<span>
							{item.statistics.viewCount} views. {item.snippet.publishedAt} weeks ago
						</span>
						<pre>{item.snippet.description}</pre>
					</div>
				</div>
			)}
		</>
	)
}
