import React, { useContext } from "react";
import { FaUserSlash, FaUser } from "react-icons/fa";
import Context from "../../contexts/Context";
const UserIcon = () => {
	const { currentUser } = useContext(Context);
	const iconProps = {
		size: 40,
	};
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				paddingRight: "30px",
			}}
		>
			{currentUser ? (
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: "10px",
					}}
				>
					<FaUser {...iconProps} />
					<p style={{ fontSize: "20px" }}>{currentUser.username}</p>
				</div>
			) : (
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: "10px",
					}}
				>
					<FaUserSlash {...iconProps} />
					<p style={{ fontSize: "20px" }}>Guest</p>
				</div>
			)}
		</div>
	);
};

export default UserIcon;
