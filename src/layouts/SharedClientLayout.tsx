import { Outlet } from "react-router-dom";

const SharedClientLayout = () => {
	return (
		<main className="page-content clients">
			<Outlet />
		</main>
	);
};
export default SharedClientLayout;
