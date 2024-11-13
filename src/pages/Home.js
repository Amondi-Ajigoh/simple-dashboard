// src/pages/Home.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Home = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4">Welcome to the Simple Dashboard</Typography>
      <Typography>Navigate to the dashboard to view metrics and insights.</Typography>
    </Box>
  );
};

export default Home;
