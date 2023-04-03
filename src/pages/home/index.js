import './style.component.sass'
import CategorySlider from "./categorySlider";
import VideoContent from "../../components/videoContent";
export default function Home() {
    return (
        <div className="content home">
            <CategorySlider />
            <VideoContent videoCount={32}/>
        </div>
    )
}