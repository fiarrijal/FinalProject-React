import React, { useState, useEffect } from "react";
import { Collapse, Row, Col } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import img1 from "assets/images/books.jpeg";
import "./articleCollapse.css";
import axios from "axios";

const { Panel } = Collapse;

function CardArticle(props) {
	const jdlArtikel = () => (
		<Row>
			<Col flex="auto">
				<h5 style={{ color: "grey" }}>{props.kategori}</h5>
				<h3 className="jdl-ar">{props.judul}</h3>
				<hr></hr>
				<h5 style={{ color: "grey" }}>{props.tanggal}</h5>
				<h5 style={{ color: "grey" }}>{props.user}</h5>
			</Col>
			<Col flex="10px">
				<span>
					<DeleteOutlined
						style={{ fontSize: "20px" }}
						onClick={(event) => {
							event.stopPropagation();
						}}
					/>
				</span>
			</Col>
		</Row>
	);

	return (
		<div className="card-colaps" style={{ marginBottom: "1.5rem" }}>
			<Collapse className="box-card" defaultActiveKey={["1"]} expandIconPosition="right">
				<Panel className="" header={jdlArtikel()} key={props.key}>
					<Row>
						<Col flex="1 1 200px">{props.isi_artikel}</Col>
						<Col flex="0 1 300px">
							<img className="myImage" src={props.image} alt="image1" />
						</Col>
					</Row>
				</Panel>
			</Collapse>
		</div>
	);
}

function ArticleCollapse() {
	const [article, setArticle] = useState([]);

	const getArticle = async () => {
		try {
			const response = await axios.get("list_artikel");
			const data = response.data;
			setArticle(data);
		} catch (error) {
			console.log(error);
			setArticle([]);
		}
	};

	useEffect(() => {
		getArticle();
	}, []);

	console.log(`ada data apa nich?`, article);

	return (
		<div>
			{article.map((data) => {
				return <CardArticle key={data.id_artikel} kategori={data.kategori} judul={data.judul} tanggal={data.posting_date} user={data.admin} isi_artikel={data.isi_artikel} />;
			})}
		</div>
	);
}
export default ArticleCollapse;
