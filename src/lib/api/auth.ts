import client from './client';

export const requestVerify = async (email: string) => {
  try {
    const res = await client.post('/email', {
      email,
    });
    return res.status;
  } catch {
    return null;
  }
};

export const verifyEmail = async (email: string, verifyCode: string) => {
  try {
    const res = await client.patch('/email', {
      email,
      verifyCode,
    });
    return res.status;
  } catch {
    return null;
  }
};

export const register = async (
  name: string,
  email: string,
  password: string,
) => {
  try {
    const res = await client.post('/signup', {
      name: name,
      email: email,
      password: password,
    });
    return res.status;
  } catch {
    return null;
  }
};

export const login = async (email: string, password: string) => {
  try {
    const res = await client.post('/auth', {
      email: email,
      password: password,
    });
    return { status: res.status, body: res.data };
  } catch {
    return null;
  }
};

export const refresh = (refToken: string) => {
  client
    .put(
      '/auth',
      {},
      {
        headers: {
          'X-Refresh-Token': `Bearer ${refToken}`,
        },
      },
    )
    .then((res) => {
      return { status: res.status, body: res.data };
    })
    .catch((e) => {
      return null;
    });
};

export const logout = async (token: string) => {
  try {
    const res = await client.get('/logout', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.status;
  } catch {
    return null;
  }
};
