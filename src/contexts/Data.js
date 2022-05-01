import { useState } from "react";
import Colors from "./Colors";
const Data = () => {
	const colors = Colors;
	const getLoggedInUser = () => {
		if (localStorage.getItem("loggedInUser")) {
			return JSON.parse(localStorage.getItem("loggedInUser"));
		} else {
			return null;
		}
	};
	const [currentUser, setCurrentUser] = useState(getLoggedInUser());
	const [openMobileMenu, setOpenMobileMenu] = useState(false);
	const toggleMobileMenu = () => {
		setOpenMobileMenu(!openMobileMenu);
	};
	const closeMobileMenu = () => {
		setOpenMobileMenu(false);
	};
	const saveCurrentUser = (user) => {
		setCurrentUser(user);
		localStorage.setItem("loggedInUser", JSON.stringify(user));
	};
	return {
		colors,
		currentUser,
		saveCurrentUser,
		openMobileMenu,
		toggleMobileMenu,
		closeMobileMenu,
	};
};

export default Data;
