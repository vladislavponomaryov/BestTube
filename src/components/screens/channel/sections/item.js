import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import VideoContent from '../../../../components/ui/videoContent'

export default function Section({ item, playlistItem }) {
	let dispatch = useDispatch()
	let list = playlistItem

	//console.log(list)

	return (
		<div className='category'>
			<div className='title'>
				<h4>{item.snippet.title}</h4>
				<span className='_icon-play'></span>PLAY ALL
			</div>
			{list && <VideoContent videoList={list} videoCount={5} />}
		</div>
	)
}
