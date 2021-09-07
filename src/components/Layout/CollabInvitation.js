import React from "react";
import { Descriptions, Button, Card, Row, Col } from "antd";

function CollabInvitation() {
	return (
		<div>
			<h2>Undangan Kolaborasi</h2>
			<CollabCard />
		</div>
	);
}

function CollabCard() {
	return (
		<Card style={{ marginBottom: "1.5rem" }}>
			<Descriptions bordered size="small" style={{ marginBottom: "1rem" }}>
				<Descriptions.Item label="Kategori Project" span={24}>
					Sosial & Kemanusiaan
				</Descriptions.Item>
				<Descriptions.Item span={24} label="Nama Project">
					Bangun Sekolah Gratis
				</Descriptions.Item>
				<Descriptions.Item span={24} label="Tanggal Mulai">
					17 Juli 2021
				</Descriptions.Item>
				<Descriptions.Item span={24} label="Deskripsi Project">
					Sekolah merupakan ......
				</Descriptions.Item>
				<Descriptions.Item span={24} label="Admin">
					Plankton
				</Descriptions.Item>
				<Descriptions.Item span={24} label="Kolaborator">
					spongebob@gmail.com, patrick@gmail.com
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
