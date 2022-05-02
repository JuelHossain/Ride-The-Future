import React from 'react';
import MyBarChart from '../Chart/MyBarChart';
import MyLineChart from '../Chart/MyLIneChart';
import './Dashboard.css'


const Dashboard = () => {
    return (
      <div className="container">
        <h1>Dashboard</h1>
        <div className="chart-container">
          <MyLineChart></MyLineChart>
          <MyBarChart></MyBarChart>
        </div>
      </div>
    );
};

export default Dashboard;