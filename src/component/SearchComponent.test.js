import React from "react";
import { Provider } from "react-redux";
import { render, fireEvent } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import SearchComponent from "./SearchComponent";
import createStore from "../store";

const store = createStore();
Enzyme.configure({ adapter: new Adapter() });

jest.mock("react-redux", () => ({ ...jest.requireActual("react-redux"), useSelector: jest.fn() }));

describe("test search component", () => {
  it("renders search component correctly", () => {
    const wrapper = shallow(<SearchComponent />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("fetchData being called on search button click", () => {
    const fetchData = jest.fn();
    const wrapper = render(
      <Provider store={store}>
        <SearchComponent fetchData={fetchData} />
      </Provider>
    );
    const btn = wrapper.getByText("Search");
    fireEvent.click(btn);
    expect(fetchData).toBeCalled();
  });
});
