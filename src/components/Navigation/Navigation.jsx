import { NavLink } from "react-router-dom"
import css from '../Navigation/Navigation.module.css'
import clsx from "clsx";
import { GiFilmSpool } from "react-icons/gi";
import { IoSearchOutline } from "react-icons/io5";

const NavLinkStyle = ({ isActive }) => {
    return clsx(css.link, isActive && css.active)
}

export default function Navigation() {
    return (
        <nav className={css.nav}>
            <div className={css.navLinks}>
            <GiFilmSpool className={css.navIcon} />
            <NavLink className={NavLinkStyle} to="/">Головна</NavLink>
            <NavLink className={NavLinkStyle} to="/novelty">Новинки 
                </NavLink>
            </div>
            <NavLink to="/movies">
                <IoSearchOutline className={css.navIconSearch} /> 
                </NavLink>
            
        </nav>
    ); 
}
