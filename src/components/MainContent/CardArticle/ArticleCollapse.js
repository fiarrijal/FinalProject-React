import React from "react";
import { Collapse, Row, Col } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
// import img1 from "assets/images/books.jpeg";
import "./articleCollapse.css";
import axios from "axios";
import { useQuery } from "react-query";

const { Panel } = Collapse;

async function getArticle() {
	const response = await axios.get("artikel");
	return response;
}

function ArticleCollapse() {
	const { data, status } = useQuery("artikel", getArticle);
	const isiData = data;
	console.log(isiData);
	console.log(status);

	return (
		<div>
			{status === "loading" && <div> Loading Data</div>}
			{status === "error" && <div> Error Fetching Data</div>}
			{status === "success" && (
				<div>
					{isiData.map((isi) => {
						const { id_artikel, posting_date, kategori, judul, isi_artikel, id_user } = isi;
						return <CardArticle key={id_artikel} kategori={kategori} judul={judul} tanggal={posting_date} user={id_user} isi_artikel={isi_artikel} />;
					})}
				</div>
			)}
		</div>
	);
}

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
				<Panel className="" header={jdlArtikel()}>
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
export default ArticleCollapse;
