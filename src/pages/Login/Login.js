import React, { useEffect } from "react";
import { Card, Form, Input, Button, Checkbox, Row, Col, Divider } from "antd";
import Logo from "assets/images/logo.svg";
import "./Login.css";
import { FacebookFilled, GoogleCircleFilled } from "@ant-design/icons";
import { useHistory, Link } from "react-router-dom";

import axios from "axios";
import { useState } from "react";
import { setUserSession } from "data/util";
import toast from "react-hot-toast";

export default function Login() {
	const [data, setData] = useState([]);
	const history = useHistory();

	const getUser = async () => {
		const response = await axios.get("user");
		setData(response);
	};

	// fetching data user
	useEffect(() => {
		getUser();
	}, []);

	//Login Function

	const onFinish = (values) => {
		//Cek isi value

		// Pengecekan apakah data input sesuai dengan data api. Jika sesuai maka buat array baru &
		//Memilih data yang disimpan di session storage
		const filtered = data
			.filter((isi) => {
				const a = values.username === isi.username && values.password === isi.password;
				return a;
			})
			.map((filter) => {
				const { id, nama_lengkap, username, role_id } = filter;
				const a = setUserSession("user", { id, nama_lengkap, username, role_id });
				return a;
			});

		//Pengecekan isi array filtered. Jika ada isinya, maka push ke route profile
		if (filtered.length === 1) {
			history.push("/dashboard");
			toast.success("Anda berhasil login");
			window.location.reload(false);
		} else {
			alert(`Username & Password tidak match`);
		}
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<div style={{ display: "flex", alignItems: "center" }}>
			<Card style={{ width: 400 }} className="login-card">
				<h3 className="login-title">Login</h3>
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
						label="Username"
						name="username"
						rules={[
							{
								required: true,
								// type: "email",
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
						name="remember"
						valuePropName=""
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
				<Row style={{ marginTop: 16 }}>
					<Col span={24} style={{ textAlign: "center" }}>
						Belum punya akun? <Link to="/register">daftar disini</Link>
					</Col>
				</Row>
			</Card>
		</div>
	);
}
