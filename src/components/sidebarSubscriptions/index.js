import Item from "./item";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getChannel} from "../../store/slices/channel";

export default function Subscriptions({item}) {

    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const videoState = state.video
    const channelState = state.channel

    useEffect(() => {
        videoState.list.map((item,index) => {
            dispatch(getChannel(item.snippet.channelId))
        })
    },[videoState.list])

    //console.log(channelState.list)

    const channelBar = channelState.list?.map((item,index) => {
        return <Item key={index} item={item}/>
    })

    return (
        <div>
            {item.title && <h5>{item.title}</h5>}
            <ul className="category">
                {channelBar}
            </ul>
        </div>
    )
}