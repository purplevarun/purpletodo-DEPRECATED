import axios from "axios";
import { isMobile } from "ismobilehook";
import React, { useContext, useState } from "react";
import Context from "./../../contexts/Context";
const InputBox = () => {
	const [text, setText] = useState("");
	const { axiosConfig, currentUser, colors, setNewTodo } =
		useContext(Context);

	const handleChange = (e) => {
		setText(e.target.value);
	};
	const getHeight = () => {
		let length = 0;
		let wordLength = 0;
		for (let ch of text) {
			if (ch === " ") length++;
			else wordLength++;
		}
		const finalLength =
			length + isMobile()
				? Math.round(wordLength / 2)
				: Math.round(wordLength / 10);
		return `${finalLength}vh`;
	};
	const textArea = {
		style: {
			width: "100%",
			minHeight: "5vh",
			height: getHeight(),
			borderRadius: "10px",
			padding: "10px",
			outline: "none",
			borderWidth: "5px",
			borderStyle: "solid",
			borderColor: colors.gold,
			fontSize: "20px",
			resize: "none",
			background: colors.bg,
			color: colors.fg,
			whiteSpace: "pre-wrap",
		},
		value: text,
		onChange: handleChange,
		autoFocus: true,
	};
	const [saveBtnHover, setSaveBtnHover] = useState(false);
	const [discardBtnHover, setDiscardBtnHover] = useState(false);
	const btnStyle = {
		width: "100px",
		fontSize: "20px",
		borderRadius: "10px",
		padding: "5px",
		background: "none",
		color: colors.fg,
		transition: "0.5s",
		borderWidth: "5px",
		borderStyle: "solid",
	};
	const saveNewTodo = async () => {
		if (text.length > 0) {
			const url = `${process.env.REACT_APP_API_URL}/save-new-todo`;
			const data = {
				content: text,
				email: currentUser.email,
				date: new Date().toString(),
			};
			const response = await axios.post(url, data, axiosConfig);
			if (!response.data.status) {
				alert("Error! New Todo was not saved!");
			}
			setNewTodo(false);
		} else {
			alert("No Text Given!");
		}
	};
	const saveBtn = {
		style: {
			...btnStyle,
			borderColor: saveBtnHover ? colors.pink : colors.green,
			backgroundColor: saveBtnHover ? colors.green : colors.bg,
		},
		onMouseOver: () => setSaveBtnHover(true),
		onMouseLeave: () => setSaveBtnHover(false),
		onClick: async () => {
			await saveNewTodo();
		},
	};
	const discardBtn = {
		style: {
			...btnStyle,
			borderColor: discardBtnHover ? colors.pink : colors.red,
			backgroundColor: discardBtnHover ? colors.red : colors.bg,
		},
		onMouseOver: () => setDiscardBtnHover(true),
		onMouseLeave: () => setDiscardBtnHover(false),
		onClick: () => setNewTodo(false),
	};
	const btns = {
		style: {
			display: "flex",
			justifyContent: "space-evenly",
			alignItems: "center",
			paddingTop: "20px",
		},
	};
	return (
		<div
			style={{
				display: "flex",
				width: isMobile() ? "88%" : "96%",
				flexDirection: "column",
				marginBottom: "20px",
			}}
		>
			<textarea {...textArea} />
			{text}
			<div {...btns}>
				<button {...saveBtn}>Save</button>
				<button {...discardBtn}>Discard</button>
			</div>
		</div>
	);
};

export default InputBox;
