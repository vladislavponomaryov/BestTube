import './style.component.sass'
import userAvatar from '../../assets/images/userAvatars/9.png'
import Comments from "./comments";
import VideoContent from "../../components/videoContent";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getVideo} from "../../store/slices/video";

export default function Video() {

    let videoData,videoStatistics
    let dispatch = useDispatch()
    let list = useSelector(state => state.video.list)

    // Query params
    let location = useLocation()
    let search = location.search !== '' ? location.search : null
    let videoId = search.slice(search.indexOf('=') + 1) ? search.slice(search.indexOf('=') + 1) : 'error'
    let videoItem = useSelector(state => state.video.item)

    useEffect(() => {
        if (!videoItem) {
            dispatch(getVideo(videoId))
        }

        return () => {
            getVideo(null)
        }
    },[])

    if (videoItem) {
        videoData = videoItem.snippet
        videoStatistics = videoItem.statistics
    }

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
        <>
            {videoItem &&
                <div className="content video">
                    <div className="primary">
                        <div className="videoPlayer">
                            <iframe width="100%" height="360" src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>
                        </div>
                        <div className="videoInfo">
                            <h1>{videoData.title && videoData.title}</h1>
                            <div>
                                <span>{videoStatistics.viewCount} views . {videoData.publishedAt}</span>
                                <div className="buttons">
                                    <button><span className="_icon-liked"></span>{videoStatistics.likeCount && videoStatistics.likeCount}</button>
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
                                        <h4>{videoData.channelTitle}</h4>
                                        <span>1.2M subscribers</span>
                                    </div>
                                </div>
                                <button>Subscribes</button>
                            </div>
                            <div className={`description ${miniClass}`} onClick={descriptionToggle}>
                                <pre>{videoData.description}</pre>
                                <button>Show more</button>
                            </div>
                        </div>
                        <Comments/>
                    </div>
                    <VideoContent videoList={list} videoCount={15}/>
                </div>
            }
        </>
    )
}