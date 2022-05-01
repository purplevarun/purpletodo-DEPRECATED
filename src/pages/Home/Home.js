import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddButton from "../../components/AddButton/AddButton";
import Context from "../../contexts/Context";
import InputBox from "./../../components/InputBox/InputBox";
const Home = () => {
	const { currentUser, newTodo, setNewTodo } = useContext(Context);
	const navigate = useNavigate();
	useEffect(() => {
		if (!currentUser) {
			navigate("/");
		}
	});
	const homepage = {
		style: {
			paddingLeft: "20px",
			minHeight: "80vh",
			paddingTop: "10px",
		},
	};
	const addBtnWrapper = {
		style: {
			position: "fixed",
			right: "50px",
			bottom: "50px",
		},
	};
	return (
		<div {...homepage}>
			{newTodo && <InputBox />}
			<div {...addBtnWrapper}>
				<AddButton />
			</div>
		</div>
	);
};

export default Home;
