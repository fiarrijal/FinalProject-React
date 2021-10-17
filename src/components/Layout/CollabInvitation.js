import React, { useState, useEffect } from "react";
import { Descriptions, Button, Card, Row, Col, Space } from "antd";
import axios from "axios";
import { formatDate, getUserSession } from "data/util";
import toast from "react-hot-toast";

async function joinProject(id, data) {
	const response = await axios.patch(`project/${id}`, data);
	return response;
}

function CollabInvitation() {
	const [isUpdate, setIsUpdate] = useState(false);

	// Untuk menampung data project yg difetch melalui axios
	const [data, setData] = useState([]);

	//Fungsi untuk refetch data project melalui useEffect
	const toggleUpdate = () => {
		setIsUpdate(!isUpdate);
	};

	// Fetch data project
	const getProject = async () => {
		const response = await axios.get("project");
		setData(response);
	};
	useEffect(() => {
		getProject();
	}, [isUpdate]);

	// Filter data yang invited_user_id nya adalah username yg login
	const filtered = data.filter((value) => {
		return value.invited_user_id.includes(getUserSession("user").username);
	});

	console.log(filtered);
	return (
		<div>
			<h2>Undangan Kolaborasi</h2>
			{filtered.length === 0 ? (
				<span>Anda tidak memiliki undangan project</span>
			) : (
				filtered.map((value) => {
					const { id, kategori_project, nama_project, tanggal_mulai, deskripsi_project, admin, collaborator_user_id, invited_user_id } = value;
					const indexNum = invited_user_id.indexOf(getUserSession("user").username);
					return (
						<CollabCard
							key={id}
							category={kategori_project}
							name={nama_project}
							date={formatDate(tanggal_mulai)}
							description={deskripsi_project}
							admin={admin}
							collaborator={collaborator_user_id.length > 0 ? collaborator_user_id.map((col) => `${col}, `) : `Belum ada kontributor`}
							onAccept={() => {
								joinProject(value.id, {
									invited_user_id: [...invited_user_id.slice(0, indexNum), ...invited_user_id.slice(indexNum + 1)],
									collaborator_user_id: collaborator_user_id.concat(getUserSession("user").username),
								});
								toast.success(`Anda bergabung dalam project ${nama_project}`);
								toggleUpdate();
							}}
							onDeny={() => {
								joinProject(value.id, {
									invited_user_id: [...invited_user_id.slice(0, indexNum), ...invited_user_id.slice(indexNum + 1)],
								});
								toast.success(`Anda menolak bergabung dalam project ${nama_project}`);
								toggleUpdate();
							}}
						/>
					);
				})
			)}
		</div>
	);
}

function CollabCard(props) {
	const { category, name, date, description, admin, collaborator, onAccept, onDeny } = props;
	return (
		<Card style={{ marginBottom: "1.5rem" }}>
			<Descriptions bordered column={1} size="small" style={{ marginBottom: "1rem" }}>
				<Descriptions.Item label="Kategori Project" span={1}>
					{category}
				</Descriptions.Item>
				<Descriptions.Item span={1} label="Nama Project">
					{name}
				</Descriptions.Item>
				<Descriptions.Item span={1} label="Tanggal Mulai">
					{date}
				</Descriptions.Item>
				<Descriptions.Item span={1} label="Deskripsi Project">
					{description}
				</Descriptions.Item>
				<Descriptions.Item span={1} label="Admin">
					{admin}
				</Descriptions.Item>
				<Descriptions.Item span={1} label="Kolaborator">
					{collaborator}
				</Descriptions.Item>
			</Descriptions>
			<Row>
				<Col span={8} offset={16} style={{ display: "flex", flexFlow: "row-reverse" }}>
					<Space>
						<Button type="danger" onClick={onDeny}>
							Tolak
						</Button>
						<Button style={{ backgroundColor: "green", color: "white", border: "none" }} onClick={onAccept}>
							Bergabung
						</Button>
					</Space>
				</Col>
			</Row>
		</Card>
	);
}
export default CollabInvitation;
