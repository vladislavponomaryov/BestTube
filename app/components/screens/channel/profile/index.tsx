import Image from 'next/image'

import styles from '@/screens/channel/style.module.sass'

export default function ChannelProfile({ channel }) {
	const sn = channel.snippet,
		st = channel.statistics

	return (
		<div className={styles.title}>
			<div className={styles.profile}>
				<Image src={sn.thumbnails.default.url} width={80} height={80} className={styles.image} alt='Channel avatar' />
				<div className={styles.information}>
					<h1 className={styles.h1}>{sn.title}</h1>
					<div>
						<span className={styles.span}>{sn.customUrl && sn.customUrl}</span>
						<span className={styles.span}>{st.subscriberCount && st.subscriberCount + 'subscribers'}</span>
						<span className={styles.span}>{st.videoCount && st.videoCount + 'video'}</span>
					</div>
					<pre className={styles.pre}>{sn.description}</pre>
				</div>
			</div>
			<button className={styles.button}>Subscribes</button>
		</div>
	)
}
