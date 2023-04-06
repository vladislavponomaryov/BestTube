import './style.component.sass'
import MiniDrawer from "./MiniDrawer/MiniDrawer";
import DrawerFooter from "./MainDrawer/DrawerFooter";
import MainDrawer from "./MainDrawer";
import useMediaQuery from "../../../hooks/useMediaQuery";
import {useSelector} from "react-redux";

const Drawer = () => {

    /* Sidebar */
    const state = useSelector(state => state.app)
    const openDrawer = state.openDrawer
    const mainDrawerBreakpoint = useMediaQuery(`(min-width:1348px)`)
    let mainDrawer = mainDrawerBreakpoint

    if (openDrawer !== null && mainDrawerBreakpoint === true) mainDrawer = openDrawer

    return (
        <div className="sidebar">
            {mainDrawer ?
                <nav>
                    <MainDrawer/>
                    <DrawerFooter/>
                </nav>
                : <nav>
                    <MiniDrawer/>
                </nav>
            }
        </div>
    )
}

export default Drawer