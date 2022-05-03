import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddButton from "../../components/AddButton/AddButton";
import Context from "../../contexts/Context";
import InputBox from "./../../components/InputBox/InputBox";
import TodoList from "./../../components/TodoList/TodoList";
import Loader from "./../../assets/loading.svg";
const Home = () => {
	const { currentUser, newTodo } = useContext(Context);
	const [showLoader, setShowLoader] = useState(false);

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
			{/* input box */}
			{newTodo && <InputBox setShowLoader={setShowLoader} />}
			{/* loading animation */}
			<div style={{ textAlign: "center" }}>
				{showLoader && <img src={Loader} alt="loading" width={100} />}
			</div>
			{/* todo list */}
			<TodoList onlyArchived={false} />
			{/* add btn */}
			<div {...addBtnWrapper}>
				<AddButton />
			</div>
			{/*  */}
		</div>
	);
};

export default Home;
