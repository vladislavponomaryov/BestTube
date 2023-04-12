import {Link} from "react-router-dom";

export default function Item({item, channels}) {

    const itemData = item.snippet
    const statistics = item.statistics
    let channel = channels.find(channel => channel.id === itemData.channelId)

    return (
        <section>
            <Link to={`/video?id=${item.id}`}>
                <div className="image">
                    <img src={itemData.thumbnails.high.url} alt="Preview image"/>
                    <div className="videoLength">23:45</div>
                </div>
            </Link>
            <div className="wrapper">
                <Link className="account" to={`/channel?id=${itemData.channelId}`}>
                    <img src={channel?.snippet.thumbnails.default.url} alt="Account image"/>
                </Link>
                <Link className="information" to={`/video?id=${item.id}`}>
                    <h4>{itemData.title}</h4>
                    <span className="account-name">{itemData.channelTitle}</span>
                    <span>{statistics.viewCount} Views</span>
                    <span>1 week ago</span>
                </Link>
            </div>
        </section>
    )
}