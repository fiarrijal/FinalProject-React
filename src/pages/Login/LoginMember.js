import React from "react";
import { Card, Form, Input, Button, Checkbox, Row, Col, Divider } from "antd";
import Logo from "../../assets/images/logo.svg";
import "./Login.css";
import { FacebookFilled, GoogleCircleFilled } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import { useState } from "react";
import { setUserSession } from "data/util";

async function getUser() {
	const response = await axios.get("user");
	return response;
}

function LoginMember() {
	//Obtaining email & password value from input
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// fetching data user
	const { data, status } = useQuery("user", getUser);

	const history = useHistory();

	//Login Function
	const handleLogin = () => {
		data.forEach((isi) => {
			if (isi.username === email && isi.password === password) {
				const { id, nama_lengkap, role_id } = isi;
				setUserSession({ id, nama_lengkap, role_id });
				if (isi.role_id === 1) {
					history.push("/admin-dashboard");
				} else if (isi.role_id === 2) {
					history.push("/member");
				} else {
					console.log(`Salah boy`);
				}
			} else {
				alert(`Username & password tidak sesuai`);
			}
		});
	};

	const onFinish = (values) => {
		console.log("Success:", values);
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<div style={{ display: "flex", alignItems: "center" }}>
			<Card style={{ width: 400 }} className="login-card">
				<h3 className="login-title">Login Member</h3>
				<div className="brand-container">
					<img src={Logo} alt="brand" className="brand-logo" />
					<h5 className="brand-text">Banking Innovation CoCreate Platform</h5>
				</div>
				<Form
					layout="vertical"
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
						label="Email"
						name="email"
						rules={[
							{
								required: true,
								message: "Email wajib diisi!",
							},
						]}
					>
						<Input
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
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
						<Input.Password
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
							}}
						/>
					</Form.Item>

					<Form.Item
						className="form-item"
						name="remember"
						valuePropName="checked"
						// wrapperCol={{
						// 	offset: 8,
						// 	span: 16,
						// }}
					>
						<Checkbox>Remember me</Checkbox>
					</Form.Item>

					<Form.Item className="form-item">
						<Button type="primary" htmlType="submit" className="btn-login-submit" onClick={handleLogin}>
							Login
						</Button>
					</Form.Item>
				</Form>
				<Divider>atau login dengan</Divider>
				<Row>
					<Col md={12}>
						<Button type="primary" style={{ backgroundColor: "red", borderColor: "red" }} icon={<GoogleCircleFilled />}>
							Google
						</Button>
					</Col>
					<Col md={12}>
						<Button type="primary" icon={<FacebookFilled />}>
							Facebook
						</Button>
					</Col>
				</Row>
			</Card>
		</div>
	);
}

export default LoginMember;
