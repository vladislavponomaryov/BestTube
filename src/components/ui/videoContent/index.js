import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import contentLayoutController from 'components/ui/videoContent/contentLayoutController'
import Item from 'components/ui/videoContent/item'

import './style.component.sass'

export default function VideoContent({ videoList, videoCount }) {
	const location = useLocation()
	const channels = useSelector(state => state.channel.list)

	useEffect(() => {
		contentLayoutController(location)
	}, [videoList])
	let videoContent = videoList.map((item, index) => <Item item={videoList[index]} channels={channels} key={index} />)

	return <div className='videoContent'>{videoContent}</div>
}
