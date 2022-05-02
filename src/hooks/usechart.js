const { useState, useEffect } = require("react");

const useChart = (initial) => {
  const [chartData, setChartData] = useState(initial);
  useEffect(() => {
    fetch("chartdata.json")
      .then((res) => res.json())
      .then((data) => setChartData(data));
  }, []);
  return [chartData, setChartData];
};

export default useChart;
