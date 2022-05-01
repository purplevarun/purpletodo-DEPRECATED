import React, { useContext } from "react";
import LoginBtn from "../../components/Auth/LoginBtn";
import Context from "../../contexts/Context";

const Login = () => {
	const { currentUser } = useContext(Context);
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "60vh",
			}}
		>
			<LoginBtn />
		</div>
	);
};

export default Login;
