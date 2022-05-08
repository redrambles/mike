import { Outlet } from "react-router-dom";

const SharedClientLayout = () => {
	return (
		<main className="page-content">
			<h2>Clients</h2>
			<Outlet />
		</main>
	);
};
export default SharedClientLayout;
