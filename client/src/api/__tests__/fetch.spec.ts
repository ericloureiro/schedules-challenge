import { fetchApi } from 'src/api/fetch';
import { BASE_URL } from 'src/constants/config';

describe('fetch', () => {
  const mockUrl = '';

  it('should return response as Object', async () => {
    fetchMock.once(JSON.stringify({}), { url: BASE_URL });

    const response = await fetchApi<Object>(mockUrl);

    expect(response).toBeInstanceOf(Object);
  });

  it('should throw error', async () => {
    expect.assertions(1);

    const error = new Error('Err');

    fetchMock.once(() => {
      throw error;
    });

    let err;

    try {
      await fetchApi<Object>(mockUrl);
    } catch (e) {
      err = e;
    }

    expect(error).toBe(err);
  });

  it('should return !response.ok and throw error', async () => {
    expect.assertions(1);

    fetchMock.once(JSON.stringify({}), { url: BASE_URL, status: 500 });

    let err;

    try {
      await fetchApi<Object>(mockUrl);
    } catch (e) {
      err = e;
    }

    expect(err).toBeDefined();
  });
});
