// src/components/Dashboard.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import './Dashboard.css';

const Dashboard = () => {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="dashboard">
      <div className="chart-container">
        <h2>Sales Overview</h2>
        <Line data={chartData} />
      </div>
      <div className="stats-card">
        <h2>Quick Stats</h2>
        <p>Total Sales: 150</p>
        <p>New Users: 45</p>
        <p>Conversion Rate: 5%</p>
      </div>
    </div>
  );
};

export default Dashboard;
