import './style.component.sass'
import CategorySlider from "./categorySlider";
import VideoContent from "../../components/videoContent";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getPopularVideo} from "../../store/slices/video";
export default function Home() {

    const dispatch = useDispatch()
    let list = useSelector(state => state.video.list)

    useEffect(() => {},[])

    /*useEffect(() => {
        dispatch(getPopularVideo(32))
    },[])
    */

    return (
        <div className="content home">
            <CategorySlider />
            <VideoContent videoList={list} videoCount={4}/>
        </div>
    )
}