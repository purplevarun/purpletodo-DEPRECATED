import React from "react";
import TodoItem from "./TodoItem";

const TodoData = ({ todos, onlyArchived }) => {
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
				if (onlyArchived) {
					if (todo.completed)
						return <TodoItem {...todo} key={todo._id} />;
				} else {
					if (!todo.completed)
						return <TodoItem {...todo} key={todo._id} />;
				}
			})}
		</div>
	);
};

export default TodoData;
