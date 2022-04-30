import React, { useContext } from "react";
import Context from "../../contexts/Context";
import UserIcon from "./UserIcon";
const MenuDesktop = () => {
	const { currentUser, colors } = useContext(Context);
	const menuItem = {
		cursor: "pointer",
	};
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
			<div
				style={{
					display: "flex",
					gap: "20px",
					paddingLeft: "40px",
					color: currentUser ? colors.fg : colors.grey,
				}}
			>
				<h2 style={menuItem}>Home</h2>
				<h2 style={menuItem}>Archived</h2>
				{currentUser && <h2>Logout</h2>}
			</div>
			<UserIcon />
		</div>
	);
};

export default MenuDesktop;
