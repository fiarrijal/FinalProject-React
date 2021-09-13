import React from "react";
import "components/Layout/sidebar.css";
import { Layout } from "antd";
import Sidebar from "components/Layout/Sidebar";
import Head from "components/Layout/Head";
import Main from "components/Layout/Main";
import FooterComponent from "components/Layout/FooterComponent";

function DashboardMember() {
	return (
		<Layout style={{ minHeight: "100vh" }}>
			<Sidebar />
			<Layout className="site-layout">
				<Head />
				<Main />
				<FooterComponent />
			</Layout>
		</Layout>
	);
}

export default DashboardMember;
