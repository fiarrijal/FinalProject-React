import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { Link, useHistory } from "react-router-dom";
import { UsergroupAddOutlined } from "@ant-design/icons";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Logo from "../../assets/images/logo.svg";
const { Sider } = Layout;

function LogOut() {
	const history = useHistory();

	return <div onClick={() => history.push("/")}>Sign Out</div>;
}

function SidebarAdmin() {
	const [collapsed, setCollapsed] = useState(false);

	const onCollapse = (collapsed) => {
		collapsed ? setCollapsed(true) : setCollapsed(false);
	};

	return (
		<Sider theme="light" width={240} collapsible collapsed={collapsed} onCollapse={onCollapse} className="sidebar">
			<div className="logo">
				<img src={Logo} alt="logo" className="logo-image" style={{ width: "50%" }} />
			</div>
			<Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
				<Menu.Item key="1" icon={<UsergroupAddOutlined />} className="menu-item">
					<Link to="/admin">Enrollment Request</Link>
				</Menu.Item>
				<Menu.Item key="2" icon={<ExitToAppIcon />}>
					<LogOut />
				</Menu.Item>
			</Menu>
		</Sider>
	);
}

export default SidebarAdmin;
