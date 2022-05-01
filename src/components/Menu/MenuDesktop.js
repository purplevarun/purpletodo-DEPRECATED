import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../../contexts/Context";
import UserIcon from "./UserIcon";
const MenuDesktop = () => {
	const navigate = useNavigate();
	const { currentUser, colors, saveCurrentUser } = useContext(Context);
	const menuItem = {
		cursor: "pointer",
		transition: "0.5s",
	};
	const homeButtonRef = useRef();
	const homeButton = {
		ref: homeButtonRef,
		style: menuItem,
		onMouseOver: () => {
			if (currentUser) {
				homeButtonRef.current.style.fontSize = "1.6em";
				homeButtonRef.current.style.color = colors.pink;
			}
		},
		onMouseLeave: () => {
			if (currentUser) {
				homeButtonRef.current.style.fontSize = "1.5em";
				homeButtonRef.current.style.color = currentUser
					? colors.fg
					: colors.grey;
			}
		},
		onClick: () => {
			if (currentUser) {
				navigate("/home");
			}
		},
	};
	const archivedButtonRef = useRef();
	const archivedButton = {
		ref: archivedButtonRef,
		style: menuItem,
		onMouseOver: () => {
			if (currentUser) {
				archivedButtonRef.current.style.fontSize = "1.6em";
				archivedButtonRef.current.style.color = colors.pink;
			}
		},
		onMouseLeave: () => {
			if (currentUser) {
				archivedButtonRef.current.style.fontSize = "1.5em";
				archivedButtonRef.current.style.color = currentUser
					? colors.fg
					: colors.grey;
			}
		},
		onClick: () => {
			if (currentUser) {
				navigate("/archived");
			}
		},
	};
	const logoutButtonRef = useRef();
	const logoutButton = {
		ref: logoutButtonRef,
		style: menuItem,
		onMouseOver: () => {
			if (currentUser) {
				logoutButtonRef.current.style.fontSize = "1.6em";
				logoutButtonRef.current.style.color = colors.pink;
			}
		},
		onMouseLeave: () => {
			if (currentUser) {
				logoutButtonRef.current.style.fontSize = "1.5em";
				logoutButtonRef.current.style.color = currentUser
					? colors.fg
					: colors.grey;
			}
		},
		onClick: () => {
			if (currentUser) {
				saveCurrentUser(null);
				localStorage.removeItem("loggedInUser");
				navigate("/");
			}
		},
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
				<h2 {...homeButton}>Home</h2>
				<h2 {...archivedButton}>Archived</h2>
				{currentUser && <h2 {...logoutButton}>Logout</h2>}
			</div>
			<UserIcon />
		</div>
	);
};

export default MenuDesktop;
