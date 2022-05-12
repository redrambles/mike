import { Outlet } from "react-router-dom";

const SharedClientLayout = () => {
	return (
		<main className="page-content">
			<Outlet />
		</main>
	);
};
export default SharedClientLayout;
