import { useSelector } from 'react-redux'

import Item from 'components/ui/sidebarSubscriptions/item'

export default function Subscriptions({ item }) {
	const state = useSelector(state => state)
	const videoState = state.video
	const channelState = state.channel.list

	// TODO: refactor query sidebarSubscriptions

	const channelBar = videoState?.list.map((item, index) => {
		const id = item.snippet.channelId
		return <Item key={index} id={id} />
	})

	/*const channelBar = channelState?.map((item, index) => {
		const id = item?.snippet?.channelId
		return <Item key={index} id={id} item={item} />
	})*/

	return (
		<div>
			{item.title && <h5>{item.title}</h5>}
			<ul className='category'>{channelBar}</ul>
		</div>
	)
}
