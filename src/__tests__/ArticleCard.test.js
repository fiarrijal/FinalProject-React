import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import ArticleCard from "components/MainContent/ArticleCard";

Enzyme.configure({ adapter: new Adapter() });

describe(`Test MyArticleCard component`, () => {
   const wrapper = shallow(<ArticleCard />);

   it(`Should render MyArticleCard`, () => {
      expect(wrapper).toMatchSnapshot();
   });
   it(`Should render kategori props`, () => {
      expect(wrapper.find({ "data-testid": "kategori" })).toEqual({});
   });
   it(`Should render judul props`, () => {
      expect(wrapper.find({ "data-testid": "judul" })).toEqual({});
   });
   it(`Should render tanggal props`, () => {
      expect(wrapper.find({ "data-testid": "tanggal" })).toEqual({});
   });
   it(`Should render isi artikel props`, () => {
      expect(wrapper.find({ "data-testid": "isi_artikel" })).toEqual({});
   });
   // it(`Should render Button click components`, () => {
   //    expect(wrapper.find(Button).length).toBe(2);
   // });
   it(`Should render Button click components`, () => {
      expect(wrapper.find({ "data-testid": "btn_click" })).toEqual({});
   });
});
