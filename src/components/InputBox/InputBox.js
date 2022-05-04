import axios from "axios";
import { isMobile } from "ismobilehook";
import React, { useContext, useState } from "react";
import Context from "./../../contexts/Context";
const InputBox = ({
	existingText,
	customOnClick,
	customOnClickFunction,
	setNewContent,
	deleteTodo,
	completeTodo,
	setShowLoader,
}) => {
	const [text, setText] = useState(existingText ? existingText : "");
	const {
		axiosConfig,
		currentUser,
		colors,
		setNewTodo,
		renderTodos,
		setRenderTodos,
	} = useContext(Context);

	const handleChange = (e) => {
		setText(e.target.value);
		if (customOnClick) {
			setNewContent(e.target.value);
		}
	};
	const getHeight = () => {
		let length = 5;
		for (let ch of text) {
			if (ch === "\n") length += 2;
		}
		return `${length}vh`;
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
			setShowLoader(true);
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
			setShowLoader(false);
		} else {
			alert("No Text Given!");
		}
		setRenderTodos(!renderTodos);
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
			if (customOnClick) {
				await customOnClickFunction();
			} else {
				await saveNewTodo();
			}
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
			gap: "10px",
		},
	};
	const [archiveBtnHover, setArchiveBtnHover] = useState(false);
	const [deleteBtnHover, setDeleteBtnHover] = useState(false);
	const archiveBtn = {
		style: {
			...btnStyle,
			borderColor: archiveBtnHover ? colors.pink : colors.orange,
			backgroundColor: archiveBtnHover ? colors.orange : colors.bg,
		},
		onMouseOver: () => setArchiveBtnHover(true),
		onMouseLeave: () => setArchiveBtnHover(false),
		onClick: completeTodo,
	};
	const deleteBtn = {
		style: {
			...btnStyle,
			borderColor: deleteBtnHover ? colors.pink : colors.red,
			backgroundColor: deleteBtnHover ? colors.red : colors.bg,
		},
		onMouseOver: () => setDeleteBtnHover(true),
		onMouseLeave: () => setDeleteBtnHover(false),
		onClick: deleteTodo,
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
			<div {...btns}>
				<button {...saveBtn}>Save</button>
				{customOnClick ? (
					<>
						<button {...archiveBtn}>Archive</button>
						<button {...deleteBtn}>Delete</button>
					</>
				) : (
					<button {...discardBtn}>Discard</button>
				)}
			</div>
		</div>
	);
};

export default InputBox;
