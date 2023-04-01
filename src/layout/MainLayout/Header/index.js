import Logotype from "../../../components/header/logo";
import Search from "../../../components/header/search";
import HeaderNavigation from "../../../components/header/headerNavigation";
export default function Header() {

    // hidden header
    /*(function () {

        /!* Когда пользователь прокручивает вниз, скрыть навигационную панель. Когда пользователь прокручивает вверх, показать навигационную панель *!/
        let prevScrollpos = window.pageYOffset;

        window.onscroll = function () {

            if (window.innerWidth < 792 && document.body.classList[0] !== 'video') {

                let currentScrollPos = window.pageYOffset;
                if (prevScrollpos > currentScrollPos) {
                    document.querySelector("body > header").style.top = "0";
                } else {
                    document.querySelector("body > header").style.top = "-56px";
                }
                prevScrollpos = currentScrollPos;

            }
        }

    })()*/

    return (
        <header>
            <Logotype/>
            <Search/>
            <HeaderNavigation/>
        </header>
    )
}