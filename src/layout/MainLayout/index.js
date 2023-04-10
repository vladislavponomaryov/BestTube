import Drawer from "./Drawer";
import Header from "./Header";
import {Outlet, useLocation} from "react-router-dom";
import styled from "styled-components";
import {useSelector} from "react-redux";
import useMediaQuery from "../../hooks/useMediaQuery";

const MainLayout = () => {

    // main drawer
    const mainDrawer = useSelector((state) => state.app.mainDrawer)
    const mainDrawerBreakpoint = useMediaQuery(`(min-width:1348px)`)
    let location = useLocation()
    location = location.pathname === '/video' ? true : false
    let videoStyles = 'background: #181818 !important;width: 90% !important;margin-left: 5% !important;margin-right: 5% !important;padding: 24px !important;'

    let App = styled.div`
    ${location && 'background: #181818'}`

    let Main = !mainDrawer && mainDrawerBreakpoint ? styled.main`
      margin-left: 72px !important;
      width: calc(100% - 72px) !important;
      ${location && videoStyles}
    ` : styled.main`
      ${location && videoStyles}
    `

    return (
        <App id={'app'}>
            <Header/>
            <Drawer/>
            <Main>
                <Outlet/>
            </Main>
        </App>
    )
}

export default MainLayout