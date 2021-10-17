import React, { useState, useEffect } from "react";
import axios from "axios";
import { formatDate, getUserSession } from "data/util";
import ProjectCard from "./ProjectCard";

function OtherProject() {
	const [data, setData] = useState([]);

	async function getOtherProject() {
		const response = await axios.get("project");
		setData(response);
	}

	useEffect(() => {
		getOtherProject();
	}, []);

	const filterUser = data.filter((value) => {
		return value.collaborator_user_id.includes(getUserSession("user").username);
	});

	return (
		<div>
			{filterUser === undefined ? (
				<div>Kamu belum bergabung dalam suatu project</div>
			) : (
				<div>
					{filterUser.map((filtered) => {
						const { id, kategori_project, nama_project, tanggal_mulai, link_trello, deskripsi_project, collaborator_user_id, admin } = filtered;
						return (
							<ProjectCard
								key={id}
								category={kategori_project}
								name={nama_project}
								date={formatDate(tanggal_mulai)}
								description={deskripsi_project}
								link={link_trello}
								admin={admin}
								collaborator={collaborator_user_id.map((col) => `${col}, `)}
							/>
						);
					})}
				</div>
			)}
		</div>
	);
}

export default OtherProject;
