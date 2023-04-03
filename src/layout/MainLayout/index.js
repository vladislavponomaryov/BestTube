import MainDrawer from "./Drawer";
import Header from "./Header";
import {Outlet} from "react-router-dom";

const MainLayout = () => {

    return (
        <div id={'app'} className='full-guide'>
            <Header />
            <MainDrawer />
            <main>
                <Outlet/>
            </main>
        </div>
    )
}

export default MainLayout