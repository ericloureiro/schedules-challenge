import { act } from 'react-test-renderer';
import { useQueryDataContext } from 'src/hooks/useQueryData';
import { renderHook } from 'src/tests/customRender';
import { mockLogs, mockSchedules } from 'src/tests/mocks';
import { Schedule } from 'src/types/schedules';

const mockGetAllLogs = jest.fn(() => Promise.resolve(mockLogs));

jest.mock('src/api/logs', () => ({
  getAllLogs: () => mockGetAllLogs(),
}));

const mockGetAllSchedules = jest.fn(() => Promise.resolve(mockSchedules));

jest.mock('src/api/schedules', () => ({
  getAllSchedules: () => mockGetAllSchedules(),
  toggleSchedule: (schedule: Schedule) => Promise.resolve({ ...schedule, isRetired: !schedule.isRetired }),
}));

describe('useQueryData', () => {
  it('should render initial state', () => {
    const {
      result: { current },
    } = renderHook(useQueryDataContext);

    const { allLogs, schedules, selectedSchedule, error, loading, selectedLogs } = current;

    expect(allLogs).toStrictEqual([]);
    expect(schedules).toStrictEqual([]);
    expect(selectedLogs).toStrictEqual([]);

    expect(selectedSchedule).toBeUndefined();

    expect(loading).toBeFalsy();
    expect(error).toBeFalsy();
  });

  it('should fetchAll', async () => {
    const { result } = renderHook(useQueryDataContext);

    expect(result.current.allLogs).toStrictEqual([]);
    expect(result.current.schedules).toStrictEqual([]);

    await act(result.current.fetchAll);

    const { allLogs, schedules } = result.current;

    expect(allLogs).toStrictEqual(mockLogs);
    expect(allLogs).toHaveLength(mockLogs.length);

    expect(schedules).toStrictEqual(mockSchedules);
    expect(schedules).toHaveLength(mockSchedules.length);
  });

  it('should select Schedule', async () => {
    const { result } = renderHook(useQueryDataContext);

    expect(result.current.selectedSchedule).toBeUndefined();

    const [mockSchedule] = mockSchedules;

    await act(() => result.current.selectSchedule(mockSchedule));

    expect(result.current.selectedSchedule).toBe(mockSchedule);
  });

  it('should toggle Schedule', async () => {
    const { result } = renderHook(useQueryDataContext);

    await act(result.current.fetchAll);

    const [schedule] = result.current.schedules;

    await act(() => result.current.toggleScheduleRetire(schedule));

    const newSchedule = result.current.schedules.find(({ id }) => id === schedule.id);

    expect(newSchedule).toMatchObject({ ...schedule, isRetired: !schedule.isRetired });
  });

  it('should handle error state', async () => {
    mockGetAllLogs.mockRejectedValueOnce(Error('Err'));
    mockGetAllSchedules.mockRejectedValueOnce(Error('Err'));

    const { result } = renderHook(useQueryDataContext);

    expect(result.current.error).toBeUndefined();

    await act(result.current.fetchAll);

    expect(result.current.error).toBeTruthy();
  });

  it('should handle loading state', async () => {
    const { result, waitForNextUpdate } = renderHook(useQueryDataContext);

    expect(result.current.loading).toBeFalsy();

    act(result.current.fetchAll);

    expect(result.current.loading).toBeTruthy();

    await waitForNextUpdate();

    expect(result.current.loading).toBeFalsy();
  });
});
