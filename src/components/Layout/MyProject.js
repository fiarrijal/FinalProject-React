import React from "react";
import { Descriptions, Button, Card } from "antd";
import ProjectData from "../../data/ProjectData";

function MyProject() {
	return (
		<div>
			<h2>Project Saya</h2>
			{ProjectData.filter((data) => data.admin === `Yusuf`).map((filtered) => {
				const { kategori, nama, tanggal, deskripsi, linkTrello, kolaborator } = filtered;
				return <MyProjectCard category={kategori} name={nama} date={tanggal} description={deskripsi} link={linkTrello} collaborator={kolaborator.map((col) => `${col}, `)} />;
			})}
		</div>
	);
}

function MyProjectCard(props) {
	const { category, name, date, description, collaborator, link } = props;
	return (
		<Card style={{ marginBottom: "1.5rem" }}>
			<Descriptions bordered size="small" extra={<Button type="primary">Edit</Button>}>
				<Descriptions.Item label="Kategori Project" span={24}>
					{category}
				</Descriptions.Item>
				<Descriptions.Item span={24} label="Nama Project">
					{name}
				</Descriptions.Item>
				<Descriptions.Item span={24} label="Tanggal Mulai">
					{date}
				</Descriptions.Item>
				<Descriptions.Item span={24} label="Deskripsi Project">
					{description}
				</Descriptions.Item>
				<Descriptions.Item span={24} label="Link Trello">
					{link}
				</Descriptions.Item>
				<Descriptions.Item span={24} label="Kolaborator">
					{collaborator}
				</Descriptions.Item>
			</Descriptions>
		</Card>
	);
}
export default MyProject;
