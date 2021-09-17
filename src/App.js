import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "antd/dist/antd.css";
import "./App.css";
import { Layout } from "antd";
import LoginMember from "./pages/Login/LoginMember";
import Register from "pages/Login/Register";
import { getUserSession } from "data/util";
import Sidebar from "components/Layout/Sidebar";
import Head from "components/Layout/Head";
import FooterComponent from "components/Layout/FooterComponent";
import AddClassContent from "components/MainContent/AddClassContent/AddClassContent";
import ArticleContent from "components/MainContent/ArticleContent/ArticleContent";
import PostArticleContent from "components/MainContent/PostArticleContent";
import MyProject from "components/Layout/MyProject";
import MyArticle from "components/MainContent/MyArticle";
import CollabInvitation from "components/Layout/CollabInvitation";
import Beranda from "components/MainContent/BerandaContent/BerandaContent";
import DashboardMember from "pages/Dashboard/DashboardMember";
import { useState } from "react";

const { Content } = Layout;

export default function App() {
	//Pengecekan apakah ada data di session storage
	const isAuth = getUserSession() === null ? false : true;
	console.log(isAuth);

	const PrivateRoute = ({ children, ...rest }) => {
		return (
			<Route
				{...rest}
				render={() => {
					if (isAuth) {
						return children;
					} else {
						return <Redirect to="/login" exact />;
					}
				}}
			/>
		);
	};

	return (
		<BrowserRouter>
			<div className="App">
				<Switch>
					<Route exact path="/">
						<Redirect to="/login" />
						<LoginMember />
					</Route>
					<Route path="/login">
						<LoginMember />
					</Route>
					<PrivateRoute path="/dashboard">
						<Layout style={{ minHeight: "100vh" }}>
							<Sidebar />
							<Layout className="site-layout">
								<Head />
								{/* <Main /> */}
								<FooterComponent />
							</Layout>
						</Layout>
					</PrivateRoute>
				</Switch>
			</div>
		</BrowserRouter>
	);
}
