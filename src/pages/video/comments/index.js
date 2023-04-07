import userImage from '../../../assets/images/userAvatars/4.png'
import Comment from "./comment";
export default function Comments() {

    let comments = []
    for (let i = 0; i < 3; i++) {
        comments.push(<Comment key={i}/>)
    }

    return (
        <div className="comment">
            <div className="info">
                <span>286 Comments</span>
                <button><span className="_icon-Dropdown"></span>SORT BY</button>
            </div>
            <div className="add">
                <img src={userImage} alt="My photo"/>
                <label htmlFor="addComment"></label>
                <input type="text" id="addComment" placeholder="Add a public comment..."/>
            </div>
            <ul className="list">
                {comments}
            </ul>
        </div>
    )
}