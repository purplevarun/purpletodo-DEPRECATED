import React, { useContext, useRef, useState } from "react";
import { MdAddCircle } from "react-icons/md";
import Context from "../../contexts/Context";
const AddButton = () => {
	const { colors, setNewTodo, newTodo } = useContext(Context);
	const [onHover, setOnHover] = useState(false);
	const iconProps = {
		size: 50,
		style: {
			cursor: "pointer",
			color: onHover ? colors.gold : colors.fg,
			transition: "0.5s",
			background: onHover ? colors.pink : "none",
			borderRadius: "50px",
		},
		onMouseOver: () => setOnHover(true),
		onMouseLeave: () => setOnHover(false),
		onClick: () => {
			if (!newTodo) {
				setNewTodo(true);
			}
		},
	};
	return <MdAddCircle {...iconProps} />;
};

export default AddButton;
