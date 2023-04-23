import userAvatar from 'react/src/assets/images/userAvatars/9.png'
import {useEffect, useState} from 'react'
import {useQuery} from 'react-query'
import {useSelector} from 'react-redux'
import {useLocation, useNavigate} from 'react-router-dom'
import VideoService from 'react/src/services/video.service'

import MainLayout from 'react/src/components/layout/MainLayout'

import videoPageHeight from 'react/src/components/screens/video/videoPageHeight'

import VideoContent from 'react/src/components/ui/videoContent'

import Comments from 'react/src/components/screens/video/comments'
import 'react/src/components/screens/video/style.component.sass'

export const Video = () => {
	const { search } = useLocation()
	const navigate = useNavigate()
	const list = useSelector(state => state.video.list)
	const id = search.slice(search.indexOf('=') + 1) ? search.slice(search.indexOf('=') + 1) : navigate('/')

	const { data: video } = useQuery(`video${id}`, () => VideoService.getById(id))

	let sn = video?.snippet,
		st = video?.statistics

	useEffect(() => {
		videoPageHeight()
	}, [sn])

	// Video description
	let [miniClass, setMiniClass] = useState('')
	function descriptionToggle() {
		setMiniClass(miniClass === '' ? 'mini' : '')
	}

	return (
		<MainLayout>
			{sn && (
				<div className='content video'>
					<div className='primary'>
						<div className='videoPlayer'>
							<iframe
								width='100%'
								height='360'
								src={`https://www.youtube.com/embed/${id}?autoplay=1`}
								title='YouTube video player'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
								allowFullScreen
							></iframe>
						</div>
						<div className='videoInfo'>
							<h1>{sn.title && sn.title}</h1>
							<div>
								<span>
									{st.viewCount} views . {sn.publishedAt}
								</span>
								<div className='buttons'>
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
						<div className='videoDesc'>
							<div className='top-level'>
								<div className='account-info'>
									<img src={userAvatar} alt='User avatar' />
									<div>
										<h4>{sn.channelTitle}</h4>
										<span>1.2M subscribers</span>
									</div>
								</div>
								<button>Subscribes</button>
							</div>
							<div className={`description ${miniClass}`} onClick={descriptionToggle}>
								<pre>{sn.description}</pre>
								<button>Show more</button>
							</div>
						</div>
						<Comments />
					</div>
					<VideoContent videoList={list} videoCount={15} />
				</div>
			)}
		</MainLayout>
	)
}
