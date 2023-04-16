import './style.component.sass'
import ChannelProfile from "./profile";
import Feature from "./feature";
import Sections from "./sections";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import {getChannel, getFeatureVideo} from "../../store/slices/channel";
import {useEffect} from "react";

export default function Channel() {

    let channelData, channelStatistics, featureId
    const dispatch = useDispatch()

    // Query params
    let location = useLocation()
    let search = location.search !== '' ? location.search : null
    let channelId = search.slice(search.indexOf('=') + 1) ? search.slice(search.indexOf('=') + 1) : null
    let channelItem = useSelector(state => state.channel.item)
    let featureData = useSelector(state => state.channel.featureVideo)

    useEffect(() => {
        dispatch(getChannel(channelId))

        return () => {
            dispatch(getChannel(null))
        }
    }, [])

    if (channelItem) {
        channelData = channelItem.snippet
        channelStatistics = channelItem.statistics
    }

    useEffect(() => {
        if (channelItem && featureData === null) {
            featureId = channelItem.brandingSettings.channel.unsubscribedTrailer
            if (featureId) dispatch(getFeatureVideo(featureId))
        }

        return () => {
            dispatch(getFeatureVideo(null))
        }
    }, [channelItem])

    return (
        <>
            {channelItem &&
                <div className="content channel">
                    <img
                        src={channelItem.brandingSettings.image.bannerExternalUrl + '=w2000-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj'}
                        alt="Channel background"/>
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
                        <Sections id={channelId}/>
                    </div>
                </div>
            }
        </>
    )
}