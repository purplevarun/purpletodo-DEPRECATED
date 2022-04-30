import React from "react";
import Context from "./Context";
const ContextProvider = ({ children }) => {
	const data = { name: "Varun" };
	return <Context.Provider value={data}>{children}</Context.Provider>;
};

export default ContextProvider;
