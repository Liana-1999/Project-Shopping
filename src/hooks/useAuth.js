import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { findUser } from '../data/users';

export const useAuth = () => {
    const navigate = useNavigate();
    const [auth, setAuth] = useState({ isLoggedIn: false, user: null  });

    useEffect(() => {
        const loggedUser = localStorage.getItem('auth');

        if (loggedUser) {
            setAuth(JSON.parse(loggedUser));
            navigate('/');
        } else {
            navigate('/signin');
        }
    }, []);

    const signIn = (username, password) => {
        const user = findUser(username);

        if (user) {
            const storeUser = { isLoggedIn: true, user: user };

            localStorage.setItem('auth', JSON.stringify(storeUser));

            setAuth(storeUser);

            return user;
        }

        return null;
    };

    const signOut = () => {
        localStorage.clear();
        setAuth({ isLoggedIn: false, user: null });
    };


    return {
        auth,
        signIn,
        signOut,
    };
};
