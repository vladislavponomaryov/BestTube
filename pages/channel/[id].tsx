import { GetStaticProps } from 'next'
import { FC } from 'react'

import { Channel } from '@/screens/channel'

import { IChannel } from '@/shared/types/services/channel.interface'

import ChannelService from '@/services/channel.service'
import { projectData } from '@/services/data.services'

const ChannelPage: FC = (props: {}) => {
	return <Channel {...props} />
}

export async function getStaticPaths() {
	const paths = projectData.channel.map(item => {
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
	const channelItem: IChannel = await ChannelService.getById(id)
	//const channelItem = projectData.channel.find(element => element.id === id)

	return {
		props: {
			channelItem,
			id,
		},
	}
}

export default ChannelPage
