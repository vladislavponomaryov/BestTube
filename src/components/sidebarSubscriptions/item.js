import {Link} from "react-router-dom";

export default function Item({item}) {

    return (
        <li>
            <Link to={item.url}>
                {item.img && <img src={item.img} alt="User avatar"/>}
                <span className='title'>{item.title}</span>
            </Link>
        </li>
    )
}