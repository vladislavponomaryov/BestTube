import './style.component.sass'
import CategorySlider from "../../components/page-home/categorySlider";
import VideoContent from "../../components/videoContent";
export default function Home() {
    return (
        <div className="content home">
            <CategorySlider />
            <VideoContent videoCount={32}/>
        </div>
    )
}