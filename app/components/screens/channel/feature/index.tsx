import Link from 'next/link'
import { FC } from 'react'
import { useQuery } from 'react-query'

import styles from '@/components/screens/channel/feature/style.module.sass'

import { IVideo } from '@/shared/types/services/video.interface'

import VideoService from '@/services/video.service'

interface Feature {
	id: string
}

const Feature: FC<Feature> = ({ id }) => {
	const { data } = useQuery(id, () => VideoService.getById(id))
	const item: IVideo = data

	return (
		<>
			{item && (
				<div className={styles.feature}>
					<Link href={{ pathname: `/video/${item.id}` }}>
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

export default Feature
