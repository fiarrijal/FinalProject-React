import React from "react";
import { Layout } from "antd";
import "./sidebar.css";

import UserDropdown from "components/UserDropdown/UserDropdown";

const { Header } = Layout;
function Head() {
	return (
		<Header className="site-layout-background" style={{ paddingLeft: "1rem", paddingRight: "1rem", backgroundColor: "#fff", display: "flex", alignItems: "center", flexFlow: "row-reverse" }}>
			<UserDropdown />
		</Header>
	);
}

export default Head;
