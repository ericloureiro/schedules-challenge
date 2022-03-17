import React from 'react';
import './App.css';
import SchedulesList from './components/SchedulesList';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>Schedules Challenge</p>
        <SchedulesList />
      </header>
    </div>
  );
};

export default App;
