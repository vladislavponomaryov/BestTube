import './style.component.sass'
import channelBackground from '../../assets/images/channel-page/channel-background.jpg'
import ChannelProfile from "../../components/page-channel/profile";
import Feature from "../../components/page-channel/feature";
import Category from "../../components/page-channel/category";

export default function Channel() {

    let categories = []
    for (let i = 1; i <= 4; i++) {
        categories.push(<Category number={i}/>)
    }

    return (
        <div className="content channel">
            <img src={channelBackground} alt="Channel background"/>
                <header className="profile-header">
                    <div className="wrapper">
                        <ChannelProfile/>
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
                    <Feature/>

                    {categories}
                </div>
        </div>
    )
}