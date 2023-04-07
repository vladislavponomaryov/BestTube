import Item from "./item";

export default function Subscriptions({item}) {

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