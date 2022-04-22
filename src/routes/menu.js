import {Link, Outlet} from "react-router-dom";

const Menu = () => {
    return (
        <div
            style={{
                margin:"0 auto",
                display:"flex",
                flexDirection:"column",
            }}
            className="menuContainer">
            <nav
                style={{
                    margin:"0 auto",
                    display:"flex",
                    flexDirection:"column",
                    padding:"10px"
                }}
                className="menu">
                <Link to="/aboutAplication">About aplication</Link>
                <Link to="/settings">Settings</Link>
                {/*<Link to="/"></Link>*/}
            </nav>
            <Outlet />
        </div>
    )
}

export default Menu;