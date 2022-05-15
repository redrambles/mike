import { NavLink } from "react-router-dom";
// using NavLink instead of Link gives us perks like  access to an 'isActive' property

function Navbar() {
	return (
		<nav className='navbar'>
			<NavLink to='/' className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")}>
				Home
			</NavLink>
			<NavLink to='/about' className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")}>
				About
			</NavLink>
			<NavLink to='/projects' className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")}>
				Projects
			</NavLink>
			<NavLink to='/clients' className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")}>
				Clients
			</NavLink>
		</nav>
	);
}

export default Navbar;
