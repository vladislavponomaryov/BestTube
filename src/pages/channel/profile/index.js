export default function ChannelProfile({channelData,channelStatistics}) {

    return (
        <div className="title">
            <div className="profile">
                <img src={channelData.thumbnails.default.url} alt="Channel avatar"/>
                <div className="information">
                    <h1>{channelData.title}</h1>
                    <div>
                        <span>{channelData.customUrl && channelData.customUrl}</span>
                        <span>{channelStatistics.subscriberCount && channelStatistics.subscriberCount + 'subscribers'}</span>
                        <span>{channelStatistics.videoCount && channelStatistics.videoCount + 'video'}</span>
                    </div>
                    <pre>{channelData.description}</pre>
                </div>
            </div>
            <button>Subscribes</button>
        </div>
    )
}