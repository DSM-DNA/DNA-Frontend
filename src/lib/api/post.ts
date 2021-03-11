import client from './client';

export const writePost = async (
  token: string,
  { title, content, type }: { title: string; content: string; type: string },
) => {
  try {
    const res = client.post(
      '/timeline',
      { title: title, content: content, type: type },
      { headers: { Authorization: `Bearer ${token}` } },
    );
    return res;
  } catch {
    return null;
  }
};

export const getPost = async (token: string, type: string) => {
  try {
    const res = client.get(`/timeline/${type}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res;
  } catch {
    return null;
  }
};
