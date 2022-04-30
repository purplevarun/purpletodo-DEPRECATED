import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllRoutes from "./RouterConfig";
import Menu from "./../components/Menu/Menu";
import Context from "../contexts/Context";
const AppRouter = () => {
	const { colors } = useContext(Context);
	const appWrapper = {
		background: colors.bg,
		color: colors.fg,
		minHeight: "100vh",
	};
	const routeWrapper = {
		paddingLeft: "40px",
		paddingTop: "10vh",
	};
	return (
		<div style={appWrapper}>
			<BrowserRouter>
				<Menu />
				<div style={routeWrapper}>
					<Routes>
						{AllRoutes.map((route) => {
							return <Route {...route} />;
						})}
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default AppRouter;
