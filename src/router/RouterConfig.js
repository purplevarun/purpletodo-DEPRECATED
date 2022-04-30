import { Navigate } from "react-router-dom";
import Home from "./../pages/Home/Home";
import Login from "./../pages/Login/Login";
import Register from "./../pages/Register/Register";
import Archived from "./../pages/Archived/Archived";

const AllRoutes = [
	{
		path: "/",
		element: <Home />,
		exact: true,
	},
	{
		path: "/login",
		element: <Login />,
		exact: true,
	},
	{
		path: "/register",
		element: <Register />,
		exact: true,
	},
	{
		path: "/archived",
		element: <Archived />,
		exact: true,
	},
	{
		path: "*",
		element: <Navigate to="/" replace />,
		exact: true,
	},
];
export default AllRoutes;
