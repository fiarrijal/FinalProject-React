import React from "react";
import { Descriptions, Button, Card } from "antd";
import MyArticleData from "../../data/MyArticleData";

function MyArticle() {
	return (
		<div>
			<h2>Artikel Saya</h2>
			{MyArticleData.map((data) => {
				return <MyArticleCard key={data.id} category={data.kategori} title={data.judul} date={data.tanggal} description={data.deskripsi} />;
			})}
		</div>
	);
}

function MyArticleCard(props) {
	const { category, title, date, description } = props;
	return (
		<div>
			<Card style={{ marginBottom: "1.5rem" }}>
				<Descriptions bordered size="small" extra={<Button type="danger">Hapus</Button>}>
					<Descriptions.Item label="Kategori" span={24}>
						{category}
					</Descriptions.Item>
					<Descriptions.Item span={24} label="Judul">
						{title}
					</Descriptions.Item>
					<Descriptions.Item span={24} label="Posting Date">
						{date}
					</Descriptions.Item>
					<Descriptions.Item span={24} label="Deskripsi Project">
						{description}
					</Descriptions.Item>
				</Descriptions>
			</Card>
		</div>
	);
}
export default MyArticle;
