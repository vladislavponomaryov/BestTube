import logo from '../../../assets/images/logo.svg'
export default function Header() {

    // hidden header
    /*(function () {

        /!* Когда пользователь прокручивает вниз, скрыть навигационную панель. Когда пользователь прокручивает вверх, показать навигационную панель *!/
        let prevScrollpos = window.pageYOffset;

        window.onscroll = function () {

            if (window.innerWidth < 792 && document.body.classList[0] !== 'video') {

                let currentScrollPos = window.pageYOffset;
                if (prevScrollpos > currentScrollPos) {
                    document.querySelector("body > header").style.top = "0";
                } else {
                    document.querySelector("body > header").style.top = "-56px";
                }
                prevScrollpos = currentScrollPos;

            }
        }

    })()*/

    // mobile search
    /*(function () {
        document.querySelector('#button-mobile-search').addEventListener('click', () => {
            let searchBox = document.querySelector('body header .center')

            searchBox.classList.toggle('visible')
        })

        document.querySelector('#button-back').addEventListener('click', () => {
            let searchBox = document.querySelector('body header .center')

            searchBox.classList.toggle('visible')
        })
    })()*/

    // videoPageHeight
    /*(function () {
            let mainSelector = '.video main .content .primary iframe'
            let videoPlayerSelector = '.video main .content .primary .videoPlayer'

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
                        return;
                    }
                    getParams()
                    changeHeight()
                });
            }).observe(mainElement);

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

        })()*/

    return (
        <header>
            <div className="start">
                <button id="button-guide" className="icon">
                    <span className="_icon-hamburger"></span>
                </button>
                <a className="button-logo" href="https://www.youtube.com/">
                    <div className="logo">
                        <img src={logo} alt="Logotype Youtube"/>
                    </div>
                </a>
            </div>
            <div className="center">
                <div className="search">
                    <button id="button-back" className="icon">
                        <span className="_icon-leftBottom"></span>
                    </button>
                    <div className="search-bar">
                        <label htmlFor="search-field"></label>
                        <input className="search-field" placeholder="Search" id="search-field"/>
                        <button className="search-button icon">
                            <span className="_icon-search"></span>
                        </button>
                    </div>
                    <button className="button-search-micro icon">
                        <span className="_icon-mic"></span>
                    </button>
                </div>
            </div>
            <nav className="end">
                <button id="button-mobile-search" className="icon">
                    <span className="_icon-search"></span>
                </button>
                <button className="button-create icon">
                    <span className="_icon-create"></span>
                </button>
                <button className="button-apps icon">
                    <span className="_icon-apps"></span>
                </button>
                <button className="button-notifications icon">
                    <span className="_icon-notifications"></span>
                </button>
                <button className="button-user">
                    <img src="./assets/images/userAvatars/10.png" alt="User avatar"/>
                </button>
            </nav>
        </header>
    )
}