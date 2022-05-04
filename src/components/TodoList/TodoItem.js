import axios from "axios";
import React, { useContext, useState } from "react";
import Context from "../../contexts/Context";
import InputBox from "../InputBox/InputBox";
import Loader from "./../../assets/loading.svg";
import ReactMarkdown from "react-markdown";
import { FaEdit } from "react-icons/fa";
const TodoItem = ({ content, date, _id, completed }) => {
	const { colors, axiosConfig, setRenderTodos, renderTodos } =
		useContext(Context);
	const [showLoader, setShowLoader] = useState(false);
	const newDate = new Date(date).toLocaleString();
	const [hover, setHover] = useState(false);
	const contentProps = {
		style: {
			display: "flex",
			flexDirection: "column",
			alignSelf: "flex-start",
			paddingLeft: "20px",
			color: hover ? colors.gold : colors.pink,
			transition: "2s",
			whiteSpace: "pre-wrap",
			fontSize: "20px",
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
			paddingLeft: "20px",
		},
		onMouseOver: () => setHover(true),
		onMouseLeave: () => setHover(false),
	};
	const [newContent, setNewContent] = useState(content);
	const editTodo = async () => {
		if (newContent.length > 0) {
			setShowLoader(true);
			const url = `${process.env.REACT_APP_API_URL}/edit-todo`;
			const data = {
				content: newContent,
				date: new Date().toString(),
				todoId: _id,
			};
			await axios.post(url, data, axiosConfig);
			setEditMode(false);
			setHover(false);
			setShowLoader(false);
		} else {
			alert("Todo Note is Empty!");
		}
		setRenderTodos(!renderTodos);
	};
	const deleteTodo = async () => {
		setShowLoader(true);
		const url = `${process.env.REACT_APP_API_URL}/delete-todo`;
		const data = {
			todoId: _id,
		};
		await axios.post(url, data, axiosConfig);
		setShowLoader(false);
		setRenderTodos(!renderTodos);
	};
	const completeTodo = async () => {
		if (completed) {
			alert("This Note is already Archived");
		} else {
			setShowLoader(true);
			const url = `${process.env.REACT_APP_API_URL}/complete-todo`;
			const data = {
				todoId: _id,
			};
			await axios.post(url, data, axiosConfig);
			setShowLoader(false);
		}
		setRenderTodos(!renderTodos);
	};
	const inputBoxProps = {
		existingText: content,
		customOnClick: true,
		customOnClickFunction: async () => {
			await editTodo();
		},
		setNewContent,
		deleteTodo,
		completeTodo,
	};
	const [editBtnHover, setEditBtnHover] = useState(false);
	const editBtn = {
		size: editBtnHover ? 35 : 30,
		onClick: handleClick,
		onMouseOver: () => setEditBtnHover(true),
		onMouseLeave: () => setEditBtnHover(false),
		style: {
			transition: "0.5s",
			color: editBtnHover ? colors.green : colors.fg,
		},
	};
	return (
		<div {...wrapper}>
			{editMode ? (
				<InputBox {...inputBoxProps} />
			) : (
				<span {...contentProps}>
					<ReactMarkdown>{content}</ReactMarkdown>
				</span>
			)}
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					marginLeft: "20px",
					marginTop: "20px",
				}}
			>
				<FaEdit {...editBtn} />
				<h5 {...dateProps}>{newDate}</h5>
			</div>
			<br />
			<div style={{ textAlign: "center" }}>
				{showLoader && <img src={Loader} alt="loading" width={100} />}
			</div>
		</div>
	);
};

export default TodoItem;
