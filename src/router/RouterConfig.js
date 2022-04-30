import { Navigate } from "react-router-dom";
import Home from "./../pages/Home/Home";
import Login from "./../pages/Login/Login";
import Register from "./../pages/Register/Register";
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
		path: "/register",
		element: <Register />,
		exact: true,
		key: "Register",
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
