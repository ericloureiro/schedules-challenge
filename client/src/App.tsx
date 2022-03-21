import React, { useEffect } from 'react';
import './App.css';
import LogsList from 'src/components/LogsList';
import SchedulesList from 'src/components/SchedulesList';
import { useQueryDataContext } from 'src/hooks/useQueryData';

const App = () => {
  const { fetchAll } = useQueryDataContext();

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  return (
    <div className="App">
      <header className="App-header" style={{ display: 'flex', flexDirection: 'row' }}>
        <SchedulesList />
        <LogsList />
      </header>
    </div>
  );
};

export default App;
