import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Context from "../../contexts/Context";
import TodoData from "./TodoData";
import loading from "./../../assets/loading.svg";
const TodoList = ({ onlyArchived }) => {
	const { axiosConfig, currentUser, renderTodos } = useContext(Context);
	const [todos, setTodos] = useState(null);
	const getTodos = async () => {
		const url = `${process.env.REACT_APP_API_URL}/get-todos/${currentUser.email}`;
		const response = await axios.get(url, axiosConfig);
		if (response.data.status) {
			setTodos(response.data.docs);
		} else {
			alert(response.data.message);
			console.log(response.data);
		}
	};
	const todoProps = { todos, onlyArchived };
	useEffect(() => {
		getTodos();
	}, [renderTodos]);
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				minHeight: "80vh",
				marginRight: "30px",
				userSelect: "none",
			}}
		>
			{todos ? (
				<TodoData {...todoProps} />
			) : (
				<img src={loading} alt="loading" />
			)}
		</div>
	);
};

export default TodoList;
