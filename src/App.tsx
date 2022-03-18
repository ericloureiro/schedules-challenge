import React from 'react';
import './App.css';
import LogsList from 'src/components/LogsList';
import SchedulesList from 'src/components/SchedulesList';
import { QueryDataProvider } from 'src/hooks/useQueryData';

const App = () => {
  return (
    <div className="App">
      <header className="App-header" style={{ display: 'flex', flexDirection: 'row' }}>
        <QueryDataProvider>
          <SchedulesList />
          <LogsList />
        </QueryDataProvider>
      </header>
    </div>
  );
};

export default App;
