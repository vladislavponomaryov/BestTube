import CategorySlider from '@/screens/home/categorySlider'

import '@/components/screens/home/style.module.sass'
import styles from '@/components/screens/home/style.module.sass'

import VideoContent from '@/ui/videoContent'

import { IVideo } from '@/shared/types/services/video.interface'

import { projectData } from '@/services/data.services'

export const Home = () => {
	/*const { data } = useQuery(['get popular video'], () => VideoService.getPopular(32))
	const list: IVideo[] = data*/

	const list: IVideo[] = projectData.video

	return (
		<>
			{list && (
				<>
					<CategorySlider />
					<div className={styles.content}>
						<VideoContent videoList={list} />
					</div>
				</>
			)}
		</>
	)
}
