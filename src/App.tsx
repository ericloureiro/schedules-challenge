import React from 'react';
import LogsList from 'src/containers/LogsList';
import './App.css';
import SchedulesList from './containers/SchedulesList';

const App = () => {
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
