import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import axios from "axios";
import { useHistory } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import { formatDate } from "data/util";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { toast } from "react-hot-toast";
const { confirm } = Modal;

async function deleteArticle(id) {
	const response = await axios.delete(`artikel/${id}`);
	return response;
}

function MyArticle() {
	const history = useHistory();
	const [article, setArticle] = useState([]);

	async function getArticle() {
		const response = await axios.get("artikel");
		setArticle(response);
	}

	useEffect(() => {
		getArticle();
	}, []);

	//fungsi showConfirm untuk delete data
	function showConfirm(id) {
		confirm({
			title: "Apakah kamu ingin menghapus artikel ini??",
			icon: <ExclamationCircleOutlined />,
			// content: "Some descriptions",
			onOk() {
				// Panggil fungsi delete di sini
				let isi = [...article]; // set seluruh isi data project
				let filtered = isi.filter((data) => data.id !== id);

				//Proses delete
				toast.success(`Artikle berhasil dihapus`);
				setArticle(filtered);
				deleteArticle(id);
			},
			onCancel() {
				console.log("Cancel");
			},
		});
	}

	return (
		<div>
			<div>
				{article.map((isi) => {
					const { id, posting_date, kategori, judul, isi_artikel, id_user } = isi;
					return (
						<ArticleCard
							key={id}
							kategori={kategori}
							judul={judul}
							tanggal={formatDate(posting_date)}
							user={id_user}
							isi_artikel={isi_artikel}
							btn_delete={() => {
								showConfirm(id);
							}}
							btn_edit={() => {
								history.push(`/dashboard/member/post-artikel/${id}`);
							}}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default MyArticle;
