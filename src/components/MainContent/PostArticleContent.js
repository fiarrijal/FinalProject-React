import { Form, Select, Input, Button, Upload } from "antd";
import { getUserSession } from "data/util";
import { nanoid } from "nanoid";
import axios from "axios";
import { useHistory } from "react-router";

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

function PostArticleContent() {
	const history = useHistory();

	const addData = async (value) => {
		const response = await axios.post("artikel", value);
		return response;
	};

	const onFinish = (values) => {
		console.log("Received values of form: ", values);
		const dataMauDiPush = {
			id: nanoid(16),
			posting_date: new Date().toISOString(),
			kategori: values.kategori,
			judul: values.judul,
			isi_artikel: values.isi_artikel,
			id_user: getUserSession().id,
		};
		addData(dataMauDiPush);
		history.push("/dashboard/member/artikel-saya");
	};

	return (
		<div>
			<h2>Post Artikel</h2>
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
					name={["kategori"]}
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
						<Option value="Pengembangan Teknologi">Pengembangan Teknologi</Option>
						<Option value="Go Green">Go Green</Option>
						<Option value="Sosial & Kemanusiaan">Sosial & Kemanusiaan</Option>
					</Select>
				</Form.Item>

				<Form.Item name={["judul"]} label="Judul">
					<Input />
				</Form.Item>
				<Form.Item name={["isi_artikel"]} label="Isi Artikel">
					<Input.TextArea style={{ height: 150 }} />
				</Form.Item>

				{/* Form untuk upload */}
				{/* <Form.Item name="upload" label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
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
				</Form.Item> */}

				<Form.Item wrapperCol={{ ...Layout.wrapperCol, offset: 7 }}>
					<Button type="primary" htmlType="submit" style={{ background: "orange", borderColor: "orange" }}>
						Buat dan Publikasi Artikel
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
}

export default PostArticleContent;
