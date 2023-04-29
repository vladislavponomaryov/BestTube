import userImage from 'assets/images/userAvatars/4.png'
import Image from 'next/image'

import Comment from '@/screens/video/comments/comment'

import styles from '@/components/screens/video/comments/style.module.sass'

export default function Comments() {
	let comments = []
	for (let i = 0; i < 3; i++) {
		comments.push(<Comment key={i} />)
	}

	return (
		<div className={styles.comment}>
			<div className={styles.info}>
				<span>286 Comments</span>
				<button>
					<span className='_icon-Dropdown'></span>SORT BY
				</button>
			</div>
			<div className={styles.add}>
				<Image src={userImage} alt='My photo' />
				<label htmlFor='addComment'></label>
				<input type='text' id='addComment' placeholder='Add a public comment...' />
			</div>
			<ul className={styles.list}>{comments}</ul>
		</div>
	)
}
