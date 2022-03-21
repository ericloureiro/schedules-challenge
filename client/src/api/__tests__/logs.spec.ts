import { getAllLogs } from 'src/api/logs';
import { SCHEDULE_LOGS } from 'src/constants/api';
import { BASE_URL } from 'src/constants/config';
import { mockLogs } from 'src/tests/mocks';

describe('logs', () => {
  it('should GET all logs', async () => {
    fetchMock.once(JSON.stringify(mockLogs), { url: BASE_URL + '/' + SCHEDULE_LOGS });

    const response = await getAllLogs();

    expect(response).toMatchObject(mockLogs);
  });
});
