import React from "react";
import { Descriptions, Button, Card, Row, Col } from "antd";
import ProjectData from "../../data/ProjectData";

function CollabInvitation() {
	return (
		<div>
			<h2>Undangan Kolaborasi</h2>
			{ProjectData.map((data) => {
				const { kategori, nama, tanggal, deskripsi, admin, kolaborator } = data;
				return <CollabCard category={kategori} name={nama} date={tanggal} description={deskripsi} admin={admin} collaborator={kolaborator.map((col) => `${col}, `)} />;
			})}
		</div>
	);
}

function CollabCard(props) {
	const { category, name, date, description, admin, collaborator } = props;
	return (
		<Card style={{ marginBottom: "1.5rem" }}>
			<Descriptions bordered size="small" style={{ marginBottom: "1rem" }}>
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
				<Descriptions.Item span={24} label="Admin">
					{admin}
				</Descriptions.Item>
				<Descriptions.Item span={24} label="Kolaborator">
					{collaborator}
				</Descriptions.Item>
			</Descriptions>
			<Row>
				<Col span={8} offset={16} style={{ display: "flex", flexFlow: "row-reverse" }}>
					<Button style={{ backgroundColor: "green", color: "white", border: "none" }}>Bergabung</Button>
				</Col>
			</Row>
		</Card>
	);
}
export default CollabInvitation;
