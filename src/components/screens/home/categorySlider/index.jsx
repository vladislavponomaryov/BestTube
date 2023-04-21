//Slider styles
import useMediaQuery from 'hooks/useMediaQuery'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import slider from 'components/screens/home/categorySlider/slider'

import './style.component.sass'

export default function CategorySlider() {
	const mainDrawer = useSelector(state => state.app.mainDrawer)
	const mainDrawerBreakpoint = useMediaQuery(`(min-width:1348px)`)

	//TODO: change code in clsx style
	let componentTopMenu = styled.div.attrs(() => ({ className: 'top-menu' }))
	let TopMenu =
		!mainDrawer && mainDrawerBreakpoint
			? componentTopMenu`
      width: calc(100% - 72px) !important;
    `
			: componentTopMenu``

	slider()

	return (
		<header className='menu-header'>
			<TopMenu>
				<div myslider>
					<div className='wrapper'>
						<ul>
							<li className='active'>All</li>
							<li>Live</li>
							<li>UX/UI</li>
							<li>Music</li>
							<li>User Interface design</li>
							<li>Graphic design</li>
							<li>User experience design</li>
							<li>UI</li>
							<li>Interaction design</li>
							<li>My web components</li>
							<li>Web Sites</li>
							<li>Live</li>
							<li>UX/UI</li>
							<li>Music</li>
							<li>User Interface design</li>
						</ul>
					</div>
				</div>
			</TopMenu>
		</header>
	)
}
