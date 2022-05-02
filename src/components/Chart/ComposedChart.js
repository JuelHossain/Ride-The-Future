import React from 'react';
import { Area, Bar, CartesianGrid, Legend, Line, Tooltip, XAxis, YAxis } from 'recharts';
import useChart from '../../hooks/usechart';

const ComposedChart = () => {
    const [data, setData] = useChart([]);
    return (
      <ComposedChart width={730} height={250} data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Area type="monotone" dataKey="investment" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="revenue" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="sell" stroke="#ff7300" />
      </ComposedChart>
    );
};

export default ComposedChart;