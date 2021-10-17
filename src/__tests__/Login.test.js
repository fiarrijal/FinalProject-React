// Dependencies
import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

// Components
import Login from "pages/Login/Login";
import { Input, Button } from "antd";

//Configure enzyme for React 17
Enzyme.configure({ adapter: new Adapter() });

describe("Login Container", () => {
  const wrapper = shallow(<Login />);
  it(`Should render login page`, () => {
    expect(wrapper).toMatchSnapshot();
  });
  it(`Should render 1 Input component`, () => {
    expect(wrapper.find(Input).length).toBe(1);
  });
  it(`Should render 1 Input Password omponent`, () => {
    expect(wrapper.find(Input.Password).length).toBe(1);
  });
  it(`Should render 3 Button components`, () => {
    expect(wrapper.find(Button).length).toBe(3);
  });
});
