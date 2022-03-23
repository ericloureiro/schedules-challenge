import React, { useEffect } from 'react';
import './App.css';
import LogsList from 'src/components/LogsList';
import SchedulesList from 'src/components/SchedulesList';
import { useQueryDataContext } from 'src/hooks/useQueryData';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

const App = () => {
  const theme = createTheme({});
  const { fetchAll } = useQueryDataContext();

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <header className="App-header" style={{ display: 'flex', flexDirection: 'row' }}>
          <SchedulesList />
          <LogsList />
        </header>
      </ThemeProvider>
    </div>
  );
};

export default App;
