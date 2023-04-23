import logo from 'react/src/assets/images/logo.svg'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {toggleDrawer} from 'react/src/store/slices/app'

export default function Logotype() {
	const dispatch = useDispatch()
	const openDrawer = useSelector(state => state.app.openDrawer)

	function drawerEvent() {
		dispatch(toggleDrawer(!openDrawer))
	}

	return (
		<div className='start'>
			<button id='button-guide' className='icon' onClick={() => drawerEvent()}>
				<span className='_icon-hamburger'></span>
			</button>
			<Link to='/' className='button-logo'>
				<div className='logo'>
					<img src={logo} alt='Logotype Youtube' />
				</div>
			</Link>
		</div>
	)
}
