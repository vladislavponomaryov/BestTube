import { FC } from 'react'

import '@/components/screens/home/style.module.sass'
import styles from '@/components/screens/home/style.module.sass'

import VideoContent from '@/ui/videoContent'

export const Home: FC<any> = ({ list }) => {
	return (
		<>
			{list && (
				<>
					{/*<CategorySlider />*/}
					<div className={styles.content}>
						<VideoContent videoList={list} />
					</div>
				</>
			)}
		</>
	)
}
