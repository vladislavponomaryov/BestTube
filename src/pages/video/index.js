import './style.component.sass'
import userAvatar from '../../assets/images/userAvatars/9.png'
import Comments from "./comments";
import VideoContent from "../../components/videoContent";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";

export default function Video() {

    let list = useSelector(state => state.video.list)

    // Query params
    let location = useLocation()
    let search = location.search !== '' ? location.search : null
    let videoId = search.slice(search.indexOf('=') + 1) ? search.slice(search.indexOf('=') + 1) : 'qGJLTDxnMs8'

    // videoPageHeight
    useEffect(() => {
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
    },[])

    // Video description
    let [miniClass,changeClass] = useState('');
    function descriptionToggle() {
        changeClass(miniClass === '' ? 'mini' : '')
    }

    return (
        <div className="content video">
            <div className="primary">
                <div className="videoPlayer">
                    <iframe width="100%" height="360" src={`https://www.youtube.com/embed/${videoId}`}
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
                            <img src={userAvatar} alt="User avatar"/>
                            <div>
                                <h4>James Gouse</h4>
                                <span>1.2M subscribers</span>
                            </div>
                        </div>
                        <button>Subscribes</button>
                    </div>
                    <div className={`description ${miniClass}`} onClick={descriptionToggle}>
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
                <Comments/>
            </div>
            <VideoContent videoList={list} videoCount={15}/>
        </div>
    )
}