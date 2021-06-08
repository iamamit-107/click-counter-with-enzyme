import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "./App";

Enzyme.configure({
  adapter: new EnzymeAdapter(),
});

/**
 *  Factory function to create a shallow wrapper to the app component
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => shallow(<App />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test("render without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test("render increment button", () => {
  const wrapper = setup();
  const buttonComponent = findByTestAttr(wrapper, "increment-button");
  expect(buttonComponent.length).toBe(1);
});

test("render counter display", () => {
  const wrapper = setup();
  const dispalyComponent = findByTestAttr(wrapper, "counter-display");
  expect(dispalyComponent.length).toBe(1);
});

test("counter display start at 0", () => {});

test("clicking button increment counter display", () => {});
