import React from "react";
import ContextProvider from "./../contexts/ContextProvider";
import AppRouter from "./AppRouter";
const ContextWrapper = () => {
	return (
		<ContextProvider>
			<AppRouter />
		</ContextProvider>
	);
};

export default ContextWrapper;
