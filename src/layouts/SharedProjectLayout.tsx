import { Outlet } from "react-router-dom";

const SharedProjectLayout = () => {
	return (
		<main className="page-content">
			<Outlet />
		</main>
	);
};
export default SharedProjectLayout;
