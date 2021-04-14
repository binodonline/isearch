import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getMergedData } from "./state/selector";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "./SearchComponent.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const SearchComponent = (props) => {
  const getFinalData = useSelector((state) => getMergedData(state));
  const [year, setYear] = useState("");

  const fetchData = () => {
    props.fetchData(year);
  };

  const displayData = () => {
    return (
      <div className="ag-theme-alpine" style={{ height: 800, width: 600 }}>
        <AgGridReact rowData={getFinalData}>
          <AgGridColumn field="countryName" headerName="Country"></AgGridColumn>
          <AgGridColumn field="population" headerName="Total Population" sortable={true}></AgGridColumn>
          <AgGridColumn field="gdpValue" headerName="GDP (current US$)" sortable={true}></AgGridColumn>
        </AgGridReact>
      </div>
    );
  };

  return (
    <div className="Search">
      <input type="text" value={year} onChange={(e) => setYear(e.target.value)}></input>
      <button className="Search-button" onClick={fetchData}>
        Search
      </button>
      <div className="Search-grid">{displayData()}</div>
    </div>
  );
};

export default SearchComponent;
