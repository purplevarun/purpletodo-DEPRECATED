import React, { useContext, useEffect, useState } from "react";
import Context from "./../../contexts/Context";
import Button from "../../components/Button/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
	const navigate = useNavigate();
	const { colors } = useContext(Context);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [showPasswordBox, setShowPasswordBox] = useState(false);
	const [showHelpText, setShowHelpText] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setShowHelpText(true);
		}, 3000);
	}, []);
	const loginPage = {
		style: {
			height: "100%",
			minHeight: "80vh",
			display: "flex",
			justifyContent: showPasswordBox ? "space-evenly" : "center",
			alignItems: "center",
			marginRight: "40px",
			flexDirection: "column",
			gap: "20px",
		},
	};
	const inputBox = {
		type: "text",
		placeholder: "username",
		style: {
			minWidth: "300px",
			fontSize: "20px",
			borderRadius: "8px",
			outline: "none",
			padding: "10px",
			borderColor: colors.green,
			borderWidth: "5px",
			borderStyle: "solid",
			backgroundColor: colors.bg,
			color: colors.fg,
		},
		value: username,
		onChange: (e) => setUsername(e.target.value),
	};
	const passwordBox = {
		type: "text",
		placeholder: "password",
		style: {
			minWidth: "300px",
			fontSize: "20px",
			borderRadius: "8px",
			outline: "none",
			padding: "10px",
			borderColor: colors.green,
			borderWidth: "5px",
			borderStyle: "solid",
			backgroundColor: colors.bg,
			color: colors.fg,
		},
		value: password,
		onChange: (e) => setPassword(e.target.value),
	};
	const getUserExistsData = async () => {
		const { data } = await axios.post(
			`${process.env.REACT_APP_API_URL}/find-user`,
			{ username }
		);
		return data;
	};
	const getUserValidationData = async () => {
		const { data } = await axios.post(
			`${process.env.REACT_APP_API_URL}/validate-user`,
			{ username, password }
		);
		return data;
	};
	const handleClick = async () => {
		if (showPasswordBox) {
			const userValidated = await getUserValidationData();
			console.log(userValidated);
		} else {
			const userExists = await getUserExistsData();
			if (userExists.status) {
				setShowPasswordBox(true);
			} else {
				navigate("/register");
			}
		}
	};
	const handleKeyDown = (e) => {
		if (e.key === "Enter" && username.length >= 3) {
			handleClick();
		}
	};
	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	});
	return (
		<div {...loginPage}>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "20px",
					alignItems: "center",
					height: "20vh",
				}}
			>
				<h1 style={{ color: colors.pink }}>login</h1>
				<input {...inputBox} />
				{showPasswordBox && <input {...passwordBox} />}
			</div>
			<div style={{ height: "10vh" }}>
				{username.length >= 3 ? (
					<Button
						text={"submit"}
						variant={"black"}
						onClick={handleClick}
					/>
				) : (
					showHelpText && <p>username should be atleast 3 letters</p>
				)}
			</div>
		</div>
	);
};

export default Login;
