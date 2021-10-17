import { Route, Switch, Redirect } from "react-router-dom";
import "antd/dist/antd.css";
import "./App.css";
import { Layout } from "antd";
import Login from "./pages/Login/Login";
import Register from "pages/Login/Register";
import Sidebar from "components/Layout/Sidebar";
import Head from "components/Layout/Head";
import FooterComponent from "components/Layout/FooterComponent";
import AddClassContent from "components/MainContent/AddClassContent/AddClassContent";
import ArticleContent from "components/MainContent/ArticleContent/ArticleContent";
import PostArticleContent from "components/MainContent/PostArticleContent";
import MyArticle from "components/MainContent/MyArticle";
import CollabInvitation from "components/Layout/CollabInvitation";
import Beranda from "components/MainContent/BerandaContent/BerandaContent";
import PrivateRoute from "data/PrivateRoute";
import { getUserSession } from "data/util";
import ArticleEdit from "components/EditDrawer/ArticleEdit";
import ProjectTab from "components/ProjectTab";
import ArticleList from "components/ArticleList";
import Article from "components/Article";
import { Helmet } from "react-helmet";

const { Content } = Layout;

function App() {
	return (
		<div>
			<Helmet>
				<title>Bank Innovation Co-Create</title>
			</Helmet>
			{getUserSession("user") === null ? <Redirect to="/Login" /> : <Redirect to="/dashboard" />}
			<Route path="/" exact>
				<Redirect to="/login" />
			</Route>
			<Route path="/login" component={Login} />
			<Route path="/register" exact component={Register} />
			<Route path="/edit" exact component={ArticleEdit} />
			<Route path="/article" exact component={ArticleList} />
			<PrivateRoute path="/dashboard">
				<Layout style={{ minHeight: "100vh" }}>
					<Sidebar />
					<Layout className="site-layout">
						<Head />

						<Content style={{ margin: "16px" }}>
							<div className="site-layout-background" style={{ padding: 24, minHeight: 525 }}>
								{getUserSession("user")?.role_id === 1 ? <Redirect to="/dashboard/admin" /> : <Redirect to="/dashboard/member" />}
								<Switch>
									<Route path="/dashboard/admin" exact component={Beranda} />
									<Route path="/dashboard/member/" exact component={ArticleContent} />
									<Route path="/dashboard/member/buat-project" exact component={AddClassContent} />
									<Route path="/dashboard/member/buat-project/:id" exact component={AddClassContent} />
									<Route path="/dashboard/member/post-artikel" exact component={PostArticleContent} />
									<Route path="/dashboard/member/post-artikel/:id" exact component={PostArticleContent} />
									<Route path="/dashboard/member/project" component={ProjectTab} />
									<Route path="/dashboard/member/undangan" exact component={CollabInvitation} />
									<Route path="/dashboard/member/artikel-saya" exact component={MyArticle} />
									<Route path="/dashboard/member/artikel/:id" exact component={Article} />
								</Switch>
							</div>
						</Content>
						<FooterComponent />
					</Layout>
				</Layout>
			</PrivateRoute>
		</div>
	);
}

export default App;
