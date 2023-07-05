import axios from 'axios';
import { commentGet } from '../src/modules/Comments.js';
import updateCommentCounter from '../src/modules/commentCounter.js';

jest.mock('axios');

describe('Comments', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('commentGet', () => {
    it('should return comments on successful API response', async () => {
      const mockComments = [{ id: 1, text: 'Comment 1' }, { id: 2, text: 'Comment 2' }];
      axios.get.mockResolvedValueOnce({ status: 200, data: mockComments });

      const comments = await commentGet(1);

      expect(axios.get).toHaveBeenCalledWith(
        'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/T1s4xFdr6wtV60QfASVp/comments?item_id=1',
        { headers: { 'Content-Type': 'application/json' } },
      );
      expect(comments).toEqual(mockComments);
    });

    it('should return an empty array on failed API response', async () => {
      axios.get.mockRejectedValueOnce(new Error('Failed to fetch comments'));

      const comments = await commentGet(1);

      expect(axios.get).toHaveBeenCalledWith(
        'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/T1s4xFdr6wtV60QfASVp/comments?item_id=1',
        { headers: { 'Content-Type': 'application/json' } },
      );
      expect(comments).toEqual([]);
    });
  });

  describe('updateCommentCounter', () => {
    it('should update the comment counter element with the correct number of comments', async () => {
      const mockComments = [{ id: 1, text: 'Comment 1' }, { id: 2, text: 'Comment 2' }];
      axios.get.mockResolvedValueOnce({ status: 200, data: mockComments });

      document.body.innerHTML = '<div class="comment-counter"></div>';
      const commentCounterElement = document.querySelector('.comment-counter');

      await updateCommentCounter(1);

      expect(axios.get).toHaveBeenCalledWith(
        'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/T1s4xFdr6wtV60QfASVp/comments?item_id=1',
        { headers: { 'Content-Type': 'application/json' } },
      );
      expect(commentCounterElement.textContent).toBe('(2)');
    });

    it('should handle API error and set the comment counter element to "0"', async () => {
      axios.get.mockRejectedValueOnce(new Error('Failed to fetch comments'));

      document.body.innerHTML = '<div class="comment-counter"></div>';
      const commentCounterElement = document.querySelector('.comment-counter');

      await updateCommentCounter(1);

      expect(axios.get).toHaveBeenCalledWith(
        'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/T1s4xFdr6wtV60QfASVp/comments?item_id=1',
        { headers: { 'Content-Type': 'application/json' } },
      );
      expect(commentCounterElement.textContent).toBe('(0)');
    });

    it('should not update the comment counter element if it does not exist', async () => {
      const mockComments = [{ id: 1, text: 'Comment 1' }, { id: 2, text: 'Comment 2' }];
      axios.get.mockResolvedValueOnce({ status: 200, data: mockComments });

      document.body.innerHTML = '';
      const commentCounterElement = document.querySelector('.comment-counter');

      await updateCommentCounter(1);

      expect(axios.get).toHaveBeenCalledWith(
        'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/T1s4xFdr6wtV60QfASVp/comments?item_id=1',
        { headers: { 'Content-Type': 'application/json' } },
      );
      expect(commentCounterElement).toBeNull();
    });
  });
});
