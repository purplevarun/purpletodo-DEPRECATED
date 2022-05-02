import React from "react";
import TodoList from "../../components/TodoList/TodoList";

const Archived = () => {
	return (
		<div
			style={{
				paddingLeft: "20px",
				minHeight: "80vh",
				paddingTop: "10px",
			}}
		>
			<TodoList onlyArchived={true} />
		</div>
	);
};

export default Archived;
