import { Modal, Button, Space } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Fragment } from "react";

const { confirm } = Modal;

export default function ModalDelete() {
	// function showConfirm(id) {
	// 	confirm({
	// 		title: "Do you Want to delete these items?",
	// 		icon: <ExclamationCircleOutlined />,
	// 		content: "Some descriptions",
	// 		onOk() {
	// 			// Panggil fungsi delete di sini
	// 			console.log("OK");
	// 		},
	// 		onCancel() {
	// 			console.log("Cancel");
	// 		},
	// 	});
	// }
	return (
		<Fragment>
			<Button type="danger">Delete</Button>
		</Fragment>
	);
}
