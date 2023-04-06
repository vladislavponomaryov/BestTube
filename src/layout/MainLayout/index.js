import MainDrawer from "./Drawer";
import Header from "./Header";
import {Outlet} from "react-router-dom";
import styled from "styled-components";
import {useSelector} from "react-redux";
import useMediaQuery from "../../hooks/useMediaQuery";

const MainLayout = () => {

    const mainDrawer = useSelector((state) => state.app.mainDrawer)
    const mainDrawerBreakpoint = useMediaQuery(`(min-width:1348px)`)

    let Main = !mainDrawer && mainDrawerBreakpoint ? styled.main`
      margin-left: 72px !important;
      width: calc(100% - 72px) !important;
    ` : styled.main``

    return (
        <div id={'app'}>
            <Header/>
            <MainDrawer/>
            <Main>
                <Outlet/>
            </Main>
        </div>
    )
}

export default MainLayout