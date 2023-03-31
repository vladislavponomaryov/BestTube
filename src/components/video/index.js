import videoImage from "../../assets/images/content/2.png";
import accountImage from "../../assets/images/userAvatars/2.png";

export default function Video() {

    // videoOpenDescription
    /*(function () {

        let selector = '.video main .content.video .primary .videoDesc .description'

        if (!document.querySelector(selector)) return

        let mainElement = document.querySelector(selector)

        mainElement.addEventListener('click',() => {
            mainElement.classList.toggle('mini')
        })
    })()*/

    return (
        <section>
            <a href="/video-link">
                <div className="image">
                    <img src={videoImage} alt="Preview image"/>
                    <div className="videoLength">23:45</div>
                </div>
            </a>
            <div className="wrapper">
                <a className="account" href="/account-link">
                    <img src={accountImage} alt="Account image"/>
                </a>
                <a className="information" href="/video-link">
                    <h4>Lorem ipsum dolor sit amet, consecte adipiscing elit.</h4>
                    <span className="account-name">James Gouse</span>
                    <span>15K Views</span>
                    <span>1 week ago</span>
                </a>
            </div>
        </section>
    )
}