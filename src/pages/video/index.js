export default function Video() {
    return (
        <div className="content video">
            <div className="primary">
                <div className="videoPlayer">
                    <iframe width="100%" height="360" src="https://www.youtube.com/embed/qGJLTDxnMs8"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                </div>
                <div className="videoInfo">
                    <h1>Blind Woodturner: Turning passion into fine art</h1>
                    <div>
                        <span>576,969 views . Oct 8, 2021</span>
                        <div className="buttons">
                            <button><span className="_icon-liked"></span>1.7 K</button>
                            <button><span className="_icon-DisLiked"></span>0</button>
                            <button><span className="_icon-Share"></span>Share</button>
                            <button><span className="_icon-Save"></span>Save</button>
                            <button><span className="_icon-More"></span></button>
                        </div>
                    </div>
                </div>
                <div className="videoDesc">
                    <div className="top-level">
                        <div className="account-info">
                            <img src="assets/images/userAvatars/9.png" alt="User avatar"/>
                                <div>
                                    <h4>James Gouse</h4>
                                    <span>1.2M subscribers</span>
                                </div>
                        </div>
                        <button>Subscribes</button>
                    </div>
                    <div className="description mini">
                        <p>
                            Chris Fisher, also known as the Blind Woodturner, learned his craft by listening to hundreds
                            of
                            hours of YouTube videos and experimenting in his workshop. Now he’s a YouTube creator
                            himself,
                            sells his products worldwide, and does demonstrations all around the country.
                        </p>
                        <button>Show more</button>
                    </div>
                </div>
                <div className="comment">
                    <div className="info">
                        <span>286 Comments</span>
                        <button><span className="_icon-Dropdown"></span>SORT BY</button>
                    </div>
                    <div className="add">
                        <img src="assets/images/userAvatars/4.png" alt="My photo"/>
                            <label htmlFor="addComment"></label>
                            <input type="text" id="addComment" placeholder="Add a public comment..."/>
                    </div>
                    <ul className="list">
                        <li>
                            <img src="assets/images/userAvatars/2.png" alt="User photo"/>
                                <div>
                                    <div className="header">
                                        <span>James Gouse</span>
                                        <span>8 hours ago</span>
                                    </div>
                                    <p>Wow, world is full of different skills</p>
                                    <div className="buttons">
                                        <button><span className="_icon-Liked"></span>3</button>
                                        <button><span className="_icon-DisLiked"></span></button>
                                        <button>REPLY</button>
                                    </div>
                                </div>
                        </li>
                        <li>
                            <img src="assets/images/userAvatars/2.png" alt="User photo"/>
                                <div>
                                    <div className="header">
                                        <span>James Gouse</span>
                                        <span>8 hours ago</span>
                                    </div>
                                    <p>Wow, world is full of different skills</p>
                                    <div className="buttons">
                                        <button><span className="_icon-Liked"></span>3</button>
                                        <button><span className="_icon-DisLiked"></span></button>
                                        <button>REPLY</button>
                                    </div>
                                </div>
                        </li>
                        <li>
                            <img src="assets/images/userAvatars/2.png" alt="User photo"/>
                                <div>
                                    <div className="header">
                                        <span>James Gouse</span>
                                        <span>8 hours ago</span>
                                    </div>
                                    <p>Wow, world is full of different skills</p>
                                    <div className="buttons">
                                        <button><span className="_icon-Liked"></span>3</button>
                                        <button><span className="_icon-DisLiked"></span></button>
                                        <button>REPLY</button>
                                    </div>
                                </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="videoContent">
                <section>
                    <a href="/video-link">
                        <div className="image">
                            <img src="assets/images/content/2.png" alt="Preview image"/>
                                <div className="videoLength">23:45</div>
                        </div>
                    </a>
                    <div className="wrapper">
                        <a className="account" href="/account-link"><img src="assets/images/userAvatars/2.png"
                                                                         alt="Account image"/></a>
                        <a className="information" href="/video-link">
                            <h4>Lorem ipsum dolor sit amet, consecte adipiscing elit.</h4>
                            <span className="account-name">James Gouse</span>
                            <span>15K Views</span>
                            <span>1 week ago</span>
                        </a>
                    </div>
                </section>
                <section>
                    <a href="/video-link">
                        <div className="image">
                            <img src="assets/images/content/3.png" alt="Preview image"/>
                                <div className="videoLength">23:45</div>
                        </div>
                    </a>
                    <div className="wrapper">
                        <a className="account" href="/account-link"><img src="assets/images/userAvatars/3.png"
                                                                         alt="Account image"/></a>
                        <a className="information" href="/video-link">
                            <h4>Lorem ipsum dolor sit amet, consecte adipiscing elit.</h4>
                            <span className="account-name">James Gouse</span>
                            <span>15K Views</span>
                            <span>1 week ago</span>
                        </a>
                    </div>
                </section>
                <section>
                    <a href="/video-link">
                        <div className="image">
                            <img src="assets/images/content/4.png" alt="Preview image"/>
                                <div className="videoLength">23:45</div>
                        </div>
                    </a>
                    <div className="wrapper">
                        <a className="account" href="/account-link"><img src="assets/images/userAvatars/4.png"
                                                                         alt="Account image"/></a>
                        <a className="information" href="/video-link">
                            <h4>Lorem ipsum dolor sit amet, consecte adipiscing elit.</h4>
                            <span className="account-name">James Gouse</span>
                            <span>15K Views</span>
                            <span>1 week ago</span>
                        </a>
                    </div>
                </section>
                <section>
                    <a href="/video-link">
                        <div className="image">
                            <img src="assets/images/content/5.png" alt="Preview image"/>
                                <div className="videoLength">23:45</div>
                        </div>
                    </a>
                    <div className="wrapper">
                        <a className="account" href="/account-link"><img src="assets/images/userAvatars/5.png"
                                                                         alt="Account image"/></a>
                        <a className="information" href="/video-link">
                            <h4>Lorem ipsum dolor sit amet, consecte adipiscing elit.</h4>
                            <span className="account-name">James Gouse</span>
                            <span>15K Views</span>
                            <span>1 week ago</span>
                        </a>
                    </div>
                </section>
                <section>
                    <a href="/video-link">
                        <div className="image">
                            <img src="assets/images/content/6.png" alt="Preview image"/>
                                <div className="videoLength">23:45</div>
                        </div>
                    </a>
                    <div className="wrapper">
                        <a className="account" href="/account-link"><img src="assets/images/userAvatars/6.png"
                                                                         alt="Account image"/></a>
                        <a className="information" href="/video-link">
                            <h4>Lorem ipsum dolor sit amet, consecte adipiscing elit.</h4>
                            <span className="account-name">James Gouse</span>
                            <span>15K Views</span>
                            <span>1 week ago</span>
                        </a>
                    </div>
                </section>
                <section>
                    <a href="/video-link">
                        <div className="image">
                            <img src="assets/images/content/2.png" alt="Preview image"/>
                                <div className="videoLength">23:45</div>
                        </div>
                    </a>
                    <div className="wrapper">
                        <a className="account" href="/account-link"><img src="assets/images/userAvatars/2.png"
                                                                         alt="Account image"/></a>
                        <a className="information" href="/video-link">
                            <h4>Lorem ipsum dolor sit amet, consecte adipiscing elit.</h4>
                            <span className="account-name">James Gouse</span>
                            <span>15K Views</span>
                            <span>1 week ago</span>
                        </a>
                    </div>
                </section>
                <section>
                    <a href="/video-link">
                        <div className="image">
                            <img src="assets/images/content/3.png" alt="Preview image"/>
                                <div className="videoLength">23:45</div>
                        </div>
                    </a>
                    <div className="wrapper">
                        <a className="account" href="/account-link"><img src="assets/images/userAvatars/3.png"
                                                                         alt="Account image"/></a>
                        <a className="information" href="/video-link">
                            <h4>Lorem ipsum dolor sit amet, consecte adipiscing elit.</h4>
                            <span className="account-name">James Gouse</span>
                            <span>15K Views</span>
                            <span>1 week ago</span>
                        </a>
                    </div>
                </section>
                <section>
                    <a href="/video-link">
                        <div className="image">
                            <img src="assets/images/content/4.png" alt="Preview image"/>
                                <div className="videoLength">23:45</div>
                        </div>
                    </a>
                    <div className="wrapper">
                        <a className="account" href="/account-link"><img src="assets/images/userAvatars/4.png"
                                                                         alt="Account image"/></a>
                        <a className="information" href="/video-link">
                            <h4>Lorem ipsum dolor sit amet, consecte adipiscing elit.</h4>
                            <span className="account-name">James Gouse</span>
                            <span>15K Views</span>
                            <span>1 week ago</span>
                        </a>
                    </div>
                </section>
                <section>
                    <a href="/video-link">
                        <div className="image">
                            <img src="assets/images/content/5.png" alt="Preview image"/>
                                <div className="videoLength">23:45</div>
                        </div>
                    </a>
                    <div className="wrapper">
                        <a className="account" href="/account-link"><img src="assets/images/userAvatars/5.png"
                                                                         alt="Account image"/></a>
                        <a className="information" href="/video-link">
                            <h4>Lorem ipsum dolor sit amet, consecte adipiscing elit.</h4>
                            <span className="account-name">James Gouse</span>
                            <span>15K Views</span>
                            <span>1 week ago</span>
                        </a>
                    </div>
                </section>
                <section>
                    <a href="/video-link">
                        <div className="image">
                            <img src="assets/images/content/6.png" alt="Preview image"/>
                                <div className="videoLength">23:45</div>
                        </div>
                    </a>
                    <div className="wrapper">
                        <a className="account" href="/account-link"><img src="assets/images/userAvatars/6.png"
                                                                         alt="Account image"/></a>
                        <a className="information" href="/video-link">
                            <h4>Lorem ipsum dolor sit amet, consecte adipiscing elit.</h4>
                            <span className="account-name">James Gouse</span>
                            <span>15K Views</span>
                            <span>1 week ago</span>
                        </a>
                    </div>
                </section>
                <section>
                    <a href="/video-link">
                        <div className="image">
                            <img src="assets/images/content/2.png" alt="Preview image"/>
                                <div className="videoLength">23:45</div>
                        </div>
                    </a>
                    <div className="wrapper">
                        <a className="account" href="/account-link"><img src="assets/images/userAvatars/2.png"
                                                                         alt="Account image"/></a>
                        <a className="information" href="/video-link">
                            <h4>Lorem ipsum dolor sit amet, consecte adipiscing elit.</h4>
                            <span className="account-name">James Gouse</span>
                            <span>15K Views</span>
                            <span>1 week ago</span>
                        </a>
                    </div>
                </section>
                <section>
                    <a href="/video-link">
                        <div className="image">
                            <img src="assets/images/content/3.png" alt="Preview image"/>
                                <div className="videoLength">23:45</div>
                        </div>
                    </a>
                    <div className="wrapper">
                        <a className="account" href="/account-link"><img src="assets/images/userAvatars/3.png"
                                                                         alt="Account image"/></a>
                        <a className="information" href="/video-link">
                            <h4>Lorem ipsum dolor sit amet, consecte adipiscing elit.</h4>
                            <span className="account-name">James Gouse</span>
                            <span>15K Views</span>
                            <span>1 week ago</span>
                        </a>
                    </div>
                </section>
                <section>
                    <a href="/video-link">
                        <div className="image">
                            <img src="assets/images/content/4.png" alt="Preview image"/>
                                <div className="videoLength">23:45</div>
                        </div>
                    </a>
                    <div className="wrapper">
                        <a className="account" href="/account-link"><img src="assets/images/userAvatars/4.png"
                                                                         alt="Account image"/></a>
                        <a className="information" href="/video-link">
                            <h4>Lorem ipsum dolor sit amet, consecte adipiscing elit.</h4>
                            <span className="account-name">James Gouse</span>
                            <span>15K Views</span>
                            <span>1 week ago</span>
                        </a>
                    </div>
                </section>
                <section>
                    <a href="/video-link">
                        <div className="image">
                            <img src="assets/images/content/5.png" alt="Preview image"/>
                                <div className="videoLength">23:45</div>
                        </div>
                    </a>
                    <div className="wrapper">
                        <a className="account" href="/account-link"><img src="assets/images/userAvatars/5.png"
                                                                         alt="Account image"/></a>
                        <a className="information" href="/video-link">
                            <h4>Lorem ipsum dolor sit amet, consecte adipiscing elit.</h4>
                            <span className="account-name">James Gouse</span>
                            <span>15K Views</span>
                            <span>1 week ago</span>
                        </a>
                    </div>
                </section>
                <section>
                    <a href="/video-link">
                        <div className="image">
                            <img src="assets/images/content/6.png" alt="Preview image"/>
                                <div className="videoLength">23:45</div>
                        </div>
                    </a>
                    <div className="wrapper">
                        <a className="account" href="/account-link"><img src="assets/images/userAvatars/6.png"
                                                                         alt="Account image"/></a>
                        <a className="information" href="/video-link">
                            <h4>Lorem ipsum dolor sit amet, consecte adipiscing elit.</h4>
                            <span className="account-name">James Gouse</span>
                            <span>15K Views</span>
                            <span>1 week ago</span>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    )
}