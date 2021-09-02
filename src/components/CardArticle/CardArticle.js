import React from "react";
import { Collapse, Row, Col } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import img1 from "../../assets/images/books.jpeg";

const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, illo reiciendis. Totam rem dolorum nesciunt distinctio asperiores. Numquam vitae, voluptate officiis ratione
   sit ex suscipit aut aperiam quibusdam, assumenda odit.
   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, illo reiciendis. Totam rem dolorum nesciunt distinctio asperiores. Numquam vitae, voluptate officiis ratione
   sit ex suscipit aut aperiam quibusdam, assumenda odit.
`;

const jdlArtikel = () => (
	<Row>
		<Col flex="auto">
			<h5 style={{ color: "grey" }}>Design </h5>
			<h3 className="jdl-ar">Pembiayaan Nasabah</h3>
			<hr></hr>
			<h5 style={{ color: "grey" }}>02 Nov 21 </h5>
			<h5 style={{ color: "grey" }}>Pevita Pearce </h5>
		</Col>
		<Col flex="10px">
			<span>
				<DeleteOutlined
					style={{ fontSize: "20px" }}
					onClick={(event) => {
						event.stopPropagation();
					}}
				/>
			</span>
		</Col>
	</Row>
);

class CardArticle extends React.Component {
	state = {
		expandIconPosition: "right",
	};

	render() {
		const { expandIconPosition } = this.state;
		return (
			<>
				<div className="card-colaps">
					<Collapse className="box-card" defaultActiveKey={["1"]} expandIconPosition={expandIconPosition}>
						<Panel className="" header={jdlArtikel()} key="1">
							<Row>
								<Col flex="1 1 200px">{text}</Col>
								<Col flex="0 1 300px">
									<img className="myImage" src={img1} alt="image1" />
								</Col>
							</Row>
						</Panel>
					</Collapse>
				</div>
			</>
		);
	}
}

export default CardArticle;
