import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import useChart from '../../hooks/usechart';

const MyBarChart = () => {
    const [data, setdata] = useChart([]);
    return (
      <BarChart width={660} height={500} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="investment" fill="#8884d8" />
        <Bar dataKey="revenue" fill="#82ca9d" />

      </BarChart>
    );
};

export default MyBarChart;