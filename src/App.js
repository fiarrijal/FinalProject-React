import "./App.css";

import AddClass from "./pages/addClass/AddClass";
import ArticlePage from "./pages/articlePage/ArticlePage";
import ProjectHome from "./pages/Home/ProjectHome";
import LoginAdmin from "./pages/Login/LoginAdmin";
import LoginMember from "./pages/Login/LoginMember";
import Register from "./pages/Login/Register";

function App() {
	return (
		<div className="App">
			{/* <AddClass /> */}
			<LoginMember></LoginMember>
			{/* <LoginAdmin /> */}
			{/* <ArticlePage /> */}
			{/* <Register /> */}
			{/* <ProjectHome /> */}
		</div>
	);
}

export default App;
