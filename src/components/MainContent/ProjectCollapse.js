import React, { useEffect, useState } from "react";
import { Button, Collapse, Typography, Switch, Row, Col, Space } from "antd";
import { Avatar } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";
import axios from "axios";
import CollabData from "data/ProjectData";

const { Paragraph, Text } = Typography;

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

	// return (
	// 	<div>
	// 		{CollabData.map((data) => {
	// 			return <ProjectCard key={data.id} name={data.nama} date={data.tanggal} description={data.deskripsi} category={data.kategori} />;
	// 		})}
	// 	</div>
	// );
}

function ProjectCard(props) {
	const { name, category, date, description } = props;
	const [ellipsis, setEllipsis] = useState(true);

	const mb = 16;

	console.log(ellipsis);

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
					<Row style={{ marginBottom: mb }}>
						<Col span={6}>Kategori</Col>
						<Col span={1}>:</Col>
						<Col span={17} style={{ fontWeight: "Bold" }}>
							{category}
						</Col>
					</Row>
					<Row style={{ marginBottom: mb }}>
						<Col span={6}>Tanggal Mulai</Col>
						<Col span={1}>:</Col>
						<Col span={17}>{date}</Col>
					</Row>
					<Row style={{ marginBottom: mb }}>
						<Col span={6}>Deskripsi</Col>
						<Col span={1}>:</Col>
						<Col span={17}>
							<Paragraph ellipsis={ellipsis}>{description}</Paragraph>
							<Row>
								<Col span={24} style={{ display: "flex", flexFlow: "row-reverse" }}>
									<button onClick={() => setEllipsis(!ellipsis)}>{ellipsis ? "Read More" : "Read Less"}</button>
								</Col>
							</Row>
						</Col>
					</Row>
					<Row style={{ marginBottom: mb }}>
						<Col span={6}>Kontributor</Col>
						<Col span={1}>:</Col>
						<Col span={17}>
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
						</Col>
					</Row>
				</Panel>
			</Collapse>
		</div>
	);
}

export default ProjectCollapse;
