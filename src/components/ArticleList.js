import { Card, Space } from "antd";
import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import { formatDate } from "data/util";
import Badge from "components/Badge/Badge";
import { Fragment } from "react";

const getArticle = async () => {
	const response = await axios.get("artikel");
	return response;
};

function ArticleList() {
	const { data, status } = useQuery("artikel", getArticle);
	let history = useHistory();

	return (
		<div>
			{status === "loading" && <div> Loading Data</div>}
			{status === "error" && <div> Error Fetching Data</div>}
			{status === "success" && (
				<Space wrap>
					{data.map((item) => {
						let color = "red";
						if (item.kategori === "Go Green") {
							color = "green";
						}
						if (item.kategori === "Pengembangan Teknologi") {
							color = "blue";
						}
						if (item.kategori === "Sosial & Kemanusiaan") {
							color = "blueviolet";
						}

						return (
							<ArticleCard
								key={item.id}
								moveTo={() => history.push(`/dashboard/member/artikel/${item.id}`)}
								judul={item.judul}
								tanggal={formatDate(item.posting_date)}
								kategori={item.kategori}
								isi_artikel={item.isi_artikel}
								user={item.id_user}
								badge_color={color}
							/>
						);
					})}
				</Space>
			)}
		</div>
	);
}

function ArticleCard(props) {
	return (
		<Card
			style={{ width: 500 }}
			title={
				<Fragment>
					<span to="/dashboard/member/artikel/" style={{ fontWeight: 700, color: "black", cursor: "" }} onClick={props.moveTo}>
						{props.judul}
					</span>
				</Fragment>
			}
			size="small"
		>
			<Badge bgColor={props.badge_color} value={props.kategori} />
			<p style={{ marginTop: 12 }}>{props.isi_artikel.substr(0, 100)}...</p>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<span style={{ color: "grey", fontSize: "0.75rem" }}>{props.user}</span>
				<span style={{ color: "grey", fontSize: "0.75rem" }}>{props.tanggal}</span>
			</div>
		</Card>
	);
}

export default ArticleList;
