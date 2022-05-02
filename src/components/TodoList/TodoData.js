import React from "react";
import TodoItem from "./TodoItem";

const TodoData = ({ todos }) => {
	return (
		<div
			style={{
				width: "100%",
				gap: "20px",
				display: "flex",
				flexDirection: "column-reverse",
			}}
		>
			{todos.map((todo) => {
				if (!todo.completed)
					return <TodoItem {...todo} key={todo._id} />;
			})}
		</div>
	);
};

export default TodoData;
