import React from "react";
import CardArticle from "../../components/CardArticle/CardArticle";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Row, Col } from "antd";

function ArticleContent() {
	return (
		<div>
			<Row>
				<Col span={8}>
					<Button type="primary">Article</Button>
					<Button>Project</Button>
				</Col>
				<Col span={8} offset={8}>
					<Button type="primary" shape="round">
						New Article
					</Button>
					<Button shape="round" icon={<SearchOutlined />}>
						Search
					</Button>
				</Col>
			</Row>

			<br></br>
			<CardArticle />
			<div className="b-example-divider"></div>
			<CardArticle />
			<div className="b-example-divider"></div>
			<CardArticle />
			<div className="b-example-divider"></div>
			<CardArticle />
		</div>
	);
}

export default ArticleContent;
