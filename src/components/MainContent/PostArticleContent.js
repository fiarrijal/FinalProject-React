import { Form, Select, Input, Button } from "antd";
import { getUserSession } from "data/util";
import { nanoid } from "nanoid";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useQuery } from "react-query";

const { Option } = Select;
const Layout = {
	labelCol: {
		span: 7,
	},
	wrapperCol: {
		span: 14,
	},
};

async function addArticle(value) {
	const response = await axios.post("artikel", value);
	return response;
}

async function updateArticle(id, data) {
	const response = await axios.patch(`artikel/${id}`, data);
	return response;
}

const getArticle = (id) => {
	return axios.get(`artikel/${id}`);
};
function PostArticleContent() {
	const history = useHistory();
	let { id } = useParams();

	const { data, status, isLoading, isError } = useQuery(["artikel", id], () => getArticle(id));

	const filtered = data === undefined ? { kategori: "", judul: "", isi_artikel: "" } : { kategori: data.kategori, judul: data.judul, isi_artikel: data.isi_artikel };

	console.log(`data`, status, data);

	const onFinish = (values) => {
		if (id !== undefined) {
			console.log(`Fungsi edit yg berjalan`);
			updateArticle(id, {
				// id: article.id,
				// posting_date: article.posting_date,
				// kategori: article.kategori,
				judul: values.judul,
				isi_artikel: values.isi_artikel,
				// id_user: article.id_user,
			});
			toast.success("Artikel berhasil diupdate");
			history.push("/dashboard/member/artikel-saya");
		} else {
			const dataMauDiPush = {
				id: nanoid(16),
				posting_date: new Date().toISOString(),
				kategori: values.kategori,
				judul: values.judul,
				isi_artikel: values.isi_artikel,
				id_user: getUserSession("user").username,
			};
			addArticle(dataMauDiPush);
			history.push("/dashboard/member/artikel-saya");
			toast.success("Sukses Membuat Artikel");
		}
	};

	if (isLoading) {
		return "Loading....";
	}

	if (isError) {
		return `Error!`;
	}
	return (
		<div>
			<h2>{id !== undefined ? `Update Artikel` : `Buat Artikel Baru`}</h2>
			<Form
				name="validate_other"
				{...Layout}
				onFinish={onFinish}
				initialValues={{
					kategori: filtered.kategori,
					judul: filtered.judul,
					isi_artikel: filtered.isi_artikel,
				}}
			>
				<Form.Item
					name="kategori"
					label="Kategori"
					rules={[
						{
							required: true,
						},
					]}
				>
					<Select
						name="kategori"
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

				<Form.Item name="judul" label="Judul">
					<Input />
				</Form.Item>
				<Form.Item name="isi_artikel" label="Isi Artikel">
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
