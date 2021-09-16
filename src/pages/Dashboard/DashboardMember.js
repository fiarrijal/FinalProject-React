import React from "react";
import "components/Layout/sidebar.css";
import { Layout, notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import Sidebar from "components/Layout/Sidebar";
import Head from "components/Layout/Head";
import Main from "components/Layout/Main";
import FooterComponent from "components/Layout/FooterComponent";

// const openNotification = () => {
// 	notification.open({
// 		message: "Anda berhasil login",
// 		icon: <SmileOutlined style={{ color: "green" }} />,
// 		duration: 2,
// 	});
// };

function DashboardMember() {
	return (
		<Layout style={{ minHeight: "100vh" }}>
			{/* <openNotification /> */}
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
