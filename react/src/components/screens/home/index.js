import {useQuery} from 'react-query'
import VideoService from 'react/src/services/video.service'

import MainLayout from 'react/src/components/layout/MainLayout'

import CategorySlider from 'react/src/components/screens/home/categorySlider'

import VideoContent from 'react/src/components/ui/videoContent'

import 'react/src/components/screens/home/style.component.sass'

export const Home = () => {
	const { data: list } = useQuery(['get popular video'], () => VideoService.getPopular(32))

	//const list = useSelector(state => state.video.list)

	return (
		<MainLayout>
			{list && (
				<div className='content home'>
					<CategorySlider />
					<VideoContent videoList={list} videoCount={4} />
				</div>
			)}
		</MainLayout>
	)
}
