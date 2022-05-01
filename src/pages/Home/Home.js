import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../../contexts/Context";

const Home = () => {
	const { currentUser } = useContext(Context);
	const navigate = useNavigate();
	useEffect(() => {
		if (!currentUser) {
			navigate("/");
		}
	}, [currentUser]);
	useEffect(() => {}, [currentUser]);
	return <div>Home page</div>;
};

export default Home;
