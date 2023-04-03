import avatar from '../../../assets/images/userAvatars/9.png'
export default function ChannelProfile() {
    return (
        <div className="title">
            <div className="profile">
                <img src={avatar} alt="Channel avatar"/>
                <div className="information">
                    <h1>James Gouse</h1>
                    <span>Channel info 1.2M subscribers</span>
                    <span>About channel</span>
                </div>
            </div>
            <button>Subscribes</button>
        </div>
    )
}