import React, { useContext } from "react";
import Context from "./../../contexts/Context";
const Login = () => {
	const { colors } = useContext(Context);
	return (
		<div
			style={{
				height: "100%",
				minHeight: "50vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				marginRight: "40px",
			}}
		>
			<input
				type="text"
				placeholder="enter username"
				style={{
					minWidth: "300px",
					fontSize: "20px",
					borderRadius: "8px",
					outline: "none",
					padding: "10px",
					borderColor: colors.pink,
					borderWidth: "5px",
					borderStyle: "solid",
				}}
			/>
		</div>
	);
};

export default Login;
