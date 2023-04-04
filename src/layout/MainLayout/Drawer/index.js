import './style.component.sass'
import MiniDrawer from "./MiniDrawer/MiniDrawer";
import DrawerFooter from "./MainDrawer/DrawerFooter";
import MainDrawer from "./MainDrawer";
import React from "react";
import useMediaQuery from "../../../hooks/useMediaQuery";

const Drawer = () => {

    /* Sidebar */
    const matches = useMediaQuery(`(max-width:1348px)`)

    //const [disableResizeEvent,changeDisableResizeEvent] = useState(false)

    function sidebarControll() {
        /* Sidebar */
        let miniNavigationMediaWidth = 1348
        let needDisableResizeEvent = false

        /* Check in sidebar need full or mini navigation */
        navigationMediaController(miniNavigationMediaWidth)
        window.addEventListener('resize',() => navigationMediaController(miniNavigationMediaWidth))
        document.querySelector('#button-guide').addEventListener('click',() => {
            needDisableResizeEvent = true

            if (document.body.classList.contains('full-guide')) {
                visibleMiniGuide()
            } else {
                visibleFullGuide()
            }
        })

        function navigationMediaController(miniNavigationMediaWidth) {

            if (needDisableResizeEvent && window.innerWidth >= miniNavigationMediaWidth) return

            if (window.innerWidth <= miniNavigationMediaWidth) {
                visibleMiniGuide()
            } else {
                visibleFullGuide()
            }
        }
        function visibleMiniGuide() {
            document.body.classList.add('mini-guide')
            document.body.classList.remove('full-guide')
        }
        function visibleFullGuide() {
            document.body.classList.add('full-guide')
            document.body.classList.remove('mini-guide')
        }

    }

    return (
        <div className="sidebar">
            {!matches ?
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