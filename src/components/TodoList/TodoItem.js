import React, { useContext, useState } from "react";
import Context from "../../contexts/Context";

const TodoItem = ({ content, date }) => {
	const { colors } = useContext(Context);
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
	const wrapper = {
		style: {
			width: "100%",
			display: "flex",
			flexDirection: "column",
			borderRadius: "10px",
			// border: "2px solid green",
			backgroundColor: hover ? colors.comment : colors.bg,
			transition: "1s",
			marginTop: "20px",
		},
		onMouseOver: () => setHover(true),
		onMouseLeave: () => setHover(false),
	};
	return (
		<div {...wrapper}>
			<h2 {...contentProps}>{content}</h2>
			<h5 {...dateProps}>{newDate}</h5>
			<br />
		</div>
	);
};

export default TodoItem;
