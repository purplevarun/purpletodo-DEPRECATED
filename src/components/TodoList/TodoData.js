import React from "react";
import TodoItem from "./TodoItem";

const TodoData = ({ todos }) => {
	return (
		<div
			style={{
				width: "100%",
				gap: "20px",
				display: "flex",
				flexDirection: "column",
			}}
		>
			{todos.map((todo) => {
				return <TodoItem {...todo} />;
			})}
		</div>
	);
};

export default TodoData;
