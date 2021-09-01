import React from "react";
import { Select } from "antd";
import { Form, Input, Button, DatePicker } from "antd";
import SelectContributor from "../../components/SelectContributor/SelectContributor";
const layout = {
	labelCol: {
		span: 8,
	},
	wrapperCol: {
		span: 16,
	},
};

const { Option } = Select;
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
	required: "${label} is required!",
	types: {
		email: "${label} is not a valid email!",
		number: "${label} is not a valid number!",
	},
	number: {
		range: "${label} must be between ${min} and ${max}",
	},
};
/* eslint-enable no-template-curly-in-string */

function onChange(date, dateString) {
	console.log(date, dateString);
}

const AddClassContent = () => {
	const onFinish = (values) => {
		console.log(values);
	};

	return (
		<Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
			<Form.Item
				name={["user", "kategori"]}
				label="Kategori Project"
				rules={[
					{
						required: true,
					},
				]}
			>
				<Select
					showSearch
					style={{ width: 200 }}
					placeholder="Pilih topik"
					optionFilterProp="children"
					filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
					filterSort={(optionA, optionB) => optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())}
				>
					<Option value="1">Pengembangan Teknologi</Option>
					<Option value="2">Go Green</Option>
					<Option value="3">Sosial & Kemanusiaan</Option>
				</Select>
			</Form.Item>
			<Form.Item
				name={["user", "name"]}
				label="Nama Project"
				rules={[
					{
						required: true,
					},
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				name={["user", "tanggal"]}
				label="Tanggal Mulai"
				rules={[
					{
						required: "true",
					},
				]}
			>
				<DatePicker onChange={onChange} />
			</Form.Item>
			<Form.Item name={["user", "link-trello"]} label="Link Trello">
				<Input />
			</Form.Item>
			<Form.Item name={["user", "deskripsi"]} label="Deskripsi Project">
				<Input.TextArea />
			</Form.Item>
			<Form.Item
				name={["user", "invitation"]}
				label="Undang member lainnya untuk berkolaborasi"
				rules={[
					{
						required: false,
					},
				]}
			>
				<SelectContributor />
			</Form.Item>
			<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default AddClassContent;
