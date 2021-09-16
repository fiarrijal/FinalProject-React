import React, { useState } from "react";
import { Table, Tag, Button, Row, Col } from "antd";
import axios from "axios";
import { useQuery } from "react-query";

const data = [
	{
		key: "1",
		name: "John Brown",
		date: "2014-12-24 23:12:00",
		status: "Menunggu Approval",
		tags: ["Go Green"],
	},
	{
		key: "2",
		name: "Jim Green",
		date: "2014-12-24 23:12:00",
		status: "Menunggu Approval",
		tags: ["Pengembangan Teknologi"],
	},
	{
		key: "3",
		name: "Joe Black",
		date: "2014-12-24 23:12:00",
		status: "Approved",
		tags: ["Sosial & Kemanusiaan"],
	},
	{
		key: "4",
		name: "Junary Ahmad",
		date: "2014-12-24 23:12:00",
		status: "Approved",
		tags: ["Sosial & Kemanusiaan"],
	},
];

function getDataUser() {
	const response = axios.get("user");
	return response;
}

function BerandaContent() {
	// fetching user data
	const { data, status } = useQuery("user", getDataUser);
	console.table(data);

	let [filteredInfo, setFilteredInfo] = useState(null);
	let [selectedRowKeys, setSelectedRowKeys] = useState([]);

	const onSelectChange = (selectedRowKeys) => {
		console.log("selectedRowKeys changed: ", selectedRowKeys);
		setSelectedRowKeys(selectedRowKeys);
	};

	const handleChange = (pagination, filters) => {
		// console.log('Various parameters', pagination, filters, sorter);
		setFilteredInfo(filters);
	};

	const rowSelection = {
		selectedRowKeys,
		onChange: onSelectChange,
	};
	// const hasSelected = selectedRowKeys.length > 0;

	filteredInfo = filteredInfo || {};
	const columns = [
		{
			title: "No",
			width: 70,
			fixed: "left",
			render: (data = data) => {
				for (let i = 0; i <= data.length; i++) {
					<div>{i}</div>;
				}
			},
		},
		{
			title: "Tanggal Registrasi",
			dataIndex: "tanggal_registrasi",
			key: "tanggal_registrasi",
		},
		{
			title: "Nama",
			dataIndex: "nama_lengkap",
			key: "nama_lengkap",
		},
		{
			title: "Topik",
			key: "topik_diminati",
			dataIndex: "topik_diminati",
			render: (topik_diminati) => (
				<>
					{topik_diminati.map((tag) => {
						let color = "volcano";
						if (tag === "Go Green") {
							color = "green";
						}
						if (tag === "Pengembangan Teknologi") {
							color = "geekblue";
						}
						return (
							<Tag color={color} key={tag}>
								{tag.toUpperCase()}
							</Tag>
						);
					})}
				</>
			),
		},
		{
			title: "Status",
			dataIndex: "enrollment_status",
			key: "enrollment_status",
			filters: [
				{ text: "Menunggu Approval", value: "0" },
				{ text: "Approved", value: "1" },
			],
			filteredValue: filteredInfo.status || null,
			onFilter: (value, record) => record.status.includes(value),
			ellipsis: true,
		},
	];

	return (
		<div>
			<h1>Enrollment Request</h1>
			<Table rowSelection={rowSelection} columns={columns} dataSource={data} onChange={handleChange} />
			<Row>
				<Col span={24} style={{ display: "flex", flexFlow: "row-reverse" }}>
					<Button type="primary" style={{ marginBottom: 16, width: "100%" }}>
						Approve
					</Button>
				</Col>
			</Row>
		</div>
	);
}

export default BerandaContent;
