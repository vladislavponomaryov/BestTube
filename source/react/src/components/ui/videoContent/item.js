import { Link } from 'react-router-dom'

export default function Item({ item, channels }) {
	const sn = item.snippet,
		st = item.statistics
	const videoId = item?.contentDetails?.videoId ? item?.contentDetails?.videoId : item.id
	let channel = channels.find(channel => channel.id === sn.channelId)

	return (
		<section>
			<Link to={`/video?id=${videoId}`}>
				<div className='image'>
					<img src={sn.thumbnails.high.url} alt='Preview image' />
					<div className='videoLength'>23:45</div>
				</div>
			</Link>
			<div className='wrapper'>
				<Link className='account' to={`/channel?id=${sn.channelId}`}>
					<img src={sn.thumbnails.default.url} alt='Account image' />
				</Link>
				<Link className='information' to={`/video?id=${item.id}`}>
					<h4>{sn.title}</h4>
					<span className='account-name'>{sn.channelTitle}</span>
					{st && st.viewCount && <span>{st.viewCount} Views</span>}

					<span>1 week ago</span>
				</Link>
			</div>
		</section>
	)
}
