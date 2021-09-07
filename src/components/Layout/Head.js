import React from "react";
import { Layout, Popover, Button, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Header } = Layout;
function Head() {
	return (
		<Header className="site-layout-background" style={{ padding: 0 }}>
			<Popover placement="bottom" trigger="hover">
				<button style={{ height: 64, border: "none", backgroundColor: "transparent" }}>
					<Avatar style={{ backgroundColor: "#87d068" }} icon={<UserOutlined />} />
					<span>Marni</span>
				</button>
			</Popover>
		</Header>
	);
}

export default Head;
