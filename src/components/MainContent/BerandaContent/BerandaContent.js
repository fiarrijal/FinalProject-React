import React, { useState } from "react";
import { Table, Tag, Button, Row, Col } from "antd";
import axios from "axios";
import { useQuery } from "react-query";
import { useEffect } from "react";

function getDataUser() {
	const response = axios.get("user");
	return response;
}

function BerandaContent() {
	let [filteredInfo, setFilteredInfo] = useState(null);
	let [selectedRowKeys, setSelectedRowKeys] = useState([]);

	// fetching user data
	const { data, status } = useQuery("user", getDataUser);

	// Ganti param object "id" ke "key" agar dapat select per row di table
	let dataMap = [];
	if (status === "success") {
		let i = 0;
		dataMap = data.map((isi) => {
			const { id: key, tanggal_registrasi, nama_lengkap, username, password, topik_diminati, enrollment_status, role_id } = isi;
			const newObj = { key, tanggal_registrasi, nama_lengkap, username, password, topik_diminati, enrollment_status, role_id };
			return newObj;
		});
	}

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
			<Table rowSelection={rowSelection} columns={columns} dataSource={dataMap} onChange={handleChange} />
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
