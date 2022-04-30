import React, { useContext } from "react";
import Context from "../../contexts/Context";

const Home = () => {
	const { name } = useContext(Context);
	return <div>Home {name}</div>;
};

export default Home;
