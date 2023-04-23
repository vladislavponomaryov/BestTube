import {useQuery} from 'react-query'
import {Link} from 'react-router-dom'
import ChannelService from 'react/src/services/channel.service'

export default function Item({ id, item }) {
	const { data: channel } = useQuery(`channel${id}`, () => ChannelService.getById(id))

	//const channel = item

	return (
		<li>
			{channel && (
				<Link to={`/channel?id=${channel.id && channel.id}`}>
					<img src={channel.snippet.thumbnails.default.url} alt='User avatar' />
					<span className='title'>{channel.snippet.title}</span>
				</Link>
			)}
		</li>
	)
}
