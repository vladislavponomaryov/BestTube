import CategorySlider from '@/screens/home/categorySlider'

import '@/components/screens/home/style.module.sass'
import styles from '@/components/screens/home/style.module.sass'

import VideoContent from '@/ui/videoContent'

import { projectData } from '@/services/data.services'

export const Home = () => {
	//const { data: list } = useQuery(['get popular video'], () => VideoService.getPopular(32))

	const list = projectData.video

	return (
		<>
			{list && (
				<>
					<CategorySlider />
					<div className={styles.content}>
						<VideoContent videoList={list} videoCount={4} />
					</div>
				</>
			)}
		</>
	)
}
