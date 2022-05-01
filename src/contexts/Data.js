import { useState } from "react";
import { useGoogleLogout } from "react-google-login";
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
	const clientId = process.env.REACT_APP_GOOGLE_CID;
	const { signOut } = useGoogleLogout({ clientId });
	const logoutCurrentUser = () => {
		saveCurrentUser(null);
		localStorage.removeItem("loggedInUser");
		signOut();
	};

	return {
		// colors
		colors,
		// user
		currentUser,
		saveCurrentUser,
		logoutCurrentUser,
		// mobile menu
		openMobileMenu,
		toggleMobileMenu,
		closeMobileMenu,
	};
};

export default Data;
