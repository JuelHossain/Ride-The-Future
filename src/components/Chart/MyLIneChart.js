import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import useChart from '../../hooks/usechart';

const MyLineChart = () => {
    const [data, setData] = useChart([]);
    return (
      <LineChart
        width={660}
        height={500}
        data={data}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="sell" stroke="#8884d8" />
      </LineChart>
    );
};

export default MyLineChart;
