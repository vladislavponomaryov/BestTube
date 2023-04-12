import './style.component.sass'
import ChannelProfile from "./profile";
import Feature from "./feature";
import Category from "./category";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import {getFeatureVideo} from "../../store/slices/channel";
import {useEffect} from "react";

export default function Channel() {

    const dispatch = useDispatch()
    let list = useSelector(state => state.channel.list)
    let featureData = useSelector(state => state.channel.featureVideo)

    // Query params
    let location = useLocation()
    let search = location.search !== '' ? location.search : null
    let channelId = search.slice(search.indexOf('=') + 1) ? search.slice(search.indexOf('=') + 1) : 'error'
    let channelItem = list.find(item => item.snippet.customUrl === channelId || item.id === channelId)
    let channelData = channelItem.snippet
    let channelStatistics = channelItem.statistics

    let categories = []
    for (let i = 1; i <= 4; i++) {
        categories.push(<Category number={i} key={i}/>)
    }

    useEffect(() => {
        const featureId = channelItem.brandingSettings.channel.unsubscribedTrailer
        if (featureId) dispatch(getFeatureVideo(featureId))

        return () => {
            dispatch(getFeatureVideo(null))
        }
    },[])

    return (
        <div className="content channel">
            <img src={channelItem.brandingSettings.image.bannerExternalUrl+'=w2000-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj'} alt="Channel background"/>
                <header className="profile-header">
                    <div className="wrapper">
                        <ChannelProfile channelData={channelData} channelStatistics={channelStatistics}/>
                        <ul className="toolbar">
                            <li className="active">Home</li>
                            <li>Videos</li>
                            <li>Playlists</li>
                            <li>Community</li>
                            <li>Channels</li>
                            <li>About</li>
                        </ul>
                    </div>
                </header>
                <div className="list">
                    {featureData && <Feature item={featureData}/>}
                    {categories}
                </div>
        </div>
    )
}