import React from "react";
import { Descriptions, Button, Card } from "antd";
import axios from "axios";
import { useQuery } from "react-query";

async function getArticle() {
	const response = await axios.get("artikel");
	return response;
}

function deleteArtikel(id) {
	axios.delete("artikel" + id).then((res) => {
		console.log(res);
		getArticle();
	});
}

function MyArticle() {
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
						const { id, posting_date, kategori, judul, isi_artikel, id_user } = isi;
						return <MyArticleCard key={id} kategori={kategori} judul={judul} tanggal={posting_date} user={id_user} isi_artikel={isi_artikel} btn_click={() => {}} />;
					})}
				</div>
			)}
		</div>
	);
}

function MyArticleCard(props) {
	const { id_artikel, kategori, judul, tanggal, isi_artikel } = props;

	return (
		<div>
			<Card style={{ marginBottom: "1.5rem" }}>
				<Descriptions
					bordered
					size="small"
					extra={
						<Button type="danger" onClick={props.btn_click}>
							Hapus
						</Button>
					}
				>
					<Descriptions.Item span={24} label="Kategori">
						{kategori}
					</Descriptions.Item>
					<Descriptions.Item span={24} label="Judul">
						{judul}
					</Descriptions.Item>
					<Descriptions.Item span={24} label="Posting Date">
						{tanggal}
					</Descriptions.Item>
					<Descriptions.Item span={24} label="Deskripsi Project">
						{isi_artikel}
					</Descriptions.Item>
				</Descriptions>
			</Card>
		</div>
	);
}
export default MyArticle;
