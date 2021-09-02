import React from "react";
import { Form, Button, Collapse } from "antd";
import { Avatar } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";

const layout = {
	labelCol: {
		span: 8,
	},
	wrapperCol: {
		span: 16,
	},
};

const { Panel } = Collapse;
/* eslint-disable no-template-curly-in-string */
const text = `
  Proyek ini merupakan bentuk kerjasama antara pemerintah dan masyarakat yang bertujuan untuk meningkatkan kualitas pendidikan di Indonesia. Memberikan kesempatan bagi anak-anak putus sekolah dari keluarga kurang mampu untuk bisa melanjutkan pendidikan, tahun ini Mobil Kelas Berjalan (MKB) Kak Seto kembali membuka pendaftaran tahun ajaran 2020/2021. MKB Kak Seto merupakan lembaga pendidikan di bawah yayasan yang didirikan oleh psikolog anak Seto Mulyadi. Selama proses belajar, selain bebas biaya pendidikan, siswa juga difasilitasi sarana dan prasarana yang didukung penuh oleh Homeschooling Kak Seto. Orangtua siswa hanya perlu mengeluarkan biaya transportasi dari dan menuju ke sekolah.
`;
const text2 = `
  Proyek ini merupakan bentuk kerjasama antara pemerintah dan masyarakat yang bertujuan untuk ....
`;

const ProjectCollapse = () => {
	return (
		<Form {...layout}>
			<Collapse accordion>
				<Panel
					header="Bangun Sekolah Gratis"
					key="1"
					className=""
					style={{
						marginBottom: 10,
					}}
				>
					<p>
						<b>Sosial Kemanusiaan</b>
					</p>
					<p>12 September 2021</p>
					<p></p>
					<br />
					<p>
						<b>Deskripsi</b> <br />
						{text}
					</p>
					<br />
					<Avatar
						style={{
							backgroundColor: "#f56a00",
						}}
					></Avatar>
					<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
					<Avatar
						style={{
							backgroundColor: "#1890ff",
						}}
						icon={<AntDesignOutlined />}
					/>
					<hr></hr>
					<Button type="primary" shape="round">
						(+) Collaborator
					</Button>{" "}
					<span />
					<Button type="disabled" shape="round">
						(x) Delete
					</Button>
				</Panel>
			</Collapse>

			<Collapse accordion>
				<Panel
					header="Bangun Masjid Gratis"
					key="1"
					className=""
					style={{
						marginBottom: 10,
					}}
				>
					<p>
						<b>Sosial Kemanusiaan</b>
					</p>
					<p>12 September 2021</p>
					<p></p>
					<br />
					<p>
						<b>Deskripsi</b> <br />
						{text2}
					</p>
					<br />
					<Avatar
						style={{
							backgroundColor: "#f56a00",
						}}
					></Avatar>
					<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
					<Avatar
						style={{
							backgroundColor: "#1890ff",
						}}
						icon={<AntDesignOutlined />}
					/>
					<hr></hr>
					<Button type="primary" shape="round">
						(+) Collaborator
					</Button>{" "}
					<span />
					<Button type="disabled" shape="round">
						(x) Delete
					</Button>
				</Panel>
			</Collapse>
		</Form>
	);
};

export default ProjectCollapse;
