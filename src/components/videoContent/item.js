import videoImage from "../../assets/images/content/2.png";
import accountImage from "../../assets/images/userAvatars/2.png";
import {Link} from "react-router-dom";

export default function Item({item}) {

    const itemData = item.snippet
    const statistics = item.statistics

    return (
        <section>
            <Link to={`/video?id=${item.id}`}>
                <div className="image">
                    <img src={itemData.thumbnails.high.url} alt="Preview image"/>
                    <div className="videoLength">23:45</div>
                </div>
            </Link>
            <div className="wrapper">
                <Link className="account" to={`/channel/${itemData.channelId}`}>
                    <img src={accountImage} alt="Account image"/>
                </Link>
                <a className="information" href="/video-link">
                    <h4>{itemData.title}</h4>
                    <span className="account-name">{itemData.channelTitle}</span>
                    <span>{statistics.viewCount} Views</span>
                    <span>1 week ago</span>
                </a>
            </div>
        </section>
    )
}