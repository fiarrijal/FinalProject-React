import React from "react";
import { Card, Form, Input, Button, Checkbox, Row, Col } from "antd";
import Logo from "../../assets/images/logo.svg";
import "./Login.css";
import { FacebookFilled, GoogleCircleFilled } from "@ant-design/icons";

function LoginMember() {
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
						<Button type="primary" htmlType="submit" className="btn-login-submit">
							Login
						</Button>
					</Form.Item>
				</Form>
				<p style={{ textAlign: "center", marginTop: 16 }}>atau login dengan</p>
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

export default LoginMember;
