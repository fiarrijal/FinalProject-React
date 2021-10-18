import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import axios from "axios";
import { formatDate, getUserSession } from "data/util";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import toast from "react-hot-toast";
import FormEdit from "components/FormEdit";
import { useHistory } from "react-router-dom";
import ProjectCard from "./ProjectCard";

const { confirm } = Modal;

async function deleteProject(id) {
	const response = await axios.delete(`project/${id}`);
	return response;
}

function MyProject() {
	const [project, setProject] = useState([]);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const handleOk = () => setIsModalVisible(false);
	const handleCancel = () => setIsModalVisible(false);
	let history = useHistory();

	async function getOwnProject() {
		const response = await axios.get("project", {
			params: {
				admin: getUserSession("user").username,
			},
		});
		setProject(response);
	}

	useEffect(() => {
		getOwnProject();
	}, []);

	//fungsi showConfirm untuk delete data
	function showConfirm(id) {
		confirm({
			title: "Do you want to delete these items?",
			icon: <ExclamationCircleOutlined />,
			content: "Some descriptions",
			onOk() {
				// Panggil fungsi delete di sini
				let isi = [...project]; // set seluruh isi data project
				let filtered = isi.filter((data) => data.id !== id);

				//Proses delete
				toast.success(`Project berhasil dihapus`);
				setProject(filtered);
				deleteProject(id);
			},
			onCancel() {
				console.log("INi mau dicancel");
			},
		});
	}

	//fungsi edit project
	// function editProject(id) {
	// 	console.log(`Ini id nya : `, id);
	// }

	return (
		<div>
			{project.length <= 0 ? (
				<h4>Kamu belum memiliki project</h4>
			) : (
				<div>
					{project.map((filtered) => {
						const { id, kategori_project, nama_project, tanggal_mulai, link_trello, deskripsi_project, invited_user_id, collaborator_user_id } = filtered;
						return (
							<ProjectCard
								key={id}
								category={kategori_project}
								name={nama_project}
								date={formatDate(tanggal_mulai)}
								description={deskripsi_project}
								link={link_trello}
								invited_user_id={invited_user_id.map((value) => `${value}, `)}
								collaborator={collaborator_user_id.map((value) => `${value}, `)}
								onClickDelete={() => {
									showConfirm(id);
								}}
								onClickEdit={() => history.push(`/dashboard/member/buat-project/${id}`)}
								onClickDetail={() => history.push(`/dashboard/member/project/project-saya/${id}`)}
							/>
						);
					})}
					<ModalEdit visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
						<FormEdit />
					</ModalEdit>
				</div>
			)}
		</div>
	);
}

function ModalEdit(props) {
	return (
		<Modal title={props.title} visible={props.visible} onOk={props.handleOk} onCancel={props.onCancel}>
			{props.children}
		</Modal>
	);
}

export default MyProject;
