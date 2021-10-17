import { Descriptions } from "antd";
import axios from "axios";
import { formatDate } from "data/util";

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";

export default function Project() {
	const [project, setProject] = useState([]);
	const { id } = useParams();

	const getProject = async (id) => {
		const response = await axios.get(`project/${id}`);
		setProject(response);
	};

	useEffect(() => {
		getProject(id);
	}, [id]);

	// console.log(project.invited_user_id.length);

	// const listInvited = project.invited_user_id.length !== 0 ? project.invited_user_id : "Tidak ada undangan tertunda ke member lain";
	// const listCollaborator = project.collaborator_user_id.length !== 0 ? (...collaborator_user_id) : "Belum ada kolaborator";

	return (
		<div>
			<Descriptions title={project.nama_project} size="small" bordered column={1} extra={<span>Test</span>}>
				<Descriptions.Item label="Kategori Project">{project.kategori_project}</Descriptions.Item>
				<Descriptions.Item label="Tanggal Mulai">{formatDate(project.tanggal_mulai)}</Descriptions.Item>
				<Descriptions.Item label="Link Trello">{project.link_trello}</Descriptions.Item>
				<Descriptions.Item label="Admin">{project.admin}</Descriptions.Item>
				{/* <Descriptions.Item label="Member yang diundang">{listInvited}</Descriptions.Item> */}
				<Descriptions.Item label="Kontributor">{project.collaborator_user_id}</Descriptions.Item>
				<Descriptions.Item label="Deskripsi">{project.deskripsi_project}</Descriptions.Item>
			</Descriptions>
		</div>
	);
}
