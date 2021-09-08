import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { Link, useHistory } from "react-router-dom";
import { HomeFilled, PlusSquareFilled, FolderFilled } from "@ant-design/icons";
import EmailIcon from "@material-ui/icons/Email";
import CreateIcon from "@material-ui/icons/Create";
import NoteIcon from "@material-ui/icons/Note";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Logo from "../../assets/images/logo.svg";
const { Sider } = Layout;

function LogOut() {
	const history = useHistory();

	return <div onClick={() => history.push("/")}>Sign Out</div>;
}

function Sidebar() {
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
				<Menu.Item key="1" icon={<HomeFilled />} className="menu-item">
					<Link to="/member/beranda/">Beranda</Link>
				</Menu.Item>
				<Menu.Item key="2" icon={<PlusSquareFilled />}>
					<Link to="/member/buat-project">Buat Project Baru</Link>
				</Menu.Item>
				<Menu.Item key="3" icon={<FolderFilled />}>
					<Link to="/member/project-saya">Project Saya</Link>
				</Menu.Item>
				<Menu.Item key="4" icon={<EmailIcon style={{ fontSize: 16 }} />}>
					<Link to="/member/undangan">Undangan Kolaborasi </Link>
				</Menu.Item>
				<Menu.Item key="5" icon={<CreateIcon style={{ fontSize: 16 }} />}>
					<Link to="/member/post-artikel">Post Artikel</Link>
				</Menu.Item>
				<Menu.Item key="6" icon={<NoteIcon style={{ fontSize: 16 }} />}>
					<Link to="/member/artikel-saya">Artikel Saya </Link>
				</Menu.Item>
				<Menu.Item key="7" icon={<ExitToAppIcon style={{ fontSize: 16 }} />}>
					<LogOut />
				</Menu.Item>
			</Menu>
		</Sider>
	);
}

export default Sidebar;
