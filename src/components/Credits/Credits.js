import React, { useContext, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Context from "../../contexts/Context";
const Credits = () => {
	const { colors } = useContext(Context);
	const gotoGithub = () => {
		window.open("https://github.com/purplevarun");
	};
	const gotoWebsite = () => {
		window.open("https://purplevarun.github.io");
	};
	const gotoLinkedIn = () => {
		window.open("https://linkedin.com/in/purplevarun");
	};
	const text1 = "Developed by Varun Kedia";
	const text2 = "purplevarun.github.io";
	const [text, setText] = useState(text1);
	const wrapper = {
		style: {
			margin: "20px",
			justifyContent: "center",
			display: "flex",
			gap: "20px",
			alignItems: "center",
			userSelect: "none",
			cursor: "pointer",
		},
	};
	const btns = {
		style: {
			justifyContent: "center",
			display: "flex",
			gap: "10px",
			alignItems: "center",
		},
	};
	const [ghHover, setGhHover] = useState(false);
	const [lnHover, setLnHover] = useState(false);
	const [textHover, setTextHover] = useState(false);
	const ghIcon = {
		size: ghHover ? 35 : 30,
		onClick: gotoGithub,
		onMouseOver: () => setGhHover(true),
		onMouseLeave: () => setGhHover(false),
		style: {
			color: ghHover ? colors.gold : colors.fg,
			transition: "0.5s",
		},
	};
	const lnIcon = {
		size: lnHover ? 35 : 30,
		onClick: gotoLinkedIn,
		onMouseOver: () => setLnHover(true),
		onMouseLeave: () => setLnHover(false),
		style: {
			color: lnHover ? colors.gold : colors.fg,
			transition: "0.5s",
		},
	};
	const cred = {
		onClick: gotoWebsite,
		onMouseOver: () => {
			setText(text2);
			setTextHover(true);
		},
		onMouseLeave: () => {
			setText(text1);
			setTextHover(false);
		},
		style: {
			color: textHover ? colors.gold : colors.green,
		},
	};
	return (
		<div {...wrapper}>
			<h4 {...cred}>{text}</h4>
			<div {...btns}>
				<FaGithub {...ghIcon} />
				<FaLinkedin {...lnIcon} />
			</div>
		</div>
	);
};

export default Credits;
