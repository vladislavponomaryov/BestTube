import {Link} from "react-router-dom";

export default function NavItem({item}) {

    let icon = item.icon ? '_icon-' + item.icon : false

    return (
        <li>
            <Link to={item.url}>
                {icon && <span className={icon}></span>}
                <span className='title'>{item.title}</span>
            </Link>
        </li>
    )
}