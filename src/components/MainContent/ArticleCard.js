import React from "react";
import { Descriptions, Button, Card, Space } from "antd";

export default function ArticleCard(props) {
	const { kategori, judul, tanggal, isi_artikel, btn_edit, btn_delete } = props;

	return (
		<div>
			<Card style={{ marginBottom: "1.5rem" }}>
				{/* <table>
					<thead></thead>
					<tbody>
						<tr>
							<th></th>
							<td></td>
						</tr>
					</tbody>
				</table> */}
				<Descriptions
					bordered
					column={1}
					size="small"
					extra={
						<Space>
							<Button type="primary" onClick={btn_edit}>
								Edit
							</Button>
							<Button type="danger" onClick={btn_delete}>
								Hapus
							</Button>
						</Space>
					}
				>
					<Descriptions.Item span={1} label="Kategori">
						{kategori}
					</Descriptions.Item>
					<Descriptions.Item span={1} label="Judul">
						{judul}
					</Descriptions.Item>
					<Descriptions.Item span={1} label="Posting Date">
						{tanggal}
					</Descriptions.Item>
					<Descriptions.Item span={1} label="Isi Artikel ">
						{isi_artikel}
					</Descriptions.Item>
				</Descriptions>
			</Card>
		</div>
	);
}
