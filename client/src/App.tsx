import React, { useEffect, useState } from 'react';
import ScrollableGrid from 'src/components-shared/ScrollableGrid';
import { useQueryDataContext } from 'src/hooks/useQueryData';
import PaddedTypography from 'src/components-shared/PaddedTypography';
import LogsList from 'src/components/LogsList';
import SchedulesList from 'src/components/SchedulesList';
import SearchInput from 'src/components/SearchInput';
import { AppBody, AppContainer, AppHeader } from 'src/styles';

const App = () => {
  const { fetchAll, selectSchedule, toggleScheduleRetire, schedules, selectedLogs, selectedSchedule } =
    useQueryDataContext();

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <AppContainer>
      <AppHeader>
        <SearchInput label={'Schedules Search'} onChange={setSearchTerm} />
        {selectedSchedule && <PaddedTypography color="black">{selectedSchedule.name}</PaddedTypography>}
      </AppHeader>
      <AppBody
        gap={2}
        container
        direction={'row'}
        // direction={{ xs: 'column', md: 'row' }}
      >
        <ScrollableGrid item xs={4}>
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
      </AppBody>
    </AppContainer>
  );
};

export default App;
