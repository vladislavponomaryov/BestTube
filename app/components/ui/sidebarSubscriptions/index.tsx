import { FC } from 'react'
import { useQuery } from 'react-query'

import styles from '@/components/layout/MainLayout/Drawer/MainDrawer/style.module.sass'

import Item from '@/ui/sidebarSubscriptions/item'

import { IVideo } from '@/shared/types/services/video.interface'

import VideoService from '@/services/video.service'

interface SubscriptionsItem {
	item: {
		title: string
	}
}

const Subscriptions: FC<SubscriptionsItem> = ({ item }) => {
	//const videoState = projectData.video
	//const channelState = state.channel.list

	const { data } = useQuery('popular videos', () => VideoService.getPopular(32))
	const listPopularVideo: IVideo[] = data

	/*const channelBar = videoState?.map((item, index) => {
		const id = item.snippet.channelId
		return <Item key={index} id={id} />
	})*/

	const channelBar = listPopularVideo?.map((item, index) => {
		const id = item?.snippet?.channelId
		return <Item key={index} id={id} item={item} />
	})

	return (
		<div>
			{item.title && <h5 className={styles.h5}>{item.title}</h5>}
			<ul className={styles.category}>{channelBar}</ul>
		</div>
	)
}

export default Subscriptions
