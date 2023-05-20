import { GetStaticProps } from 'next'

import { Home } from '@/screens/home'

import { IVideo } from '@/shared/types/services/video.interface'

import VideoService from '@/services/video.service'

const HomePage = (props: {}) => {
	return <Home {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
	const list: IVideo[] = await VideoService.getPopular(32)

	//const list = projectData.video

	return {
		props: {
			list,
		},
	}
}

export default HomePage
