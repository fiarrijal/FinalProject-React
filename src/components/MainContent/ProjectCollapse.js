import React from "react";
// import { Collapse, Typography, Row, Col } from "antd";
// import { Avatar } from "antd";
// import { AntDesignOutlined } from "@ant-design/icons";
import axios from "axios";
import { useQuery } from "react-query";
import BerandaProjectCard from "components/BerandaProjectCard";
import { formatDate } from "data/util";

// const { Paragraph } = Typography;
// const { Panel } = Collapse;

async function getProject() {
	const response = await axios.get("project");
	return response;
}

function ProjectCollapse() {
	const { data, status } = useQuery("project", getProject);
	const isiData = data;

	return (
		<div>
			{status === "loading" && <div> Loading Data</div>}
			{status === "error" && <div> Error Fetching Data</div>}
			{status === "success" && (
				<div>
					{isiData.map((isi) => {
						const { id, kategori_project, nama_project, tanggal_mulai, deskripsi_project } = isi;

						return <BerandaProjectCard key={id} category={kategori_project} name={nama_project} date={formatDate(tanggal_mulai)} description={deskripsi_project} />;
					})}
				</div>
			)}
		</div>
	);
}

export default ProjectCollapse;
