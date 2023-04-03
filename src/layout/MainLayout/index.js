import MainDrawer from "./Drawer";
import Header from "./Header";
import {Outlet} from "react-router-dom";

const MainLayout = () => {

    return (
        <div className='body full-guide'>
            <Header />
            <MainDrawer />
            <main>
                <Outlet/>
            </main>
        </div>
    )
}

export default MainLayout