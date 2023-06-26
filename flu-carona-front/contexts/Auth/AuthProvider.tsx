import { ReactNode, useEffect, useState } from 'react';
import { AuthContext, AuthContextState } from './AuthContext';
import { useRouter } from 'next/router';

function AuthProvider({ children }: { children: ReactNode }) {
  const [userAuth, setUserAuth] = useState<AuthContextState>({token: ''});
  const router = useRouter();

  useEffect(() => {
    const userJson = localStorage.getItem('user');
    const localUser: null | { token: string } = userJson ? JSON.parse(userJson) : null;
    console.log(localUser);
    if (localUser) {
      setUserAuth(localUser);
    } else if (router.pathname !== '/sign-up' && router.pathname !== '/sign-in') {
      router.push('/sign-in');
    }
  }, []);

  return (
    <AuthContext.Provider value={{userAuth, setUserAuth}}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider };
