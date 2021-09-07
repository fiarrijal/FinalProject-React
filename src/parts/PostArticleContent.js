import { Form, Select, Input, Button, Upload } from "antd";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";

const { Option } = Select;
const Layout = {
	labelCol: {
		span: 7,
	},
	wrapperCol: {
		span: 14,
	},
};

const normFile = (e) => {
	console.log("Upload event:", e);

	if (Array.isArray(e)) {
		return e;
	}

	return e && e.fileList;
};

const PostArticleContent = () => {
	const onFinish = (values) => {
		console.log("Received values of form: ", values);
	};

	return (
		<Form
			name="validate_other"
			{...Layout}
			onFinish={onFinish}
			initialValues={{
				"input-number": 3,
				"checkbox-group": ["A", "B"],
				rate: 3.5,
			}}
		>
			<Form.Item
				name={["user", "kategori"]}
				label="Kategori"
				rules={[
					{
						required: true,
					},
				]}
			>
				<Select
					showSearch
					style={{ width: 200 }}
					placeholder="- Pilih topik -"
					optionFilterProp="children"
					filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
					filterSort={(optionA, optionB) => optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())}
				>
					<Option value="1">Pengembangan Teknologi</Option>
					<Option value="2">Go Green</Option>
					<Option value="3">Sosial & Kemanusiaan</Option>
				</Select>
			</Form.Item>

			<Form.Item name={["user", "Judul"]} label="Judul">
				<Input />
			</Form.Item>
			<Form.Item name={["user", "Isi Artikel"]} label="Isi Artikel">
				<Input.TextArea style={{ height: 150 }} />
			</Form.Item>

			<Form.Item name="upload" label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
				<Upload name="logo" action="/upload.do" listType="picture">
					<Button icon={<UploadOutlined />}>Upload your file</Button>
				</Upload>
				<br />
				<Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
					<Upload.Dragger name="files" action="/upload.do">
						<p className="ant-upload-drag-icon">
							<InboxOutlined />
						</p>
						<p className="ant-upload-text">Click or drag file to this area to upload</p>
						<p className="ant-upload-hint">Support for a single or bulk upload.</p>
					</Upload.Dragger>
				</Form.Item>
			</Form.Item>

			<Form.Item wrapperCol={{ ...Layout.wrapperCol, offset: 7 }}>
				<Button type="primary" htmlType="submit" style={{ background: "orange", borderColor: "orange" }}>
					Buat dan Publikasi Artikel
				</Button>
			</Form.Item>
		</Form>
	);
};

export default PostArticleContent;
