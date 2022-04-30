import React, { useContext, useRef } from "react";
import Context from "../../contexts/Context";

const Button = ({ text, variant }) => {
	const { colors } = useContext(Context);
	const map = {
		black: {
			bg: colors.bg,
			onhoverbg: colors.grey,
		},
	};
	const btnRef = useRef();
	const btn = {
		ref: btnRef,
		style: {
			background: map[variant].bg,
			outline: "none",
			paddingLeft: "10px",
			paddingRight: "10px",
			paddingTop: "2px",
			paddingBottom: "2px",
			fontSize: "20px",
			borderRadius: "7px",
			color: colors.fg,
			borderWidth: "3px",
			borderStyle: "solid",
			borderColor: colors.fg,
			transition: "0.5s",
		},
		onMouseOver: () => {
			btnRef.current.style.background = map[variant].onhoverbg;
			btnRef.current.style.borderColor = "gold";
			btnRef.current.style.fontSize = "25px";
		},
		onMouseLeave: () => {
			btnRef.current.style.background = map[variant].bg;
			btnRef.current.style.borderColor = colors.fg;
			btnRef.current.style.fontSize = "20px";
		},
	};
	return <button {...btn}>{text}</button>;
};

export default Button;
