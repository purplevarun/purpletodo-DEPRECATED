import React from "react";

const TodoItem = ({ content, email, date }) => {
	const newDate = new Date(date).toLocaleString();
	return (
		<div
			style={{
				background: "teal",
				width: "100%",
				display: "flex",
				flexDirection: "column",
			}}
		>
			<h2>{content}</h2>
			<h5>{newDate}</h5>
			<h5>{email}</h5>
		</div>
	);
};

export default TodoItem;
