import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "./App";

Enzyme.configure({
  adapter: new EnzymeAdapter(),
});

test("render without error", () => {});

test("render increment button", () => {});

test("render counter display", () => {});

test("counter display start at 0", () => {});

test("clicking button increment counter display", () => {});
