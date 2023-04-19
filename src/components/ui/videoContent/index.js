import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import Item from './item'
import './style.component.sass'

export default function VideoContent({ videoList, videoCount }) {
	//console.log(videoList)

	const dispatch = useDispatch()
	const channels = useSelector(state => state.channel.list)
	const location = useLocation()

	// contentLayoutController
	useEffect(() => {
		let page = getPageName()
		let selector = `main .content.${page} .videoContent`

		if (!document.querySelector(selector)) return

		let mainContainer = document.querySelector(selector)
		let mainContainerStyle = getComputedStyle(mainContainer)
		let mainContainerWidth = clearPX(mainContainerStyle.getPropertyValue('width'))
		let currentCW, largeCW, desktopCW, mediumCW, smallCW, extraSmallCW

		switch (page) {
			case 'home':
				largeCW = 1700
				desktopCW = 1400
				mediumCW = 982
				smallCW = 600
				extraSmallCW = 599.95
				break
			case 'channel':
				largeCW = 1030
				desktopCW = 820
				mediumCW = 610
				smallCW = 479
				extraSmallCW = 478.95
				break
			case 'video':
				largeCW = 1030
				desktopCW = 820
				mediumCW = 610
				smallCW = 479
				extraSmallCW = 478.95
				break
		}

		new ResizeObserver(entries => {
			// We wrap it in requestAnimationFrame to avoid this error - ResizeObserver loop limit exceeded
			window.requestAnimationFrame(() => {
				if (!Array.isArray(entries) || !entries.length) {
					return
				}
				getParams()
				controll()
			})
		}).observe(mainContainer)

		function clearPX(element) {
			return +element.slice(0, element.length - 2)
		}

		function getPageName() {
			let url = location.pathname.slice(1)
			return url ? url : 'home'
		}

		function getParams() {
			mainContainerStyle = getComputedStyle(mainContainer)
			mainContainerWidth = clearPX(mainContainerStyle.getPropertyValue('width'))
		}

		function addStyles(styles) {
			let id = 'mainContentStyles'

			if (document.getElementById(id)) {
				let stylesElement = document.getElementById(id)
				stylesElement.innerHTML = styles
			} else {
				let stylesElement = document.createElement('style')
				stylesElement.id = id
				document.head.append(stylesElement)

				stylesElement.innerHTML = styles
			}
		}

		function checkCurrentPosition(gettingCW, quantityElements) {
			if (currentCW !== gettingCW) {
				currentCW = gettingCW
				let additional = ''

				if (page === 'home') {
					if (currentCW === largeCW || currentCW === mediumCW) {
						additional = 'main .content .videoContent section:last-child, main .content section:nth-child(31) {display: none}'
					}
				}

				if (page === 'channel') {
					if (currentCW === desktopCW) {
						additional = 'main .content .videoContent section:last-child {display: none}'
					}

					if (currentCW === mediumCW) {
						additional = 'main .content .videoContent section:last-child, main .content .videoContent section:nth-child(4) {display: none}'
					}

					if (currentCW === smallCW) {
						additional =
							'main .content .videoContent section:nth-child(3), main .content .videoContent section:nth-child(4), .videoContent section:last-child {display: none}'
					}

					if (currentCW === extraSmallCW) {
						additional =
							'main .content .videoContent {flex-direction: column} main .content .videoContent section:nth-child(4), .videoContent section:last-child {display: none !important}'
					}
				}

				addStyles(`
            main .content .videoContent section {flex: 1 0 calc(${100 / quantityElements}% - 16px - 0.01px)}${additional}`)
			}
		}

		function controll() {
			switch (true) {
				case mainContainerWidth > largeCW: {
					checkCurrentPosition(largeCW, 5)
					break
				}
				case mainContainerWidth > desktopCW: {
					checkCurrentPosition(desktopCW, 4)
					break
				}
				case mainContainerWidth > mediumCW: {
					checkCurrentPosition(mediumCW, 3)
					break
				}
				case mainContainerWidth > smallCW: {
					checkCurrentPosition(smallCW, 2)
					break
				}
				case mainContainerWidth < extraSmallCW: {
					checkCurrentPosition(extraSmallCW, 1)
					break
				}
			}
		}
	}, [])

	let videoContent = []

	videoContent = videoList.map((item, index) => <Item item={videoList[index]} channels={channels} key={index} />)

	return <div className='videoContent'>{videoContent}</div>
}
