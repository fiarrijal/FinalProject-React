import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AddClassContent from "../../parts/AddClassContent/AddClassContent";
import ArticleContent from "../../parts/ArticleContent/ArticleContent";
import Sidebar from "../../parts/sidebar/Sidebar";
import LoginMember from "../Login/LoginMember";

function DashboardMember() {
	return (
		<BrowserRouter>
			<div>
				<Sidebar
					titles="Buat Kelas Baru"
					content={
						<div>
							<Route path="/member/beranda-artikel" exact component={ArticleContent} />
							<Route path="/member/buat-project" exact component={AddClassContent} />
							{/* <Route path="/member/project-saya" exact component={} />
							<Route path="/member/undangan" exact component={} />
							<Route path="/member/post-artikel" exact component={} />
							<Route path="/member/artikel-saya" exact component={} /> */}
						</div>
					}
				/>
			</div>
		</BrowserRouter>
	);
}

export default DashboardMember;
