import React from 'react';
import { useSchedulesContext } from 'src/hooks/useSchedules';
import { Schedule } from 'src/types/schedules';

const SchedulesList = () => {
  const { schedules, selectedSchedule, selectedLogs, selectSchedule } = useSchedulesContext();

  const onClick = (schedule: Schedule) => () => {
    selectSchedule(schedule);
  };

  return (
    <div>
      <div>
        {schedules.map((schedule) => (
          <button
            style={{
              backgroundColor: selectedSchedule?.id === schedule.id ? 'red' : 'white',
            }}
            key={schedule.id}
            onClick={onClick(schedule)}
          >
            {schedule.id}
          </button>
        ))}
      </div>
      <div>
        {selectedLogs.map(({ id }) => (
          <p key={id}>{id}</p>
        ))}
      </div>
    </div>
  );
};

export default SchedulesList;
