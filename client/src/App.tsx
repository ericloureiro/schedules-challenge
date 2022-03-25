import React, { useEffect, useState } from 'react';
import ScrollableGrid from 'src/components-shared/ScrollableGrid';
import { useQueryDataContext } from 'src/hooks/useQueryData';
import PaddedTypography from 'src/components-shared/PaddedTypography';
import LogsList from 'src/components/LogsList';
import SchedulesList from 'src/components/SchedulesList';
import SearchInput from 'src/components/SearchInput';
import { AppContainer } from 'src/styles';
import { AppBar, Grid, Toolbar } from '@mui/material';

const App = () => {
  const { fetchAll, selectSchedule, toggleScheduleRetire, schedules, selectedLogs, selectedSchedule } =
    useQueryDataContext();

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <AppContainer>
      <AppBar color={'default'} position="static">
        <Toolbar>
          <SearchInput label={'Schedules Search'} onChange={setSearchTerm} />
          {selectedSchedule && <PaddedTypography color="black">{selectedSchedule.name}</PaddedTypography>}
        </Toolbar>
      </AppBar>
      <Grid container>
        <ScrollableGrid item xs={8} sm={4}>
          <SchedulesList
            selectSchedule={selectSchedule}
            toggleScheduleRetire={toggleScheduleRetire}
            schedules={schedules}
            searchTerm={searchTerm}
          />
        </ScrollableGrid>
        <ScrollableGrid item xs>
          <LogsList logs={selectedLogs} selectedSchedule={selectedSchedule} />
        </ScrollableGrid>
      </Grid>
    </AppContainer>
  );
};

export default App;
