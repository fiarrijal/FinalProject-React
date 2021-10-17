// Dependencies
import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
// Components
import ProjectCard from "components/Layout/ProjectCard";
// import MyProject from "components/Layout/MyProject";/
import { Descriptions } from "antd";
const { Item } = Descriptions;
//Configure enzyme for React 17
Enzyme.configure({ adapter: new Adapter() });
// test("test your component", () => {
// 	const wrapper = mount(<App2 txt={"michaelangelo"} />);
// 	expect(wrapper.find("p").text()).toEqual("hi michaelangelo");
// });

describe(`Test ProjectCard component`, () => {
	const wrapper = shallow(<ProjectCard category="Game" date="1" deskripsi="deskripsi" nama="nama" />);

	it(`Should render MyProjectCard`, () => {
		expect(wrapper).toMatchSnapshot();
	});
	it(`Should render category props`, () => {
		expect(wrapper.find({ "data-testid": "category" }).text()).toBe("Game");
	});
	it(`Should render date props`, () => {
		expect(wrapper.find({ "data-testid": "date" }).text()).toBe("1");
	});
	it(`Should render deskripsi props`, () => {
		expect(wrapper.find({ "data-testid": "deskripsi" }).text()).toBe("deskripsi");
	});
	it(`Should render name props`, () => {
		expect(wrapper.find({ "data-testid": "nama" }).text()).toBe("nama");
	});
});
