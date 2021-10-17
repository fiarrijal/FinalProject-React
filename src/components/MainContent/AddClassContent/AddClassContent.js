import React, { useEffect } from "react";
import { Select } from "antd";
import { Form, Input, Button, DatePicker } from "antd";
import SelectContributor from "../../SelectContributor/SelectContributor";
import { useState } from "react";
import axios from "axios";
import { getUserSession } from "data/util";
import { useHistory } from "react-router";
import { nanoid } from "nanoid";
import toast from "react-hot-toast";

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
	required: "${label} harus diisi!",
	types: {
		email: "${label} bukan format email yang valid!",
		number: "${label} harus angka!",
	},
	number: {
		range: "${label} must be between ${min} and ${max}",
	},
};
/* eslint-enable no-template-curly-in-string */

const postProject = async (data) => {
	const response = await axios.post(`project`, data);
	return response;
};

// const putProject = async (data) => {
// 	const response = await axios.put(`project/${data.id}`, data);
// 	return response;
// };

function AddClassContent() {
	const [user, setUser] = useState([]);
	const [date, setDate] = useState("");
	const [formData, setFormData] = useState({
		id: "",
		kategori_project: "",
		nama_project: "",
		tanggal_mulai: "",
		link_trello: "",
		deskripsi_project: "",
		invited_user_id: [],
		collaborator_user_id: [],
		admin: getUserSession("user").username,
	});

	const isEdit = true; //ambil ID dari useparams

	useEffect(() => {
		if (isEdit) {
			//Fetching data berdasarkan id
			//set Form data
		}
	}, [isEdit]);

	const history = useHistory();

	const handleChange = (key, value) => {
		setFormData((datalama) => ({ ...datalama, [key]: value }));
	};

	const userMap = user.map((value) => {
		return value.value;
	});
	console.log(userMap);

	const onChange = (date, dateString) => {
		const baru = dateString._d;
		// console.log(`format tanggal baru`, baru);
		return setDate(`${baru}`);
	};

	const onFinish = (values) => {
		const { kategori_project, nama_project, tanggal_mulai, link_trello, deskripsi_project } = values;
		const map = {
			id: nanoid(16),
			kategori_project: kategori_project,
			nama_project: nama_project,
			tanggal_mulai: tanggal_mulai,
			link_trello: link_trello,
			deskripsi_project: deskripsi_project,
			invited_user_id: userMap,
			collaborator_user_id: [],
			admin: getUserSession("user").username,
		};
		// console.table(map);
		postProject(map);
		history.push("/dashboard/member/project/project-saya");
		toast.success("Sukses Membuat Project");
	};

	return (
		<div>
			<h2>Project Baru</h2>
			<Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
				<Form.Item
					name={["kategori_project"]}
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
						<Option value="Pengembangan Teknologi">Pengembangan Teknologi</Option>
						<Option value="Go Green">Go Green</Option>
						<Option value="Sosial & Kemanusiaan">Sosial & Kemanusiaan</Option>
					</Select>
				</Form.Item>
				<Form.Item
					name={["nama_project"]}
					label="Nama Project"
					rules={[
						{
							required: true,
						},
					]}
				>
					<Input onChange={(e) => handleChange("nama_project", e.target.value)} value={formData.nama_project} />
				</Form.Item>
				<Form.Item
					name={["tanggal_mulai"]}
					label="Tanggal Mulai"
					rules={[
						{
							required: "true",
						},
					]}
				>
					<DatePicker value={date} onChange={onChange} />
				</Form.Item>
				<Form.Item name={["link_trello"]} label="Link Trello">
					<Input />
				</Form.Item>
				<Form.Item name={["deskripsi_project"]} label="Deskripsi Project">
					<Input.TextArea />
				</Form.Item>
				<Form.Item
					name={["invited_user_id"]}
					label="Undang Member Lain"
					rules={[
						{
							required: false,
						},
					]}
				>
					<SelectContributor setVal={(e) => setUser(e)} />
				</Form.Item>
				<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
}

export default AddClassContent;
