import React, { useContext } from "react";
import UserIcon from "./UserIcon";
import { BsFillGridFill } from "react-icons/bs";
import Context from "../../contexts/Context";
import MenuMobileCollapse from "./MenuMobileCollapse";
const MenuMobile = () => {
	const { openMobileMenu, toggleMobileMenu } = useContext(Context);
	const menuIcon = {
		size: 40,
		onClick: toggleMobileMenu,
		style: {
			paddingLeft: "20px",
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
			<MenuMobileCollapse />
			<BsFillGridFill {...menuIcon} />
			{!openMobileMenu && <UserIcon />}
		</div>
	);
};

export default MenuMobile;
