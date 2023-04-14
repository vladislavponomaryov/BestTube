import {Link} from "react-router-dom";

export default function Item({item}) {

    return (
        <li>
            <Link to={`/channel?id=${item.id && item.id}`}>
                <img src={item.snippet.thumbnails.default.url} alt="User avatar"/>
                <span className='title'>{item.snippet.title}</span>
            </Link>
        </li>
    )
}