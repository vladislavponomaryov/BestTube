const Header = () => {
    return (
        <header>
            <div className="start">
                <button id="button-guide" className="icon">
                    <span className="_icon-hamburger"></span>
                </button>
                <a className="button-logo" href="https://www.youtube.com/">
                    <div className="logo">
                        <img src="./assets/images/logo.svg" alt="Logotype Youtube" />
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
                        <input className="search-field" placeholder="Search" id="search-field" />
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
                    <img src="./assets/images/userAvatars/10.png" alt="User avatar" />
                </button>
            </nav>
        </header>
    )
}

export default Header