import React, { useContext, useEffect, useState } from "react";
import UserIcon from "./UserIcon";
import { BsFillGridFill } from "react-icons/bs";
import Context from "../../contexts/Context";
import { useNavigate } from "react-router-dom";
const MenuMobileCollapse = () => {
	const navigate = useNavigate();
	const {
		colors,
		openMobileMenu,
		toggleMobileMenu,
		closeMobileMenu,
		saveCurrentUser,
		currentUser,
	} = useContext(Context);
	const menuIcon = {
		size: 40,
		onClick: toggleMobileMenu,
		style: {
			paddingLeft: "20px",
		},
	};
	const homeBtn = {
		onClick: () => {
			if (currentUser) navigate("/home");
		},
	};
	const archivedBtn = {
		onClick: () => {
			if (currentUser) navigate("/archived");
		},
	};
	const logoutBtn = {
		onClick: () => {
			saveCurrentUser(null);
			localStorage.removeItem("loggedInUser");
			navigate("/");
		},
	};
	useEffect(() => {
		setTimeout(closeMobileMenu, 5000);
	});
	return (
		<div
			style={{
				position: "absolute",
				userSelect: "none",
				display: "flex",
				height: "8vh",
				alignItems: "center",
				justifyContent: "space-between",
				background: colors.comment,
				width: openMobileMenu ? "100%" : "0px",
				transition: "1s",
			}}
		>
			<BsFillGridFill {...menuIcon} />
			{openMobileMenu && (
				<div
					style={{
						paddingRight: "20px",
						display: "flex",
						justifyContent: "space-between",
						gap: "20px",
					}}
				>
					<h2 {...homeBtn}>Home</h2>
					<h2 {...archivedBtn}>Archived</h2>
					{currentUser && <h2 {...logoutBtn}>Logout</h2>}
				</div>
			)}
		</div>
	);
};

export default MenuMobileCollapse;
