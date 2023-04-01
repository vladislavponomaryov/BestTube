export default function Search() {

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

    return (
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
    )
}