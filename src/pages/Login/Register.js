import React from "react";
import { Card, Form, Input, Button, Row, Col, Select } from "antd";
import Logo from "../../assets/images/logo.svg";
import "./Login.css";
import { FacebookFilled, GoogleCircleFilled } from "@ant-design/icons";

const { Option } = Select;

function Register() {
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
						name="password-confirm"
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
						>
							<Option value="1">Pengembangan Teknologi</Option>
							<Option value="2">Go Green</Option>
							<Option value="3">Sosial & Kemanusiaan</Option>
						</Select>
					</Form.Item>

					<Form.Item className="form-item">
						<Button type="primary" htmlType="submit" className="btn-login-submit">
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
			</Card>
		</div>
	);
}

export default Register;
