const Drawer = () => {
    return (
        <div className="sidebar">
            <nav>
                <div className="full-guide">
                    <ul className="category">
                        <li className="active">
                            <a href="">
                                <span className="_icon-home-fill"></span>
                                <span className="title">Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span className="_icon-explore"></span>
                                <span className="title">Explore</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span className="_icon-subscriptions"></span>
                                <span className="title">Subscriptions</span>
                            </a>
                        </li>
                    </ul>
                    <ul className="category">
                        <li>
                            <a href="">
                                <span className="_icon-library"></span>
                                <span className="title">Library</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span className="_icon-history"></span>
                                <span className="title">History</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span className="_icon-yourVideos"></span>
                                <span className="title">Your Videos</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span className="_icon-watchLater"></span>
                                <span className="title">Watch Later</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span className="_icon-Liked"></span>
                                <span className="title">Liked Videos</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span className="_icon-arrowBottom"></span>
                                <span className="title">Show More</span>
                            </a>
                        </li>
                    </ul>
                    <h5>Subscriptions</h5>
                    <ul className="category">
                        <li>
                            <a>
                                <img src="./assets/images/userAvatars/9.png" alt="User avatar" />
                                <span className="title">James Gouse</span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src="./assets/images/userAvatars/8.png" alt="User avatar" />
                                <span className="title">Alan Cooper</span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src="./assets/images/userAvatars/7.png" alt="User avatar" />
                                <span className="title">Marcus Levin</span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src="./assets/images/userAvatars/6.png" alt="User avatar" />
                                <span className="title">Alexis Sears</span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src="./assets/images/userAvatars/4.png" alt="User avatar" />
                                <span className="title">Jesica Lambert</span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src="./assets/images/userAvatars/3.png" alt="User avatar" />
                                <span className="title">Anna White</span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src="./assets/images/userAvatars/2.png" alt="User avatar" />
                                <span className="title">Skylar Dias</span>
                            </a>
                        </li>
                        <li className="hidden">
                            <a>
                                <img src="./assets/images/userAvatars/5.png" alt="User avatar" />
                                <span className="title">Dilan Brock</span>
                            </a>
                        </li>
                        <li className="hidden">
                            <a>
                                <img src="./assets/images/userAvatars/1.png" alt="User avatar" />
                                <span className="title">Katrin Trine</span>
                            </a>
                        </li>
                        <li className="more">
                            <a>
                                <span className="_icon-arrowBottom"></span>
                                <span className="title">Show 13 more</span>
                            </a>
                        </li>
                    </ul>
                    <h5>More from youtube</h5>
                    <ul className="category">
                        <li>
                            <a href="">
                                <span className="_icon-premium"></span>
                                <span className="title">Youtube Premium</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span className="_icon-gaming"></span>
                                <span className="title">Gaming</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span className="_icon-live"></span>
                                <span className="title">Live</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span className="_icon-sports"></span>
                                <span className="title">Sports</span>
                            </a>
                        </li>
                    </ul>
                    <ul className="category">
                        <li>
                            <a href="">
                                <span className="_icon-settings"></span>
                                <span className="title">Settings</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span className="_icon-report"></span>
                                <span className="title">Report History</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span className="_icon-help"></span>
                                <span className="title">Help</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span className="_icon-feedback"></span>
                                <span className="title">Send feedback</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="mini-guide">
                    <ul>
                        <li>
                            <a href="">
                                <span className="_icon-home-fill"></span>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span className="_icon-explore"></span>
                                Explore
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span className="_icon-subscriptions"></span>
                                Subscriptions
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span className="_icon-library"></span>
                                Library
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <footer>
                <ul>
                    <li>
                        <a href="/about">About</a>
                        <a href="/press">Press</a>
                        <a href="/copyright">Copyright</a>
                        <a href="/contactUs">Contact us</a>
                        <a href="/creators">Creators</a>
                        <a href="/advertise">Advertise</a>
                        <a href="/developers">Developers</a>
                    </li>
                    <li>
                        <a href="/terms">Terms</a>
                        <a href="/privacy">Privacy</a>
                        <a href="/policySafety">Policy & Safety</a>
                        <a href="/HowYouTubeWorks">How YouTube works</a>
                        <a href="/testNewFeatures">Test new features</a>
                    </li>
                </ul>
            </footer>
        </div>
    )
}

export default Drawer