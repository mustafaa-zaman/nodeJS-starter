
export const validateUser = (data: any) => {
  const { username, password } = data;

  if (!username || username.length < 3) return false;
  if (!password || password.length < 6) return false;

  return true;
};
    