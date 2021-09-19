import React, { useState } from "react";
import { Descriptions, Button, Card, Space } from "antd";
import axios from "axios";
import { useQuery } from "react-query";
import { useHistory } from "react-router-dom";
import { Fragment } from "react";

async function getArticle() {
	const response = await axios.get("artikel");
	return response;
}

// function deleteArtikel(id) {
// 	axios.delete("artikel" + id).then((res) => {
// 		console.log(res);
// 		getArticle();
// 	});
// }

async function deleteArticle(id) {
	const response = await axios.delete(`artikel/${id}`);
	return response;
}

function MyArticle() {
	const history = useHistory();
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
						return (
							<Fragment>
								<MyArticleCard
									key={id}
									kategori={kategori}
									judul={judul}
									tanggal={posting_date}
									user={id_user}
									isi_artikel={isi_artikel}
									btn_click={() => {
										deleteArticle(id);
										getArticle();
									}}
								/>
							</Fragment>
						);
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
						<Space>
							<Button type="primary">Edit</Button>
							<Button type="danger" onClick={props.btn_click}>
								Hapus
							</Button>
						</Space>
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
