// Dependencies
import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

// Components
import Register from "pages/Login/Register";
import { Input, Button } from "antd";
import { Select } from "antd";

const { Option } = Select;

//Configure enzyme for React 17
Enzyme.configure({ adapter: new Adapter() });

describe("Register Container", () => {
	const wrapper = shallow(<Register />);
	it(`Should render register page`, () => {
		expect(wrapper).toMatchSnapshot();
	});
	it(`Should render 2 Input components`, () => {
		expect(wrapper.find(Input).length).toBe(2);
	});
	it(`Should render 2 Input Password components`, () => {
		expect(wrapper.find(Input.Password).length).toBe(2);
	});
	it(`Should render 3 Button components`, () => {
		expect(wrapper.find(Button).length).toBe(3);
	});
	it(`Should render 1 Select component`, () => {
		expect(wrapper.find(Select).length).toBe(1);
	});
	it(`Should render 3 Button components`, () => {
		expect(wrapper.find(Option).length).toBe(3);
	});
});
