import userPhoto from '../../../../assets/images/userAvatars/2.png'

export default function Comment() {
	return (
		<li>
			<img src={userPhoto} alt='User photo' />
			<div>
				<div className='header'>
					<span>James Gouse</span>
					<span>8 hours ago</span>
				</div>
				<p>Wow, world is full of different skills</p>
				<div className='buttons'>
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
