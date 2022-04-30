import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllRoutes from "./RouterConfig";
import ContextProvider from "./../contexts/ContextProvider";
import Menu from "./../components/Menu/Menu";
const AppRouter = () => {
	return (
		<ContextProvider>
			<BrowserRouter>
				<Menu />
				<Routes>
					{AllRoutes.map((route) => {
						return <Route {...route} />;
					})}
				</Routes>
			</BrowserRouter>
		</ContextProvider>
	);
};

export default AppRouter;
