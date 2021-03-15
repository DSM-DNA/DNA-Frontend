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

export const getPost = async (token: string, type: string, page: number) => {
  try {
    const res = client.get(`/timeline/${type}`, {
      params: { size: 6, page: page },
      headers: { Authorization: `Bearer ${token}` },
    });
    return res;
  } catch {
    return null;
  }
};

export const removePost = async (token: string, id: number) => {
  try {
    const res = client.delete(`/timeline/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res;
  } catch {
    return null;
  }
};
