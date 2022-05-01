import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginBtn from "../../components/Auth/LoginBtn";
import Context from "../../contexts/Context";

const Login = () => {
	const { currentUser } = useContext(Context);
	const navigate = useNavigate();
	useEffect(() => {
		if (currentUser) {
			navigate("/home");
		}
	});
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
