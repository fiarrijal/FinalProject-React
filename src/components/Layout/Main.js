import React from "react";
import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";
import AddClassContent from "../../parts/AddClassContent/AddClassContent";
import ArticleContent from "../../parts/ArticleContent/ArticleContent";
import PostArticleContent from "../../parts/PostArticleContent";
import MyProject from "./MyProject";
import CollabInvitation from "./CollabInvitation";
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
				</Switch>
			</div>
		</Content>
	);
}

export default Main;
