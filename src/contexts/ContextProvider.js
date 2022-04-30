import React from "react";
import Data from "./Data";
import Context from "./Context";
const ContextProvider = ({ children }) => {
	const data = Data();
	return <Context.Provider value={data}>{children}</Context.Provider>;
};

export default ContextProvider;
