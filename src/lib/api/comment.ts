import client from './client';

export const getComments = async (token: string, timelineId: number) => {
  try {
    const res = client.get(`/comment/${timelineId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res;
  } catch {
    return null;
  }
};

export const removeComment = async (token: string, commentId: number) => {
  try {
    const res = client.delete(`/comment/${commentId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res;
  } catch {
    return null;
  }
};

export const writeComment = async (
  token: string,
  timelineId: number,
  content: string,
) => {
  try {
    const res = client.post(
      '/comment',
      { timelineId: timelineId, content: content },
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    return res;
  } catch {
    return null;
  }
};
