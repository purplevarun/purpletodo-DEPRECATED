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
	return (
		<div style={appWrapper}>
			<BrowserRouter>
				<Menu />
				<Routes>
					{AllRoutes.map((route) => {
						return <Route {...route} />;
					})}
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default AppRouter;
