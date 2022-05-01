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
	const saveCurrentUser = (user) => {
		setCurrentUser(user);
		localStorage.setItem("loggedInUser", JSON.stringify(user));
	};
	return {
		colors,
		currentUser,
		saveCurrentUser,
	};
};

export default Data;
