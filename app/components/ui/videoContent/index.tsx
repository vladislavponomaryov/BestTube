import cn from 'clsx'
import { useRouter } from 'next/router'
import { FC, useEffect, useRef } from 'react'

import '@/components/ui/videoContent/style.module.sass'
import styles from '@/components/ui/videoContent/style.module.sass'

import contentLayoutController from '@/ui/videoContent/contentLayoutController'
import Item from '@/ui/videoContent/item'

import { IChannel } from '@/shared/types/channel.interface'
import { IVideo } from '@/shared/types/video.interface'

import { projectData } from '@/services/data.services'

interface VideoContent {
	videoList: IVideo[]
}

const VideoContent: FC<VideoContent> = ({ videoList }) => {
	const { pathname } = useRouter()
	const channels: IChannel[] = projectData.channel
	const cssClass = pathname?.slice(1) ? pathname?.slice(1) : 'home'
	const videoElementRef = useRef(null)

	let videoContent = videoList.map((item: IVideo) => <Item item={item} channels={channels} key={item.id} />)

	useEffect(() => {
		contentLayoutController(cssClass, videoElementRef.current)
	}, [videoContent])

	return (
		<div className={cn('videoContent', styles.videoContent, styles[cssClass])} ref={videoElementRef}>
			{videoContent}
		</div>
	)
}

export default VideoContent
