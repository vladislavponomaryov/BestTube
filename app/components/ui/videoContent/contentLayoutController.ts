const ContentLayoutController = (page: any, element: any) => {
	if (!element) return

	let mainContainer = element
	let mainContainerStyle = getComputedStyle(mainContainer)
	let mainContainerWidth = clearPX(mainContainerStyle.getPropertyValue('width'))
	let currentCW: number, largeCW: number, desktopCW: number, mediumCW: number, smallCW: number, extraSmallCW: number

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

	function clearPX(element: any) {
		return +element.slice(0, element.length - 2)
	}

	function getParams() {
		mainContainerStyle = getComputedStyle(mainContainer)
		mainContainerWidth = clearPX(mainContainerStyle.getPropertyValue('width'))
	}

	function addStyles(styles: any) {
		let id = 'mainContentStyles'

		if (document.getElementById(id)) {
			let stylesElement = document.getElementById(id)
			stylesElement!.innerHTML = styles
		} else {
			let stylesElement = document.createElement('style')
			stylesElement.id = id
			document.head.append(stylesElement)

			stylesElement.innerHTML = styles
		}
	}

	function checkCurrentPosition(gettingCW: number, quantityElements: number) {
		if (currentCW !== gettingCW) {
			currentCW = gettingCW
			let additional = ''

			if (page === 'home') {
				if (currentCW === largeCW || currentCW === mediumCW) {
					additional = '.videoContent section:last-child, .videoContent section:nth-child(31) {display: none}'
				}
			}

			if (page === 'channel') {
				if (currentCW === desktopCW) {
					additional = '.videoContent section:last-child {display: none}'
				}

				if (currentCW === mediumCW) {
					additional = '.videoContent section:last-child, .videoContent section:nth-child(4) {display: none}'
				}

				if (currentCW === smallCW) {
					additional = '.videoContent section:nth-child(3), .videoContent section:nth-child(4), .videoContent section:last-child {display: none}'
				}

				if (currentCW === extraSmallCW) {
					additional =
						'.videoContent {flex-direction: column} .videoContent section:nth-child(4), .videoContent section:last-child {display: none !important}'
				}
			}

			addStyles(`
            .videoContent section {flex: 1 0 calc(${100 / quantityElements}% - 16px - 0.01px)}${additional}`)
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
}

export default ContentLayoutController
