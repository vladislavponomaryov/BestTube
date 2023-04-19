import MainLayout from 'components/layout/MainLayout'
import VideoContent from 'components/ui/videoContent'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import CategorySlider from './categorySlider'
import './style.component.sass'

export const Home = () => {
	const dispatch = useDispatch()
	let list = useSelector(state => state.video.list)

	useEffect(() => {
		//dispatch(getPopularVideo(32))
	}, [])

	return (
		<MainLayout>
			<div className='content home'>
				<CategorySlider />
				<VideoContent videoList={list} videoCount={4} />
			</div>
		</MainLayout>
	)
}
