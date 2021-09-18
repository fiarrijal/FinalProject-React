import React, { useState } from "react";
import { Card, Form, Input, Button, Row, Col, Select } from "antd";
import { Link } from "react-router-dom";
import Logo from "assets/images/logo.svg";
import "./Login.css";
import { FacebookFilled, GoogleCircleFilled } from "@ant-design/icons";
import { nanoid } from "nanoid";
import axios from "axios";

const { Option } = Select;

function Register() {
	const [fullName, setFullName] = useState("");
	const [username, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [password2, setPassword2] = useState("");
	const [kategoriProject, setKategoriProject] = useState("");

	const dataMauDiPush = {
		id: nanoid(16),
		tanggal_registrasi: new Date().toISOString(),
		nama_lengkap: fullName,
		username: username,
		password: password,
		topik_diminati: [kategoriProject],
		enrollment_status: 0,
		role_id: 1,
	};

	const addData = () => {
		const response = axios.post("user", dataMauDiPush);
		return response;
	};

	const onFinish = (values) => {
		console.log("Success:", values);
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
						<Input onChange={(e) => setFullName(e.target.value)} value={fullName} />
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
						<Input onChange={(e) => setUserName(e.target.value)} value={username} />
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
						<Input.Password onChange={(e) => setPassword(e.target.value)} value={password} />
					</Form.Item>
					<Form.Item
						className="form-item"
						label="Konfirmasi Password"
						name="password-confirm"
						rules={[
							{
								required: true,
								message: "Password wajib diisi!",
							},
						]}
					>
						<Input.Password onChange={(e) => setPassword2(e.target.value)} value={password2} />
					</Form.Item>

					<Form.Item
						name={["user", "kategori"]}
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
							value={kategoriProject}
							onChange={(value) => setKategoriProject(value)}
						>
							<Option value="Pengembangan Teknologi">Pengembangan Teknologi</Option>
							<Option value="Go Green">Go Green</Option>
							<Option value="Sosial & Kemanusiaan">Sosial & Kemanusiaan</Option>
						</Select>
					</Form.Item>

					<Form.Item className="form-item">
						<Button type="primary" htmlType="submit" className="btn-login-submit" onClick={addData}>
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
