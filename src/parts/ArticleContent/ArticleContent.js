import React, { useState } from "react";
import CardArticle from "../../components/CardArticle/CardArticle";
import { SearchOutlined, MailOutlined, AppstoreOutlined } from "@ant-design/icons";
import { Button, Row, Col, Menu, Input } from "antd";
import { Link, Route } from "react-router-dom";
import ProjectCollapse from "../ProjectCollapse/ProjectCollapse";

const { Search } = Input;

function ArticleContent() {
	const [current, setCurrent] = useState("mail");

	const handleClick = (e) => {
		console.log("click ", e);
		setCurrent(e.key);
	};
	return (
		<div>
			<Row>
				<Col span={6}>
					<Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
						<Menu.Item key="article" icon={<MailOutlined />}>
							<Link to="/member/beranda/artikel">Artikel</Link>
						</Menu.Item>
						<Menu.Item key="project" icon={<AppstoreOutlined />}>
							<Link to="/member/beranda/project">Project</Link>
						</Menu.Item>
					</Menu>
				</Col>
				<Col span={8} offset={10}>
					{/* <Button type="primary" shape="round">
						New Article
					</Button> */}
					<Search placeholder="input search text" onSearch={(value) => console.log(value)} enterButton />
				</Col>
			</Row>

			<div style={{ paddingTop: "2rem" }}>
				<Route path="/member/beranda/artikel" exact component={CardArticle} />

				<Route path="/member/beranda/project" exact component={ProjectCollapse} />
			</div>
		</div>
	);
}

export default ArticleContent;
