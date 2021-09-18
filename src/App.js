import { Route, Switch, Redirect } from "react-router-dom";
import "antd/dist/antd.css";
import "./App.css";
import { Layout } from "antd";
import LoginMember from "./pages/Login/LoginMember";
import Register from "pages/Login/Register";
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
	return (
		<div>
			<Route path="/" exact>
				<Redirect to="/login" />
			</Route>
			<Route path="/login" component={LoginMember} />
			<Route path="/register" exact component={Register} />
			<Route path="/dashboard">
				<Layout style={{ minHeight: "100vh" }}>
					<Sidebar />
					<Layout className="site-layout">
						<Head />
						<Content style={{ margin: "16px" }}>
							<div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
								<Switch>
									<Route path="/dashboard/member/beranda" component={ArticleContent} />
									<Route path="/dashboard/member/buat-project" exact component={AddClassContent} />
									<Route path="/dashboard/member/post-artikel" exact component={PostArticleContent} />
									<Route path="/dashboard/member/project-saya" exact component={MyProject} />
									<Route path="/dashboard/member/undangan" exact component={CollabInvitation} />
									<Route path="/dashboard/member/artikel-saya" exact component={MyArticle} />
									<Route path="/dashboard/admin/" exact component={Beranda} />
								</Switch>
							</div>
						</Content>
						<FooterComponent />
					</Layout>
				</Layout>
			</Route>{" "}
		</div>
	);
}

export default App;
