import { Outlet } from "react-router-dom";

const SharedProjectLayout = () => {
	return (
		<main className="page-content">
			<h2>Projects</h2>
			<Outlet />
		</main>
	);
};
export default SharedProjectLayout;
