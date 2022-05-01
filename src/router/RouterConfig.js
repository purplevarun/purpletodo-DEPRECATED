import { Navigate } from "react-router-dom";
import Home from "./../pages/Home/Home";
import Login from "./../pages/Login/Login";
import Archived from "./../pages/Archived/Archived";

const AllRoutes = [
	{
		path: "/",
		element: <Login />,
		exact: true,
		key: "Login",
	},
	{
		path: "/home",
		element: <Home />,
		exact: true,
		key: "Home",
	},
	{
		path: "/archived",
		element: <Archived />,
		exact: true,
		key: "Archived",
	},
	{
		path: "*",
		element: <Navigate to="/" replace />,
		exact: false,
		key: "Redirect",
	},
];
export default AllRoutes;
