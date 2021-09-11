import React, { useEffect, useState } from "react";
import { Button, Collapse } from "antd";
import { Avatar } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";
import axios from "axios";

const { Panel } = Collapse;

function ProjectCollapse() {
	const [projects, setProjects] = useState([]);

	const getProject = async () => {
		try {
			const response = await axios.get("project");
			const data = await response.data;
			setProjects(data);
		} catch (e) {
			console.log(e);
			setProjects([]);
		}
	};

	useEffect(() => {
		getProject();
	}, []);

	console.log("Data aps nich?", projects);

	return (
		<div>
			{projects.map((project) => {
				const { id_project, nama_project, deskripsi_project, kategori_project, tanggal_mulai } = project;
				return <ProjectCard key={id_project} name={nama_project} category={kategori_project} date={tanggal_mulai} description={deskripsi_project} />;
			})}
		</div>
	);
}

function ProjectCard(props) {
	const { name, category, date, description } = props;

	return (
		<div>
			<Collapse accordion>
				<Panel
					header={name}
					key="1"
					className=""
					style={{
						marginBottom: 10,
					}}
				>
					<p>
						<b>{category}</b>
					</p>
					<p>{date}</p>
					<p></p>
					<br />
					<p>
						<b>Deskripsi</b> <br />
						{description}
					</p>
					<br />
					<Avatar
						style={{
							backgroundColor: "#f56a00",
						}}
					></Avatar>
					<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
					<Avatar
						style={{
							backgroundColor: "#1890ff",
						}}
						icon={<AntDesignOutlined />}
					/>
					<hr></hr>
					<Button type="primary" shape="round">
						(+) Collaborator
					</Button>{" "}
					<span />
					<Button type="disabled" shape="round">
						(x) Delete
					</Button>
				</Panel>
			</Collapse>
		</div>
	);
}

export default ProjectCollapse;
