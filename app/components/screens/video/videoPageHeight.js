import React from 'react'

const VideoPageHeight = () => {
	let mainSelector = 'main .content .primary iframe'
	let videoPlayerSelector = 'main .content .primary .videoPlayer'

	if (!document.querySelector(mainSelector)) return
	if (!document.querySelector(videoPlayerSelector)) return

	let mainElement = document.querySelector(mainSelector)
	let mainElementStyle = getComputedStyle(mainElement)
	let mainElementWidth = clearPX(mainElementStyle.getPropertyValue('width'))
	let videoPlayerBlock = document.querySelector(videoPlayerSelector)

	new ResizeObserver(entries => {
		// We wrap it in requestAnimationFrame to avoid this error - ResizeObserver loop limit exceeded
		window.requestAnimationFrame(() => {
			if (!Array.isArray(entries) || !entries.length) {
				return
			}
			getParams()
			changeHeight()
		})
	}).observe(mainElement)

	function clearPX(element) {
		return +element.slice(0, element.length - 2)
	}

	function getParams() {
		mainElementStyle = getComputedStyle(mainElement)
		mainElementWidth = clearPX(mainElementStyle.getPropertyValue('width'))
	}

	function changeHeight() {
		let height = (mainElementWidth / 100) * 56

		mainElement.style.height = height + 'px'
		videoPlayerBlock.style.height = height + 'px'
	}
}

export default VideoPageHeight
