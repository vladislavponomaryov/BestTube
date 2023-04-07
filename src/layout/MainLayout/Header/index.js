import './style.component.sass'
import Logotype from "../../../components/header/logo";
import Search from "../../../components/header/search";
import HeaderNavigation from "../../../components/header/headerNavigation";
import {useEffect} from "react";
import {useLocation} from "react-router-dom";
export default function Header() {

    const location = useLocation();

    // hidden header
    useEffect(() => {
        /* Когда пользователь прокручивает вниз, скрыть навигационную панель. Когда пользователь прокручивает вверх, показать навигационную панель */
        let prevScrollpos = window.pageYOffset;


        if (document.querySelector("#app > header") && location.pathname.slice(1) !== 'video') {
            let mainElement = document.querySelector("#app > header")

            window.onscroll = function () {

                if (window.innerWidth < 792) {

                    let currentScrollPos = window.pageYOffset;
                    if (prevScrollpos > currentScrollPos) {
                        mainElement.style.top = "0";
                    } else {
                        mainElement.style.top = "-56px";
                    }
                    prevScrollpos = currentScrollPos;

                }
            }
        }
    }, [])

    return (
        <header>
            <Logotype/>
            <Search/>
            <HeaderNavigation/>
        </header>
    )
}