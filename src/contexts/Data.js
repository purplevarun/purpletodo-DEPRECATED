import { useState } from "react";
import Colors from "./Colors";
const Data = () => {
	const colors = Colors;
	const [currentUser, setCurrentUser] = useState(null);
	return {
		colors,
		currentUser,
	};
};

export default Data;
