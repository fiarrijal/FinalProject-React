import React, { useState } from "react";
import { Table, Tag, Button, Row, Col } from "antd";

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

function BerandaContent() {
	let [filteredInfo, setFilteredInfo] = useState(null);
	let [selectedRowKeys, setSelectedRowKeys] = useState([]);
	// let [loading, setLoading] = useState(false);

	// const start = () => {
	// 	setLoading(true);
	// 	// ajax request after empty completing
	// 	setTimeout(() => {
	// 		setSelectedRowKeys([]);
	// 		setLoading(false);
	// 	}, 1000);
	// };

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
			dataIndex: "key",
			width: 70,
			fixed: "left",
		},
		{
			title: "Tanggal Registrasi",
			dataIndex: "date",
			key: "date",
		},
		{
			title: "Name",
			dataIndex: "name",
			key: "name",
			render: (text) => <a href="/">{text}</a>,
		},
		{
			title: "Topik",
			key: "tags",
			dataIndex: "tags",
			render: (tags) => (
				<>
					{tags.map((tag) => {
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
			dataIndex: "status",
			key: "status",
			filters: [
				{ text: "Menunggu Approval", value: "Menunggu Approval" },
				{ text: "Approved", value: "Approved" },
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
