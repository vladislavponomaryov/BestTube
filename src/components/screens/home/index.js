import { useSelector } from 'react-redux'

import MainLayout from 'components/layout/MainLayout'

import VideoContent from 'components/ui/videoContent'

import CategorySlider from './categorySlider'
import './style.component.sass'

export const Home = () => {
	/*const { data } = useQuery(['get popular video'], () => VideoService.getPopularVideos(32))
	const list = data?.data?.items*/

	const list = useSelector(state => state.video.list)

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
