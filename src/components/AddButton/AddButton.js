import React, { useContext, useRef, useState } from "react";
import { MdAddCircle } from "react-icons/md";
import Context from "../../contexts/Context";
const AddButton = () => {
	const { colors, setNewTodo, newTodo } = useContext(Context);
	const [iconColor, setIconColor] = useState(colors.fg);
	const iconProps = {
		size: 50,
		style: {
			cursor: "pointer",
			color: iconColor,
		},
		onMouseOver: () => setIconColor(colors.gold),
		onMouseLeave: () => setIconColor(colors.fg),
		onClick: () => {
			if (!newTodo) {
				setNewTodo(true);
			}
		},
	};
	return <MdAddCircle {...iconProps} />;
};

export default AddButton;
