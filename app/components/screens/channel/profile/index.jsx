export default function ChannelProfile({ channel }) {
	const sn = channel.snippet,
		st = channel.statistics

	return (
		<div className='title'>
			<div className='profile'>
				<img src={sn.thumbnails.default.url} alt='Channel avatar' />
				<div className='information'>
					<h1>{sn.title}</h1>
					<div>
						<span>{sn.customUrl && sn.customUrl}</span>
						<span>{st.subscriberCount && st.subscriberCount + 'subscribers'}</span>
						<span>{st.videoCount && st.videoCount + 'video'}</span>
					</div>
					<pre>{sn.description}</pre>
				</div>
			</div>
			<button>Subscribes</button>
		</div>
	)
}
