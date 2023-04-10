import Item from "./item";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {addInList, getChannel} from "../../store/slices/channel";

export default function Subscriptions({item}) {

    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const videoState = state.video
    const channelState = state.channel
    const id = 1

    useEffect(() => {
        console.log(44444)
        videoState.list.map(item => {
            // console.log(item.snippet.channelId)
            // if (channelState.list)
            // getChannel(item.snippet.channelId)
            //dispatch(getChannel(item.snippet.channelId))
            // dispatch(addInList(item.snippet.channelId))
        })
    },[videoState.list])

    console.log(channelState.list)

    const navItem = item.children?.map(item => {
        return <Item key={item.id} item={item}/>
    })

    return (
        <div>
            {item.title && <h5>{item.title}</h5>}
            <ul className="category">
                {navItem}
            </ul>
        </div>
    )
}