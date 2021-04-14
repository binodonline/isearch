import React from "react";
import SearchComponent from "./component/SearchComponent";
import "./App.css";
import { useDispatch } from "react-redux";
import { getGDP, getPopulation } from "./component/state/actions";

function App() {
  const dispatch = useDispatch();
  const fetchData = (year) => {
    dispatch(getGDP(year)).then(() => {
      dispatch(getPopulation(year));
    });
  };

  return (
    <>
      <div className="App">
        A simple isearch - We can fetch population of all coutiries and their respective GDP value for a particular
        year. <br></br> Please type year then press Search button and we can see the list populated below.
      </div>
      <SearchComponent fetchData={fetchData} />
    </>
  );
}

export default App;
