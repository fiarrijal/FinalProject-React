import React from "react";
import { Descriptions, Button, Card, Space } from "antd";

function ProjectCard(props) {
	const { category, name, date, description, collaborator, link, invited_user_id, onClickDelete, onClickEdit, onClickDetail } = props;
	return (
		<Card style={{ marginBottom: "1.5rem" }}>
			<Descriptions
				bordered
				column={1}
				size="small"
				extra={
					<Space>
						<Button type="primary" onClick={onClickEdit}>
							Edit
						</Button>

						<Button type="danger" onClick={onClickDelete}>
							Delete
						</Button>
						<Button type="danger" onClick={onClickDetail}>
							Detail
						</Button>
					</Space>
				}
			>
				<Descriptions.Item label="Kategori Project" span={1} data-testid="kategori">
					{category}
				</Descriptions.Item>
				<Descriptions.Item span={1} label="Nama Project" data-testid="nama">
					{name}
				</Descriptions.Item>
				<Descriptions.Item span={1} label="Tanggal Mulai" data-testid="tanggal_mulai">
					{date}
				</Descriptions.Item>
				<Descriptions.Item span={1} label="Deskripsi Project" data-testid="deskripsi">
					{description}
				</Descriptions.Item>
				<Descriptions.Item span={1} label="Link Trello" data-testid="link_trello">
					<a href={link} target="_blank" rel="noreferrer">
						{link}
					</a>
				</Descriptions.Item>
				<Descriptions.Item span={1} label="Member yang Kamu Undang">
					{invited_user_id}
				</Descriptions.Item>
				<Descriptions.Item span={1} label="Kolaborator">
					{collaborator}
				</Descriptions.Item>
			</Descriptions>
		</Card>
	);
}
export default ProjectCard;
