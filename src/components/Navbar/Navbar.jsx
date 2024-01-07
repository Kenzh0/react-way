import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
function Navbar() {
	return (
		<nav className={s.nav}>
			<div className={s.item} >
				<NavLink to="/profile" activeClassName={s.active} className={({ isActive }) => (isActive ? s.active : ' ')}>Profile</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="/dialogs" activeClassName={s.active} className={({ isActive }) => (isActive ? s.active : '')}>Messages</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="/users" activeClassName={s.active} className={({ isActive }) => (isActive ? s.active : '')}>Users</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="/news" activeClassName={s.active} className={({ isActive }) => (isActive ? s.active : '')}>News</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="/music" activeClassName={s.active} className={({ isActive }) => (isActive ? s.active : '')}>Music</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="/settings" activeClassName={s.active} className={({ isActive }) => (isActive ? s.active : '')}>Settings</NavLink>
			</div>
		</nav>
	);
}

export default Navbar;