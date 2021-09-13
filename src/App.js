import { BrowserRouter, Route } from "react-router-dom";
import "antd/dist/antd.css";
import "./App.css";

import LoginAdmin from "./pages/Login/LoginAdmin";
import LoginMember from "./pages/Login/LoginMember";
import DashboardMember from "./pages/Dashboard/DashboardMember";
import DashboardAdmin from "./pages/Dashboard/DashboardAdmin";
import Register from "pages/Login/Register";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Route path="/" exact component={LoginMember} />
				<Route path="/login-admin" exact component={LoginAdmin} />
				<Route path="/member" component={DashboardMember} />
				<Route path="/admin-dashboard" exact component={DashboardAdmin} />
				<Route path="/register" exact component={Register} />
			</BrowserRouter>
		</div>
	);
}

export default App;
