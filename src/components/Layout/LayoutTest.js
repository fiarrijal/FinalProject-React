import React from "react";
import "antd/dist/antd.css";
import "./sidebar.css";
import { Layout } from "antd";
import Sidebar from "./Sidebar";
import Head from "./Head";
import Main from "./Main";
import FooterComponent from "./FooterComponent";
import { BrowserRouter } from "react-router-dom";

function LayoutTest() {
	return (
		<BrowserRouter>
			<Layout style={{ minHeight: "100vh" }}>
				<Sidebar />
				<Layout className="site-layout">
					<Head />
					<Main />
					<FooterComponent />
				</Layout>
			</Layout>
		</BrowserRouter>
	);
}

export default LayoutTest;
