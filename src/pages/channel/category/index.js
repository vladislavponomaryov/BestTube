import VideoContent from "../../../components/videoContent";

export default function Category({number}) {
    return (
        <div className="category">
            <div className="title"><h4>Category {number}</h4><span className="_icon-play"></span>PLAY ALL</div>
            <VideoContent videoCount={5}/>
        </div>
    )
}