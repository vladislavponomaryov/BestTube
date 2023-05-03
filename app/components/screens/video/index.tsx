import cn from 'clsx'
import VideoContent from 'components/ui/videoContent'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { useQuery } from 'react-query'

import Comments from '@/screens/video/comments'
import styles from '@/screens/video/style.module.sass'
import videoPageHeight from '@/screens/video/videoPageHeight'

import { IVideo } from '@/shared/types/services/video.interface'

import { projectData } from '@/services/data.services'
import VideoService from '@/services/video.service'

import userAvatar from '@/images/userAvatars/9.png'

export const Video = () => {
	const { query } = useRouter()
	const id = query?.id
	const list = projectData.video
	const mainElement = useRef(null)
	const videoPlayerElement = useRef(null)

	const { data } = useQuery(`video${id}`, () => VideoService.getById(id))
	const video: IVideo = data

	let sn = video?.snippet,
		st = video?.statistics

	useEffect(() => {
		videoPageHeight(mainElement.current, videoPlayerElement.current)
	}, [sn])

	// Video description
	let [miniClass, setMiniClass] = useState(false)

	return (
		<div className={styles.content}>
			{sn && (
				<>
					<div className={styles.primary}>
						<div className={styles.videoPlayer} ref={videoPlayerElement}>
							<iframe
								ref={mainElement}
								width='100%'
								height='360'
								src={`https://www.youtube.com/embed/${id}?autoplay=0`}
								title='YouTube video player'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
								allowFullScreen
							></iframe>
						</div>
						<div className={styles.videoInfo}>
							<h1>{sn.title && sn.title}</h1>
							<div>
								<span>
									{st.viewCount} views . {sn.publishedAt}
								</span>
								<div className={styles.buttons}>
									<button>
										<span className='_icon-liked'></span>
										{st.likeCount && st.likeCount}
									</button>
									<button>
										<span className='_icon-DisLiked'></span>0
									</button>
									<button>
										<span className='_icon-Share'></span>Share
									</button>
									<button>
										<span className='_icon-Save'></span>Save
									</button>
									<button>
										<span className='_icon-More'></span>
									</button>
								</div>
							</div>
						</div>
						<div className={styles.videoDesc}>
							<div className={styles.topLevel}>
								<div className={styles.accountInfo}>
									<Image src={userAvatar} alt='User avatar' />
									<div>
										<h4>{sn.channelTitle}</h4>
										<span>1.2M subscribers</span>
									</div>
								</div>
								<button>Subscribes</button>
							</div>
							<div className={cn(styles.description, { [styles.mini]: miniClass })} onClick={() => setMiniClass(!miniClass)}>
								<pre>{sn.description}</pre>
								<button>Show more</button>
							</div>
						</div>
						<Comments />
					</div>
					<VideoContent videoList={list} />
				</>
			)}
		</div>
	)
}
