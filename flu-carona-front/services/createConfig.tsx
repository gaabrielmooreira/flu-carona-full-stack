export default function createConfig(token: string) {
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
};