import React from "react";

import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Hello from "./Hello";
import { Beta } from "./index";

Enzyme.configure({ adapter: new Adapter() });

it("renders properly", () => {
  const wrapper = shallow(<Hello name="CodeSandbox" />);
  expect(wrapper.text()).toEqual("Hello CodeSandbox!");
});

it("Beta renders properly", () => {
  const wrapper = mount(<Beta />);
  console.log(wrapper.debug());
  expect(wrapper.find("button").text()).toEqual("true");
  wrapper.find("button").simulate("click");
  expect(wrapper.find("button").text()).toEqual("false");
  //expect(wrapper.text()).toEqual("Hello CodeSandbox!");
});
