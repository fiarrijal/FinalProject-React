import React, { useEffect, useState } from "react";
import { Card } from "antd";
import Badge from "components/Badge/Badge";
import axios from "axios";
import { useParams } from "react-router";
import { formatDate } from "data/util";

function Article() {
	const [article, setArticle] = useState([]);
	let { id } = useParams();

	const getArticle = async () => {
		const response = await axios.get(`artikel/${id}`);
		setArticle(response);
	};

	useEffect(() => {
		getArticle();
	});

	return (
		<Card>
			<h1 className="title" style={{ fontSize: "1.75rem", fontWeight: "700" }}>
				{article.judul}
			</h1>
			<div style={{ marginBottom: "12px" }}>
				<Badge bgColor="green" value={article.kategori} />
			</div>
			<div style={{ marginBottom: "12px" }}>
				<span className="tanggal" style={{ color: "grey", fontSize: "0.75rem", marginRight: "12px" }}>
					{formatDate(article.posting_date)}
				</span>
				<span className="author" style={{ color: "grey", fontSize: "0.75rem" }}>
					{article.id_user}
				</span>
			</div>
			<p>{article.isi_artikel}</p>
		</Card>
	);
}

export default Article;
