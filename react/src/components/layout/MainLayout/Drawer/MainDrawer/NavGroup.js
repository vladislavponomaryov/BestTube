import NavItem from "react/src/components/layout/MainLayout/Drawer/MainDrawer/NavItem";

const NavGroup = ({item}) => {

    const navItem = item.children?.map(item => {
        return <NavItem key={item.id} item={item}/>
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

export default NavGroup