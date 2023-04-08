import MainLayout from "../layout/MainLayout";
import {lazy} from "react";
import Loadable from "../components/common/Loadable";

const HomeDefault = Loadable(lazy(() => import('../pages/home')))
const Channel = Loadable(lazy(() => import('../pages/channel')))
const Video = Loadable(lazy(() => import('../pages/video')))
const Test = Loadable(lazy(() => import('../pages/test')))

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <HomeDefault />
        },
        {
            path: '/home',
            element: <HomeDefault />
        },
        {
            path: 'channel',
            element: <Channel />
        },
        {
            path: 'video',
            element: <Video />
        },
        {
            path: 'test',
            element: <Test />
        }
    ]
}

export default MainRoutes