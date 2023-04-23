import {useQuery} from 'react-query'
import {Link} from 'react-router-dom'
import VideoService from 'react/src/services/video.service'

export default function Feature({ id }) {
	const { data: item } = useQuery(id, () => VideoService.getById(id))

	return (
		<>
			{item && (
				<div className='feature'>
					<Link to={`/video?id=${item.id}`}>
						<img src={item.snippet.thumbnails.high.url} alt='Feature image' />
					</Link>
					<div className='information'>
						<h3>{item.snippet.title}</h3>
						<span>
							{item.statistics.viewCount} views. {item.snippet.publishedAt} weeks ago
						</span>
						<pre>{item.snippet.description}</pre>
					</div>
				</div>
			)}
		</>
	)
}
