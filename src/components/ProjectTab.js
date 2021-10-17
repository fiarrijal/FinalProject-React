import React, { useState, Fragment } from "react";
import { Route, Link } from "react-router-dom";
import { Menu, Row, Col } from "antd";
import MyProject from "./Layout/MyProject";
import OtherProject from "./Layout/OtherProject";
import Project from "./Project";

function ProjectTab() {
	const [current, setCurrent] = useState("mine");

	const handleClick = (e) => {
		setCurrent(e.current);
	};
	return (
		<Fragment>
			<Row>
				<Col span="24">
					<Menu selectedKeys={current} onClick={handleClick} mode="horizontal">
						<Menu.Item key="mine">
							<Link to="/dashboard/member/project/project-saya">Project Saya</Link>
						</Menu.Item>
						<Menu.Item key="other">
							<Link to="/dashboard/member/project/project-lain">Project Lain</Link>
						</Menu.Item>
					</Menu>
				</Col>
			</Row>
			<div style={{ marginTop: 16 }}>
				<Route path="/dashboard/member/project/project-saya" exact component={MyProject} />
				<Route path="/dashboard/member/project/project-saya/:id" component={Project} />
				<Route path="/dashboard/member/project/project-lain" exact component={OtherProject} />
				<Route path="/dashboard/member/project/project-lain/:id" component={Project} />
			</div>
		</Fragment>
	);
}

export default ProjectTab;
