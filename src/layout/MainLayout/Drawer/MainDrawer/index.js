import './style.component.sass'
import NavGroup from "./NavGroup";
import menuItems from "../../../../menu-items";
import Subscriptions from "../../../../components/sidebarSubscriptions";

export default function MainDrawer() {

    // Subscriptions block
    const navGroups = menuItems.children.map((item) => {

        if (item.id === 'group-3') return <Subscriptions key={item.id} item={item} />

        return <NavGroup key={item.id} item={item} />
    })

    return (
        <div className="full-guide">
            {navGroups}
        </div>
    )
}