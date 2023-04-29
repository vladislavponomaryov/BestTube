import cn from 'clsx'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'

import '@/components/ui/videoContent/style.module.sass'
import styles from '@/components/ui/videoContent/style.module.sass'

import contentLayoutController from '@/ui/videoContent/contentLayoutController'
import Item from '@/ui/videoContent/item'

import { projectData } from '@/services/data.services'

export default function VideoContent({ videoList, videoCount }) {
	const { pathname } = useRouter()
	const channels = projectData.channel
	const cssClass = pathname?.slice(1) ? pathname?.slice(1) : 'home'
	const videoElementRef = useRef()

	let videoContent = videoList.map((item, index) => <Item item={videoList[index]} channels={channels} key={index} />)

	useEffect(() => {
		contentLayoutController(cssClass, videoElementRef.current)
	}, [videoContent])

	return (
		<div className={cn('videoContent', styles.videoContent, styles[cssClass])} ref={videoElementRef}>
			{videoContent}
		</div>
	)
}
