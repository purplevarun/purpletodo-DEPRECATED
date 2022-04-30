import React, { useContext } from "react";
import Context from "../../contexts/Context";
import UserIcon from "./UserIcon";
const MenuDesktop = () => {
	const { currentUser } = useContext(Context);
	return (
		<div
			style={{
				position: "absolute",
				userSelect: "none",
				display: "flex",
				width: "100%",
				height: "8vh",
				alignItems: "center",
				justifyContent: "space-between",
			}}
		>
			<div style={{ display: "flex", gap: "20px", paddingLeft: "40px" }}>
				<h2>Home</h2>
				<h2>Archived</h2>
				{currentUser && <h2>Logout</h2>}
			</div>
			<UserIcon />
		</div>
	);
};

export default MenuDesktop;
