import { Route, Switch } from "react-router-dom";
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
const { Content } = Layout;

function App() {
	if (getUserSession() === null) {
		return (
			<div>
				<Route path="/" exact component={LoginMember} />
				<Route path="/register" exact component={Register} />
			</div>
		);
	} else {
		return (
			<div>
				<Layout style={{ minHeight: "100vh" }}>
					<Sidebar />
					<Layout className="site-layout">
						<Head />
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
						<FooterComponent />
					</Layout>
				</Layout>
			</div>
		);
	}
}

export default App;
