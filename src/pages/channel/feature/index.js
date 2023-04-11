import {Link} from "react-router-dom";

export default function Feature({item}) {
    return (
        <div className="feature">
            <Link to={`/video?id=${item.id}`}>
                <img src={item.snippet.thumbnails.high.url} alt="Feature image"/>
            </Link>
            <div className="information">
                <h3>{item.snippet.title}</h3>
                <span>{item.statistics.viewCount} views. {item.snippet.publishedAt} weeks ago</span>
                <pre>{item.snippet.description}</pre>
            </div>
        </div>
    )
}