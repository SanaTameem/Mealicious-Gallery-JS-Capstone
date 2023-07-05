import homeItemCounter from '../src/modules/homeItemCounter.js';

describe('homeItemCounter', () => {
  it('should return the correct count of meals', async () => {
    // Mock the fetch response
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({
        meals: [{}, {}, {}],
      }),
    });

    const count = await homeItemCounter();
    expect(count).toBe(3);
  });

  it('should handle an empty response', async () => {
    // Mock the fetch response
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({
        meals: [],
      }),
    });

    const count = await homeItemCounter();
    expect(count).toBe(0);
  });
});
