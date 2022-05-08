import { NavLink } from "react-router-dom";
// using NavLink instead of Link gives us perks like an 'active' class added to the current page link
// We also have access to an 'isActive' property

function Navbar() {
	return (
		<nav className='navbar'>
			<NavLink to='/' className={({ isActive }) => (isActive ? "active link" : "link")}>
				Home
			</NavLink>
			<NavLink to='/about' className={({ isActive }) => (isActive ? "active link" : "link")}>
				About
			</NavLink>
			<NavLink to='/projects' className={({ isActive }) => (isActive ? "active link" : "link")}>
				Projects
			</NavLink>
			<NavLink to='/clients' className={({ isActive }) => (isActive ? "active link" : "link")}>
				Clients
			</NavLink>
		</nav>
	);
}

export default Navbar;
