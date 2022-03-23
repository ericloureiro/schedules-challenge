import React, { useEffect } from 'react';
import LogsList from 'src/components/LogsList';
import SchedulesList from 'src/components/SchedulesList';
import { useQueryDataContext } from 'src/hooks/useQueryData';
import { ThemeProvider } from '@emotion/react';
import { Box, Grid, Typography, createTheme } from '@mui/material';
import styled from '@emotion/styled';

const AppContainer = styled(Box)`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const AppHeader = styled(Box)`
  margin: 16px 32px;
`;

const App = () => {
  const theme = createTheme({});
  const { fetchAll } = useQueryDataContext();

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <AppContainer>
      <ThemeProvider theme={theme}>
        <AppHeader>
          <Typography>Schedules</Typography>
        </AppHeader>
        <Grid container spacing={2} flex={1} direction={{ sx: 'column', md: 'row' }}>
          <Grid item xs={12} md={3}>
            <SchedulesList />
          </Grid>
          <Grid item xs>
            <LogsList />
          </Grid>
        </Grid>
      </ThemeProvider>
    </AppContainer>
  );
};

export default App;
