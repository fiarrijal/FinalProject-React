import React from "react";
import "./sidebar.css";
import { Layout, Menu } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined, HomeFilled, PlusSquareFilled, FolderFilled } from "@ant-design/icons";
import EmailIcon from "@material-ui/icons/Email";
import CreateIcon from "@material-ui/icons/Create";
import NoteIcon from "@material-ui/icons/Note";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Logo from "../../assets/images/logo.svg";
import UserDropdown from "../../components/UserDropdown/UserDropdown";
import { BrowserRouter as Router, Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;

class Sidebar extends React.Component {
	constructor(props) {
		super(props);
	}
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
			<Router>
				<Layout>
					<Sider trigger={null} collapsible collapsed={this.state.collapsed} className="sidebar" width="240px" theme="light">
						<div className="logo">
							<img src={Logo} alt="" className="logo-image" />
						</div>
						<Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
							<Menu.Item key="1" icon={<HomeFilled />} className="menu-item">
								<Link to="/member/beranda-artikel">Beranda</Link>
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
								<Link to="/member/post-artikel">Post Artikel </Link>
							</Menu.Item>
							<Menu.Item key="6" icon={<NoteIcon style={{ fontSize: 16 }} />}>
								<Link to="/member/artikel-saya">Artikel Saya </Link>
							</Menu.Item>
							<Menu.Item key="7" icon={<ExitToAppIcon style={{ fontSize: 16 }} />}>
								<Link to="/">Sign Out</Link>
							</Menu.Item>
						</Menu>
					</Sider>
					<Layout className="site-layout">
						<Header className="site-layout-background header" style={{ padding: 0 }}>
							<div className="header-left">
								{React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
									className: "trigger",
									onClick: this.toggle,
								})}
								<h4 className="header-title">{this.props.titles}</h4>
							</div>
							<div className="header-right">
								<UserDropdown />
							</div>
						</Header>
						<Content
							className="site-layout-background"
							style={{
								margin: "24px 16px",
								padding: 24,
								minHeight: 280,
							}}
						>
							{this.props.content}
						</Content>
					</Layout>
				</Layout>
			</Router>
		);
	}
}

export default Sidebar;
