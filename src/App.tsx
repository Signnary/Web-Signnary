// app.tsx
import React from "react";
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter as Router
import Routing from "@/components/routes/Routing"; // Adjust import path as per your project structure
import { theme } from './theme'; // Assuming your theme is correctly defined

function App() {
  return (
    <MantineProvider theme={theme}>
      <Router>
        <Routing />
      </Router>
    </MantineProvider>
  );
}

export default App;
