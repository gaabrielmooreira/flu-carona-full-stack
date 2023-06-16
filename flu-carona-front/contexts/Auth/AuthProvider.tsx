import { ReactNode, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { useRouter } from 'next/router';

function AuthProvider({ children }: { children: ReactNode }) {
  const [userInfo, setUserInfo] = useState({});
  const router = useRouter();

  useEffect(() => {
    const userJson = localStorage.getItem('user');
    const localUser: null | { token: string } = userJson ? JSON.parse(userJson) : null;
    if (localUser) {
      setUserInfo(localUser);
    } else if (router.pathname !== '/sign-up' && router.pathname !== '/sign-in') {
      router.push('/sign-in');
    }
  }, []);

  return (
    <AuthContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider };
