import { MenuItem } from "@mui/material";
import { t } from "i18next";
import { NavLink } from "react-router-dom";

type NavItemProps = {
    link :string,
    title:string,
    color?:string
}

function NavItem({link, title,color}:NavItemProps) {
    return (<MenuItem >
        <NavLink to={link} style={{
            textDecoration: "none",
            color:`${color}`,
        }}>
            {title}
        </NavLink>
    </MenuItem>)
}

export default NavItem;
