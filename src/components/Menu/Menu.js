import { isMobile } from "ismobilehook";
import React from "react";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";

const Menu = () => {
	if (isMobile()) return <MenuMobile />;
	else return <MenuDesktop />;
};

export default Menu;
