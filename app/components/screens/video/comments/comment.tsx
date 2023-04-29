import userPhoto from 'assets/images/userAvatars/2.png'
import Image from 'next/image'

import styles from '@/components/screens/video/comments/style.module.sass'

export default function Comment() {
	return (
		<li className={styles.item}>
			<Image src={userPhoto} alt='User photo' />
			<div>
				<div className={styles.header}>
					<span>James Gouse</span>
					<span>8 hours ago</span>
				</div>
				<p>Wow, world is full of different skills</p>
				<div className={styles.buttons}>
					<button>
						<span className='_icon-Liked'></span>3
					</button>
					<button>
						<span className='_icon-DisLiked'></span>
					</button>
					<button>REPLY</button>
				</div>
			</div>
		</li>
	)
}
