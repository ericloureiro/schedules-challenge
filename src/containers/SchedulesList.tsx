import React from 'react';
import { useSchedulesContext } from 'src/hooks/useSchedules';
import { Schedule } from 'src/types/schedules';

const SchedulesList = () => {
  const { selectSchedule, schedules, selectedSchedule } = useSchedulesContext();

  const onSelect = (schedule: Schedule) => () => selectSchedule(schedule);

  return (
    <div style={{ minWidth: '40vw' }}>
      <p>Schedules Entries</p>
      <div>
        {schedules.map((schedule) => (
          <button
            style={{
              backgroundColor: selectedSchedule?.id === schedule.id ? 'grey' : 'white',
              margin: 16,
              borderRadius: 4,
              padding: 4,
            }}
            key={`schedule-entry-${schedule.id}`}
            onClick={onSelect(schedule)}
          >
            {schedule.id}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SchedulesList;
