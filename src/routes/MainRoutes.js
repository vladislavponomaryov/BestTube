import MainLayout from "../layout/MainLayout";
import {lazy} from "react";

const HomeDefault = lazy(() => import('../pages/home'))
const Channel = lazy(() => import('../pages/channel'))
const Video = lazy(() => import('../pages/video'))

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <HomeDefault />
        },
        {
            path: 'channel',
            element: <Channel />
        },
        {
            path: 'video',
            element: <Video />
        }
    ]
}

export default MainRoutes