import React, { useState } from "react";
import { Collapse, Typography, Row, Col } from "antd";
import { Avatar } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";

const { Paragraph } = Typography;

const { Panel } = Collapse;

export default function BerandaProjectCard(props) {
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
						<Col span={17} style={{ fontWeight: "Bold" }} data-testid="category">
							{category}
						</Col>
					</Row>
					<Row style={{ marginBottom: mb }}>
						<Col span={6}>Tanggal Mulai</Col>
						<Col span={1}>:</Col>
						<Col span={17} data-testid="date">
							{date}
						</Col>
					</Row>
					<Row style={{ marginBottom: mb }}>
						<Col span={6}>Deskripsi</Col>
						<Col span={1}>:</Col>
						<Col span={17} data-testid="deskripsi">
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
