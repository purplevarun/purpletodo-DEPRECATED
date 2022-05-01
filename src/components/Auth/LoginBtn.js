import React, { useContext, useRef, useState } from "react";
import Context from "./../../contexts/Context";
import { useGoogleLogin } from "react-google-login";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const LoginBtn = () => {
	const { colors, saveCurrentUser } = useContext(Context);
	const navigate = useNavigate();
	const onSuccess = (res) => {
		const user = res.profileObj;
		saveCurrentUser({
			email: user.email,
			image: user.imageUrl,
		});
		navigate("/home");
	};
	const onFailure = (res) => {
		console.log("failure", res);
	};
	const clientId = process.env.REACT_APP_GOOGLE_CID;

	const { signIn } = useGoogleLogin({
		clientId,
		onSuccess,
		onFailure,
	});
	const btnRef = useRef();
	const [gIconColor, setGIconColor] = useState(colors.pink);
	const btnProps = {
		ref: btnRef,
		onClick: signIn,
		style: {
			padding: "12px",
			fontSize: "20px",
			border: `5px solid ${colors.gold}`,
			borderRadius: "10px",
			background: "none",
			color: colors.fg,
			display: "flex",
			justifyContent: "space-evenly",
			alignItems: "center",
			width: "200px",
		},
		onMouseOver: () => {
			setGIconColor(colors.green);
		},
		onMouseLeave: () => {
			setGIconColor(colors.pink);
		},
	};
	const googleIcon = {
		color: gIconColor,
		size: 30,
	};
	return (
		<button {...btnProps}>
			Login <FaGoogle {...googleIcon} />
		</button>
	);
};

export default LoginBtn;
