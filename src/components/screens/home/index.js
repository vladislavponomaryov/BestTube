import { useQuery } from 'react-query'
import VideoService from 'services/video.service'

import MainLayout from 'components/layout/MainLayout'

import CategorySlider from 'components/screens/home/categorySlider'

import VideoContent from 'components/ui/videoContent'

import './style.component.sass'

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
