import React from "react";
import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";
import AddClassContent from "../MainContent/AddClassContent/AddClassContent";
import ArticleContent from "components/MainContent/ArticleContent/ArticleContent";
import PostArticleContent from "../MainContent/PostArticleContent";
import MyProject from "./MyProject";
import MyArticle from "../MainContent/MyArticle";
import CollabInvitation from "./CollabInvitation";
import Beranda from "components/MainContent/BerandaContent/BerandaContent";
const { Content } = Layout;

function Main() {
	return (
		<Content style={{ margin: "16px" }}>
			<div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
				<Switch>
					<Route path="/member/beranda" component={ArticleContent} />
					<Route path="/member/buat-project" exact component={AddClassContent} />
					<Route path="/member/post-artikel" exact component={PostArticleContent} />
					<Route path="/member/project-saya" exact component={MyProject} />
					<Route path="/member/undangan" exact component={CollabInvitation} />
					<Route path="/member/artikel-saya" exact component={MyArticle} />
					<Route path="/admin-dashboard" exact component={Beranda} />
				</Switch>
			</div>
		</Content>
	);
}

export default Main;
