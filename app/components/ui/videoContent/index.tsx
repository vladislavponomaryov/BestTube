import cn from 'clsx'
import { FC, useEffect, useRef } from 'react'

import '@/components/ui/videoContent/style.module.sass'
import styles from '@/components/ui/videoContent/style.module.sass'

import contentLayoutController from '@/ui/videoContent/contentLayoutController'
import Item from '@/ui/videoContent/item'

import getPathname from '@/hooks/getPathname'

import { IChannel } from '@/shared/types/services/channel.interface'
import { IVideo } from '@/shared/types/services/video.interface'

import { projectData } from '@/services/data.services'

interface VideoContent {
	videoList: IVideo[]
}

const VideoContent: FC<VideoContent> = ({ videoList }) => {
	const pathname = getPathname()
	const channels: IChannel[] = projectData.channel
	const cssClass = pathname === '' ? 'home' : pathname
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
