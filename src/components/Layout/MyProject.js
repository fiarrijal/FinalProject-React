import React from "react";
import { Descriptions, Button, Card } from "antd";

function MyProject() {
	return (
		<div>
			<MyProjectCard />
			<MyProjectCard />
			<MyProjectCard />
		</div>
	);
}

function MyProjectCard() {
	return (
		<Card style={{ marginBottom: "1.5rem" }}>
			<Descriptions bordered title="Custom Size" size="small" extra={<Button type="primary">Edit</Button>}>
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
				<Descriptions.Item span={24} label="Link Trello">
					https://trello.com/
				</Descriptions.Item>
				<Descriptions.Item span={24} label="Kolaborator">
					spongebob@gmail.com, patrick@gmail.com
				</Descriptions.Item>
			</Descriptions>
		</Card>
	);
}
export default MyProject;
