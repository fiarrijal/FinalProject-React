import React from "react";
import ArticleContent from "../../parts/ArticleContent/ArticleContent";

import Sidebar from "../../parts/sidebar/Sidebar";
import "./ArticlePage.css";

class ArticlePage extends React.Component {
	render() {
		return <Sidebar titles="Beranda" content={<ArticleContent />} />;
	}
}

export default ArticlePage;
