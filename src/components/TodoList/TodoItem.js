import axios from "axios";
import React, { useContext, useState } from "react";
import Context from "../../contexts/Context";
import InputBox from "../InputBox/InputBox";

const TodoItem = ({ content, date, _id }) => {
	const { colors, axiosConfig } = useContext(Context);
	const newDate = new Date(date).toLocaleString();
	const [hover, setHover] = useState(false);
	const contentProps = {
		style: {
			display: "flex",
			alignSelf: "flex-start",
			paddingLeft: "20px",
			color: hover ? colors.gold : colors.pink,
			transition: "2s",
			whiteSpace: "pre-wrap",
		},
	};
	const dateProps = {
		style: {
			display: "flex",
			alignSelf: "flex-end",
			paddingRight: "20px",
			marginTop: "10px",
		},
	};
	const [editMode, setEditMode] = useState(false);
	const handleClick = () => {
		if (!editMode) setEditMode(true);
	};
	const wrapper = {
		style: {
			width: "100%",
			display: "flex",
			flexDirection: "column",
			borderRadius: "10px",
			backgroundColor: hover ? colors.comment : colors.bg,
			transition: "1s",
			paddingTop: "20px",
			cursor: "pointer",
		},
		onMouseOver: () => setHover(true),
		onMouseLeave: () => setHover(false),
		onClick: handleClick,
	};
	const [newContent, setNewContent] = useState(false);
	const editTodo = async () => {
		const url = `${process.env.REACT_APP_API_URL}/edit-todo`;
		const data = {
			content: newContent,
			date: new Date().toString(),
			todoId: _id,
		};
		axios.post(url, data, axiosConfig);
		setEditMode(false);
		setHover(false);
	};
	const inputBoxProps = {
		existingText: content,
		hideDiscardBtn: true,
		customOnClick: true,
		customOnClickFunction: async () => {
			await editTodo();
		},
		setNewContent,
	};
	return (
		<div {...wrapper}>
			{editMode ? (
				<InputBox {...inputBoxProps} />
			) : (
				<h2 {...contentProps}>{content}</h2>
			)}

			<h5 {...dateProps}>{newDate}</h5>
			<br />
		</div>
	);
};

export default TodoItem;
