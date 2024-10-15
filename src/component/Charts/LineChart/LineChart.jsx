import { height } from "@fortawesome/free-solid-svg-icons/fa0";
import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["MONTH", "TOTAL EXPENSE", "TOTAL COLLECTION"],
  ["January", 1000, 400],
  ["February", 1170, 460],
  ["March", 660, 1120],
  ["April", 1030, 540],
  ["May", 1030, 540],
  ["June", 1030, 540],
  ["July", 1030, 540],
  ["August", 1030, 540],
  ["September", 1030, 540],
  ["October", 1030, 540],
  ["November", 1030, 540],
  ["December", 1030, 540],  
];

export const options = {
  title: "Line Chart Representation",
  curveType: "function",
  legend: { position: "bottom" },
};

export default function LineChart() {
  return (
    <div class="container  border border-dark-subtle border-2 rounded mt-4">
       <div class="border-bottom border-2 ms-0 fs-4 fw-bolder pt-1 mt-1"> <p>Fee Collection & Expenses For 2021-2022</p></div>
        <div className="row  row-cols-2 mt-2 " >
            <div class="ps-5 border border-dark-subtle border-0 rounded bg-transparent lh-1 ">
                <p class=" pt-2 fs-3 fw-bolder">Rs.1,12,121</p>
                <p class="fs-5 fw-semibold">Total EXPENSE</p>
                <p>Total Expenses made in the cureent session.</p>
            </div>  
           
            <div class="ps-5 border border-dark-subtle border-0 rounded bg-transparent ms-0 lh-1 "  >
                <p class="fs-3 fw-bolder pt-2">Rs.1,12,121</p>
                <p class="fs-5 fw-semibold">Total EXPENSE</p>
                <p>Total Expenses made in the cureent session.</p>
            </div>
            
        </div>
    <Chart
      chartType="LineChart"
      width="100%"
      height="300px"
      padding="2px"
      data={data}
      options={options}
    />
    </div>
  );
}
