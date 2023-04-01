import logo from "../../../assets/images/logo.svg";
import {Link} from "react-router-dom";

export default function Logotype() {
    return (
        <div className="start">
            <button id="button-guide" className="icon">
                <span className="_icon-hamburger"></span>
            </button>
            <Link className="button-logo" to="/">
                <div className="logo">
                    <img src={logo} alt="Logotype Youtube"/>
                </div>
            </Link>
        </div>
    )
}