import React, { useContext, useState } from "react";
import Context from "./../../contexts/Context";
import Button from "../../components/Button/Button";
const Login = () => {
	const { colors } = useContext(Context);
	const [text, setText] = useState("");
	const loginPage = {
		style: {
			height: "100%",
			minHeight: "60vh",
			display: "flex",
			justifyContent: "center",
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
		value: text,
		onChange: (e) => setText(e.target.value),
	};
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
			</div>
			<div style={{ height: "10vh" }}>
				{text.length >= 3 ? (
					<Button text={"submit"} variant={"black"} />
				) : (
					<p>username should be atleast 3 letters</p>
				)}
			</div>
		</div>
	);
};

export default Login;
