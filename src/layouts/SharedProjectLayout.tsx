import { Outlet } from "react-router-dom";

const SharedProjectLayout = () => {
	return (
		<main className="page-content projects">
			<Outlet />
		</main>
	);
};
export default SharedProjectLayout;
