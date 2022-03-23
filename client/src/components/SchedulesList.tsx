import React from 'react';
import ScheduleCard from 'src/components/ScheduleCard';
import { useQueryDataContext } from 'src/hooks/useQueryData';
import { Schedule } from 'src/types/schedules';

const SchedulesList = () => {
  const { selectSchedule, toggleScheduleRetire, schedules } = useQueryDataContext();

  const onSelect = (schedule: Schedule) => () => selectSchedule(schedule);

  const onToggle = (schedule: Schedule) => () => toggleScheduleRetire(schedule);

  return (
    <div style={{ minWidth: '40vw' }}>
      <p>Schedules Entries</p>
      {schedules.map((schedule) => (
        <ScheduleCard schedule={schedule} onSelect={onSelect(schedule)} onToggle={onToggle(schedule)} />
      ))}
    </div>
  );
};

export default SchedulesList;
