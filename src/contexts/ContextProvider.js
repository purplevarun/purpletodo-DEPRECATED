import React, { createContext } from "react";
import Data from "./Data";
export const Context = createContext();
const ContextProvider = ({ children }) => {
	const data = Data();
	return <Context.Provider value={data}>{children}</Context.Provider>;
};

export default ContextProvider;
