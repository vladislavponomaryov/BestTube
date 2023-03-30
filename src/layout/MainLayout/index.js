import MainDrawer from "./Drawer";
import Header from "./Header";
import {Outlet} from "react-router-dom";
import './style.sass'

const MainLayout = () => {

    return (
        <div class='body'>
            <Header />
            <MainDrawer />
            <main>
                <Outlet/>
            </main>
        </div>
    )
}

export default MainLayout