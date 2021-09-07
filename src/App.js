import { Layout } from "antd";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import AddClass from "./pages/addClass/AddClass";
import ArticlePage from "./pages/articlePage/ArticlePage";
import DashboardMember from "./pages/Dashboard/DashboardMember";
import ProjectHome from "./pages/Home/ProjectHome";
import LoginAdmin from "./pages/Login/LoginAdmin";
import LoginMember from "./pages/Login/LoginMember";
import Register from "./pages/Login/Register";
import Sidebar from "./components/Layout/Sidebar";
import Head from "./components/Layout/Head";
import LayoutTest from "./components/Layout/LayoutTest";

// function App() {
// 	return (
// 		<BrowserRouter>
// 			<div className="App">
// 				{/* <Route path="/" exact component={LoginMember} />
// 				<Route path="/login-admin" component={LoginAdmin} />
// 				<Route path="/register" component={Register} />
// 				<Route path="/member" component={DashboardMember} />
// 				<Route path="/member/project-saya" exact></Route>
// 				<Route path="/member/undangan" exact></Route>
// 				<Route path="/member/post-artikel" exact></Route>
// 				<Route path="/member/artikel-saya" exact></Route> */}
// 				<Layout>
// 					<Sidebar />
// 					<Layout>
// 						<Head />
// 					</Layout>
// 				</Layout>
// 			</div>
// 		</BrowserRouter>
// 	);
// }

function App() {
	return (
		<div>
			<LayoutTest />
		</div>
	);
}

export default App;
