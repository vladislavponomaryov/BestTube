import { useRouter } from 'next/router'
import { useEffect } from 'react'

import contentLayoutController from '@/components/ui/videoContent/contentLayoutController'
import '@/components/ui/videoContent/style.module.sass'
import styles from '@/components/ui/videoContent/style.module.sass'

import Item from '@/ui/videoContent/item'

import { projectData } from '@/services/data.services'

export default function VideoContent({ videoList, videoCount }) {
	const { pathname } = useRouter()
	const channels = projectData.channel

	useEffect(() => {
		contentLayoutController(pathname)
	}, [videoList])
	let videoContent = videoList.map((item, index) => <Item item={videoList[index]} channels={channels} key={index} />)

	return <div className={styles.videoContent}>{videoContent}</div>
}
