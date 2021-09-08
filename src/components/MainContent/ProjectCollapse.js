import React from "react";
import { Button, Collapse } from "antd";
import { Avatar } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";
import ProjectData from "data/ProjectData";

const { Panel } = Collapse;

function ProjectCollapse() {
	return (
		<div>
			{ProjectData.map((data) => {
				const { id, kategori, nama, tanggal, deskripsi } = data;
				return <ProjectCard key={id} name={nama} category={kategori} date={tanggal} description={deskripsi} />;
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
