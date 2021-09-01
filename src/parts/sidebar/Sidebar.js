import React from "react";
import "./sidebar.css";
import { Layout, Menu } from "antd";
import { HomeFilled, PlusSquareFilled, FolderFilled } from "@ant-design/icons";
import EmailIcon from "@material-ui/icons/Email";
import CreateIcon from "@material-ui/icons/Create";
import NoteIcon from "@material-ui/icons/Note";
import Logo from "../../assets/images/logo.svg";

const { Sider } = Layout;

class Sidebar extends React.Component {
	state = {
		collapsed: false,
	};

	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	};

	render() {
		return (
			<Sider trigger={null} collapsible collapsed={this.state.collapsed} className="sidebar" width="240px" theme="light">
				<div className="logo">
					<img src={Logo} alt="" className="logo-image" />
				</div>
				<Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
					<Menu.Item key="1" icon={<HomeFilled />} className="menu-item">
						Beranda
					</Menu.Item>
					<Menu.Item key="2" icon={<PlusSquareFilled />}>
						Buat Project Baru
					</Menu.Item>
					<Menu.Item key="3" icon={<FolderFilled />}>
						Project Saya
					</Menu.Item>
					<Menu.Item key="4" icon={<EmailIcon style={{ fontSize: 16 }} />}>
						Undangan Kolaborasi
					</Menu.Item>
					<Menu.Item key="5" icon={<CreateIcon style={{ fontSize: 16 }} />}>
						Post Artikel
					</Menu.Item>
					<Menu.Item key="6" icon={<NoteIcon style={{ fontSize: 16 }} />}>
						Artikel Saya
					</Menu.Item>
				</Menu>
			</Sider>
		);
	}
}

export default Sidebar;
