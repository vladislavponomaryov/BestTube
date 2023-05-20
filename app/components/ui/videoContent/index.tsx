import cn from 'clsx'
import { FC, useEffect, useRef } from 'react'

import '@/components/ui/videoContent/style.module.sass'
import styles from '@/components/ui/videoContent/style.module.sass'

import contentLayoutController from '@/ui/videoContent/contentLayoutController'
import Item from '@/ui/videoContent/item'

import usePathname from '@/hooks/usePathname'

import { IChannel } from '@/shared/types/services/channel.interface'
import { IVideo } from '@/shared/types/services/video.interface'

import { projectData } from '@/services/data.services'

interface VideoContent {
	videoList: any
}

const VideoContent: FC<VideoContent> = ({ videoList }) => {
	const pathname = usePathname()
	const channels: IChannel[] = projectData.channel
	const cssClass = pathname === '' ? 'home' : pathname
	const videoElementRef = useRef(null)

	let videoContent = videoList.map((item: IVideo, index: number) => <Item item={item} channels={channels} key={index} />)

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
