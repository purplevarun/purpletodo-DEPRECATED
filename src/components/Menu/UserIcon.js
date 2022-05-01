import { isMobile } from "ismobilehook";
import React, { useContext } from "react";
import { FaUserSlash } from "react-icons/fa";
import Context from "../../contexts/Context";
const UserIcon = () => {
	const { currentUser, colors } = useContext(Context);
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
					<div
						style={{
							overflow: "hidden",
							borderRadius: "10px",
							border: `3px solid ${colors.pink}`,
						}}
					>
						<img src={currentUser.image} alt="" width={40} />
					</div>
					{!isMobile() && (
						<p style={{ fontSize: "20px" }}>{currentUser.email}</p>
					)}
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
				</div>
			)}
		</div>
	);
};

export default UserIcon;
