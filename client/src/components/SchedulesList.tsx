import React from 'react';
import { useQueryDataContext } from 'src/hooks/useQueryData';
import { Schedule } from 'src/types/schedules';

const SchedulesList = () => {
  const { selectSchedule, toggleScheduleRetire, schedules, selectedSchedule } = useQueryDataContext();

  const onSelect = (schedule: Schedule) => () => selectSchedule(schedule);

  const onToggle = (schedule: Schedule) => () => toggleScheduleRetire(schedule);

  return (
    <div style={{ minWidth: '40vw' }}>
      <p>Schedules Entries</p>
      <div>
        {schedules.map((schedule) => (
          <div key={`schedule-entry-${schedule.id}`}>
            <button
              style={{
                backgroundColor: selectedSchedule?.id === schedule.id ? 'grey' : 'white',
                margin: 16,
                borderRadius: 4,
                padding: 4,
              }}
              onClick={onSelect(schedule)}
            >
              {schedule.id}
            </button>
            <button onClick={onToggle(schedule)}>{'isRetired:' + schedule.isRetired}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchedulesList;
