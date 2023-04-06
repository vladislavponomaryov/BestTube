import logo from "../../../assets/images/logo.svg";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {isOpenDrawer} from "../../../store/slices/app";

export default function Logotype() {

    const dispatch = useDispatch()
    const state = useSelector(state => state.app)
    let openDrawer = state.openDrawer

    function drawerEvent() {
        if (openDrawer === null) openDrawer = true
        dispatch(isOpenDrawer(!openDrawer))
    }

    return (
        <div className="start">
            <button id="button-guide" className="icon" onClick={() => drawerEvent()}>
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