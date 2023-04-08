import VideoContent from "../../../components/videoContent";
import {useSelector} from "react-redux";

export default function Category({number}) {

    let list = useSelector(state => state.video.list)

    return (
        <div className="category">
            <div className="title"><h4>Category {number}</h4><span className="_icon-play"></span>PLAY ALL</div>
            <VideoContent videoList={list} videoCount={5}/>
        </div>
    )
}