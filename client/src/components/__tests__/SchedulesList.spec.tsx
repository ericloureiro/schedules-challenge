import React from 'react';
import SchedulesList from 'src/components/SchedulesList';
import { render } from 'src/tests/customRender';
import SchedulesFactory from 'src/tests/factories/schedules';

const mockSelectSchedule = jest.fn();
const mockToggleScheduleRetire = jest.fn();
const mockSchedules = SchedulesFactory.createMany();

describe('ScheduleList', () => {
  const renderList = () =>
    render(
      <SchedulesList
        selectSchedule={mockSelectSchedule}
        toggleScheduleRetire={mockToggleScheduleRetire}
        schedules={mockSchedules}
        searchTerm={''}
      />
    );

  it('render list of schedules cards', () => {
    const { getByText } = renderList();

    mockSchedules.forEach(({ name }) => expect(getByText(name)).toBeDefined());
  });
});
