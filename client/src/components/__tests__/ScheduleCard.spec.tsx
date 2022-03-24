import React from 'react';
import ScheduleCard from 'src/components/ScheduleCard';
import { render } from 'src/tests/customRender';
import SchedulesFactory from 'src/tests/factories/schedules';
import { fireEvent } from '@testing-library/react';

describe('ScheduleCard', () => {
  const mockSchedule = SchedulesFactory.create();
  const mockOnToggle = jest.fn();
  const mockOnSelect = jest.fn();

  describe('should render', () => {
    const renderCard = () =>
      render(<ScheduleCard schedule={mockSchedule} onToggle={mockOnToggle} onSelect={mockOnSelect} />);

    it('schedule name', () => {
      const { getByText } = renderCard();

      const name = getByText(mockSchedule.name);

      expect(name).toBeDefined();
    });

    it('schedule description', () => {
      const { getByText } = renderCard();

      const description = getByText(mockSchedule.description);

      expect(description).toBeDefined();
    });

    it('Status information', () => {
      const { getByText } = renderCard();

      const statusText = getByText('Status');

      expect(statusText).toBeDefined();
    });
    it('when retired', () => {
      mockSchedule.isRetired = true;

      const { getByTestId, getByText } = renderCard();

      const statusChip = getByText('Retired');
      const starBorderIcon = getByTestId('StarIcon');

      expect(statusChip).toBeDefined();
      expect(starBorderIcon).toBeDefined();
    });

    it('when active', () => {
      mockSchedule.isRetired = false;

      const { getByTestId, getByText } = renderCard();

      const statusChip = getByText('Active');
      const starIcon = getByTestId('StarBorderIcon');

      expect(statusChip).toBeDefined();
      expect(starIcon).toBeDefined();
    });

    it('call select schedule', () => {
      const { getAllByRole } = renderCard();

      const [selectButton] = getAllByRole('button');

      fireEvent.click(selectButton);

      expect(mockOnSelect).toBeCalledTimes(1);
    });

    it('call onToggle retire and unretire', () => {
      const { getAllByRole } = renderCard();

      const [, toggleButton] = getAllByRole('button');

      fireEvent.click(toggleButton);

      expect(mockOnToggle).toBeCalledTimes(1);
    });
  });
});
