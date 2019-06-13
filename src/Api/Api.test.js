import fetchData from './index';

const API_URL = 'https://jsonplaceholder.typicode.com/todos/1';

const makeApiCall = async (url) => {
  const response = await fetchData(url);
  return response;
};

describe('API Call', () => {
  test('the fetch responds with data containing ID', async () => {
    const data = await makeApiCall(API_URL);

    await expect(data).toHaveProperty('id');
  });
});
