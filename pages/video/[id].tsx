import { GetStaticProps } from 'next'
import { FC } from 'react'

import { Video } from '@/screens/video'

import { IVideo } from '@/shared/types/services/video.interface'

import { projectData } from '@/services/data.services'
import VideoService from '@/services/video.service'

const VideoPage: FC = (props: {}) => {
	return <Video {...props} />
}

export async function getStaticPaths() {
	const paths = projectData.video.map(item => {
		return {
			params: {
				id: item.id,
			},
		}
	})

	return {
		paths,
		fallback: 'blocking',
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const id = params!.id
	const videoItem: IVideo = await VideoService.getById(id)

	return {
		props: {
			videoItem,
			id,
		},
	}
}

export default VideoPage
