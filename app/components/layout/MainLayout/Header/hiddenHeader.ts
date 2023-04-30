import { useRouter } from 'next/router'

const HiddenHeader = () => {
	const { pathname } = useRouter()

	if (typeof window !== 'undefined') {
		let prevScrollpos = window.pageYOffset

		if (document.querySelector('#app > header') && pathname !== '/video') {
			let mainElement = document.querySelector('#app > header')

			window.onscroll = function () {
				if (window.innerWidth < 792) {
					let currentScrollPos = window.pageYOffset
					if (prevScrollpos > currentScrollPos) {
						mainElement.style.top = '0'
					} else {
						mainElement.style.top = '-56px'
					}
					prevScrollpos = currentScrollPos
				}
			}
		}
	}
}

export default HiddenHeader
