import React, { useState } from "react";
import { Chart } from "react-google-charts";

// Month-wise data
export const monthWiseData = [
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
  ["October", 1030, 1540],
  ["November", 1030, 540],
  ["December", 1030, 540],
];

// Year-wise data
export const yearWiseData = [
  ["YEAR", "TOTAL EXPENSE", "TOTAL COLLECTION"],
  ["2018", 14000, 11500],
  ["2019", 16000, 18000],
  ["2020", 12000, 19000],
  ["2021", 15000, 16000],
  ["2022", 1000, 11500],
  ["2023", 16000, 13000],
  ["2024", 14000, 11500],
];

export const options = {
  title: "Company Performance",
  subtitle: "Sales and Expenses over the Years",
  bars: 'vertical', // Ensures vertical bars
  vAxis: { title: 'Amount (Rs)' },
  hAxis: { title: 'Time Period' },
  animation: {
    startup: true, // Enable animation on startup
    duration: 1000, // Animation duration in milliseconds
    easing: 'out', // Easing type (can be 'in', 'out', or 'inAndOut')
  },
  isStacked: true,
  // Additional options can be added here
};

export default function LineChart() {
  const [isMonthWise, setIsMonthWise] = useState(true);

  // Function to toggle between month-wise and year-wise data
  const toggleData = () => {
    setIsMonthWise(!isMonthWise);
  };

  const currentData = isMonthWise ? monthWiseData : yearWiseData;

  // Calculate totals dynamically
  const totalExpense = currentData.slice(1).reduce((acc, row) => acc + row[1], 0);
  const totalCollection = currentData.slice(1).reduce((acc, row) => acc + row[2], 0);

  return (
    <div className="container border border-dark-subtle border-2 rounded mt-4 p-4">
      {/* Header Section with Title and Switch on the Same Row */}
      <div className="d-flex justify-content-between align-items-center border-bottom border-2 pb-3 mb-3">
        <h4 className="mb-0">Fee Collection & Expenses For 2021-2022</h4>
        <div className="form-check form-switch ms-auto">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="dataToggleSwitch"
            onChange={toggleData}
            checked={!isMonthWise}
          />
          <label className="form-check-label" htmlFor="dataToggleSwitch">
            {isMonthWise ? "Switch to Year-wise Data" : "Switch to Month-wise Data"}
          </label>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="row row-cols-2 mt-2">
        <div className="ps-5 border-0 rounded bg-transparent lh-1">
          <p className="pt-2 fs-3 fw-bolder">Rs.{totalExpense.toLocaleString()}</p>
          <p className="fs-5 fw-semibold">Total EXPENSE</p>
          <p>Total Expenses made in the current session.</p>
        </div>

        <div className="ps-5 border-0 rounded bg-transparent ms-0 lh-1">
          <p className="fs-3 fw-bolder pt-2">Rs.{totalCollection.toLocaleString()}</p>
          <p className="fs-5 fw-semibold">Total COLLECTION</p>
          <p>Total Collections made in the current session.</p>
        </div>
      </div>

      {/* Chart Section */}
      <Chart
        chartType="Bar"
        data={currentData}
        options={{
          ...options,
          title: isMonthWise
            ? "Company Performance (Month-wise)"
            : "Company Performance (Year-wise)",
            //colors: ['#FF5733', '#33FF57'], // Custom colors for better visibility
        }}
        
        width="100%"
        height="350px"
      />
    </div>
  );
}


