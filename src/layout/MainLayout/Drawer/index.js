import './style.component.sass'
import MiniDrawer from "./MiniDrawer/MiniDrawer";
import DrawerFooter from "./MainDrawer/DrawerFooter";
import MainDrawer from "./MainDrawer";
import useMediaQuery from "../../../hooks/useMediaQuery";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {isMainDrawer} from "../../../store/slices/app";
import styled from "styled-components";

const Drawer = () => {

    /* Sidebar */
    const dispatch = useDispatch()
    const state = useSelector(state => state.app)
    const openDrawer = state.openDrawer
    const mainDrawerBreakpoint = useMediaQuery(`(min-width:1348px)`)
    let mainDrawer = state.mainDrawer

    useEffect(() => {
        mainDrawer = mainDrawerBreakpoint === true && openDrawer !== null ? openDrawer : mainDrawerBreakpoint
        dispatch(isMainDrawer(mainDrawer))
    }, [mainDrawerBreakpoint, openDrawer])


    let componentSidebar = styled.div.attrs(() => ({className: 'sidebar',}))
    let MiniSidebar = componentSidebar`
      ${mainDrawerBreakpoint && 'width: 72px !important'}
    `

    let MainSidebar = componentSidebar``

    return (
        <>
            {mainDrawer &&
                <MainSidebar>
                    <nav>
                        <MainDrawer/>
                        <DrawerFooter/>
                    </nav>
                </MainSidebar>}

            {!mainDrawer &&
                <MiniSidebar>
                    <nav>
                        <MiniDrawer/>
                    </nav>
                </MiniSidebar>}
        </>
    )
}

export default Drawer