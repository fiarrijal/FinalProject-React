import React from "react";
import { Card, Form, Input, Button, Row, Col, Select } from "antd";
import { Link, useHistory } from "react-router-dom";
import Logo from "assets/images/logo.svg";
import "./Login.css";
import { FacebookFilled, GoogleCircleFilled } from "@ant-design/icons";
import { nanoid } from "nanoid";
import axios from "axios";
import toast from "react-hot-toast";

const { Option } = Select;

function getDate() {
	let date = new Date().getDate();
	let month = new Date().getMonth() + 1;
	let year = new Date().getFullYear();
	let hours = new Date().getHours();
	let min = new Date().getMinutes();
	let sec = new Date().getSeconds();
	return `${date}/${month}/${year} ${hours}:${min}:${sec}`;
}

function Register() {
	const history = useHistory();

	const addData = async (data) => {
		const response = await axios.post("user", data);
		return response;
	};

	const onFinish = (values) => {
		console.table("Success:", values);
		if (values.password !== values.password_confirm) {
			toast.error("Konfirmasi Password tidak sesuai");
			setInterval(() => {
				window.location.reload(false);
			}, 1000);
		} else {
			const dataMauDiPush = {
				id: nanoid(16),
				tanggal_registrasi: getDate(),
				nama_lengkap: values.nama,
				username: values.username,
				password: values.password,
				topik_diminati: [values.kategori],
				enrollment_status: "Waiting for Approval",
				role_id: 2,
			};
			addData(dataMauDiPush);
			toast.success(`Registrasi berhasil`);
			setInterval(() => {
				history.push("/");
			}, 1000);
		}
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<div style={{ display: "flex", alignItems: "center" }}>
			<Card style={{ width: 500 }} className="login-card">
				<h3 className="login-title">Register</h3>
				<div className="brand-container">
					<img src={Logo} alt="brand" className="brand-logo" />
					<h5 className="brand-text">Banking Innovation CoCreate Platform</h5>
				</div>
				<Form
					style={{ width: 400 }}
					layout="horizontal"
					name="basic"
					initialValues={{
						remember: true,
					}}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="off"
				>
					<Form.Item
						className="form-item"
						label="Nama Lengkap"
						name="nama"
						rules={[
							{
								required: true,
								message: "Nama Lengkap wajib diisi!",
							},
						]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						className="form-item"
						label="Username"
						name="username"
						rules={[
							{
								required: true,
								message: "Username wajib diisi!",
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						className="form-item"
						label="Password"
						name="password"
						rules={[
							{
								required: true,
								message: "Password wajib diisi!",
							},
						]}
					>
						<Input.Password />
					</Form.Item>
					<Form.Item
						className="form-item"
						label="Konfirmasi Password"
						name="password_confirm"
						rules={[
							{
								required: true,
								message: "Password wajib diisi!",
							},
						]}
					>
						<Input.Password />
					</Form.Item>

					<Form.Item
						name={["kategori"]}
						label="Kategori Project"
						rules={[
							{
								// required: true,
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
							// value={kategoriProject}
							// onChange={(value) => setKategoriProject(value)}
						>
							<Option value="Pengembangan Teknologi">Pengembangan Teknologi</Option>
							<Option value="Go Green">Go Green</Option>
							<Option value="Sosial & Kemanusiaan">Sosial & Kemanusiaan</Option>
						</Select>
					</Form.Item>

					<Form.Item className="form-item">
						<Button
							type="primary"
							htmlType="submit"
							className="btn-login-submit"
							// onClick={addData}
						>
							Register
						</Button>
					</Form.Item>
				</Form>
				<p style={{ textAlign: "center", marginTop: 16 }}>atau register dengan</p>
				<Row>
					<Col md={12}>
						<Button icon={<GoogleCircleFilled />}>Google</Button>
					</Col>
					<Col md={12}>
						<Button icon={<FacebookFilled />}>Facebook</Button>
					</Col>
				</Row>
				<Row style={{ marginTop: 16 }}>
					<Col span={24} style={{ textAlign: "center" }}>
						Sudah punya akun? <Link to="/">login disini</Link>
					</Col>
				</Row>
			</Card>
		</div>
	);
}

export default Register;
