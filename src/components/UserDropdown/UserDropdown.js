import React from "react";
import { Menu, Dropdown, Space, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { getUserSession } from "data/util";
import "./UserDropdown.css";
import { Link } from "react-router-dom";

export default function UserDropdown() {
	const menus = (
		<Menu>
			<Menu.Item key="1" icon={<ExitToAppIcon />}>
				<Link to="/">Sign Out</Link>
			</Menu.Item>
		</Menu>
	);
	return (
		<Space direction="vertical">
			<Space wrap>
				<Dropdown overlay={menus} placement="bottomRight">
					<div className="header-user">
						<div className="header-user-text">
							<h3 className="user-name">{getUserSession("user").nama_lengkap}</h3>
						</div>
						<div className="header-image-container">
							<Avatar icon={<UserOutlined />} />
						</div>
					</div>
				</Dropdown>
			</Space>
		</Space>
	);
}
