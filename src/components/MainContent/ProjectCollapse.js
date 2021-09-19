import React, { useState } from "react";
import { Collapse, Typography, Row, Col } from "antd";
import { Avatar } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";
import axios from "axios";
import { useQuery } from "react-query";

const { Paragraph } = Typography;

const { Panel } = Collapse;

async function getProject() {
	const response = await axios.get("project");
	return response;
}

function ProjectCollapse() {
	const { data, status } = useQuery("project", getProject);
	const isiData = data;
	console.log(isiData);
	console.log(status);

	return (
		<div>
			{status === "loading" && <div> Loading Data</div>}
			{status === "error" && <div> Error Fetching Data</div>}
			{status === "success" && (
				<div>
					{isiData.map((isi) => {
						const { id_project, kategori_project, nama_project, tanggal_mulai, deskripsi_project, invited_user_id, collaborator_user_id, admin } = isi;

						return <ProjectCard key={id_project} category={kategori_project} name={nama_project} date={tanggal_mulai} description={deskripsi_project} />;
					})}
				</div>
			)}
		</div>
	);
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
