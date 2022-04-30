import React from "react";

import UserIcon from "./UserIcon";
const MenuDesktop = () => {
	return (
		<div
			style={{
				position: "absolute",
				userSelect: "none",
				display: "flex",
				background: "red",
				width: "100%",
				height: "8vh",
				alignItems: "center",
				justifyContent: "space-between",
			}}
		>
			<div style={{ display: "flex", gap: "20px", paddingLeft: "40px" }}>
				<h2>Home</h2>
				<h2>Home</h2>
				<h2>Home</h2>
				<h2>Home</h2>
			</div>
			<UserIcon />
		</div>
	);
};

export default MenuDesktop;
