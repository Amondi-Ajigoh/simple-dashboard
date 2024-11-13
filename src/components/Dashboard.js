// src/components/Dashboard.js
import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { Line } from 'react-chartjs-2';

const Dashboard = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales',
        data: [30, 20, 50, 60, 40, 80],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>Dashboard</Typography>
      <Grid container spacing={3}>
        {/* Sales Chart */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Sales Overview</Typography>
            <Line data={data} />
          </Paper>
        </Grid>

        {/* Key Metrics */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Key Metrics</Typography>
            <ul>
              <li>Total Sales: 1200</li>
              <li>New Users: 200</li>
              <li>Conversion Rate: 3.5%</li>
            </ul>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
