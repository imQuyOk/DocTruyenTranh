import { useEffect, useState } from "react";
import storage, { setScrollDocument } from '../utils';
import Context from "./Context";
import {googleLogout} from '@react-oauth/google';

function Provider({ children }) {
    const [width, setWidth] = useState(window.innerWidth);
    const [isOpenDiaLog, setIsOpenDiaLog] = useState(false);
    const [isLogin, setIsLogin] = useState(() => {
        const isLogin = storage.get('user', false);
        return !!isLogin;
    });
    const [user, setUser] = useState(() => storage.get('user', null));
    const [theme, setTheme] = useState(() => storage.get('theme', 'light'));

    const [quantityComicArchive, setQuantityComicArchive] = useState(() => {
        const comicStorage = storage.get('comic-storage', {});
        return comicStorage[user?.email]?.length || 0;
    });

    const [quantityComicHistory, setQuantityComicHistory] = useState(() => {
        const historyStorage = storage.get('history-storage', {});
        if (!historyStorage[user?.email]) {
            historyStorage[user?.email] = {};
        }
        return Object.keys(historyStorage[user?.email]).length || 0;
    });

    useEffect(() => {
        setQuantityComicArchive(() => {
            const comicStorage = storage.get('comic-storage', {});
            return comicStorage[user?.email]?.length || 0;
        });

        setQuantityComicHistory(() => {
            const historyStorage = storage.get('history-storage', {});
            if (!historyStorage[user?.email]) {
                historyStorage[user?.email] = {};
            }
            return Object.keys(historyStorage[user?.email]).length || 0;
        });
    }, [user]);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        storage.set('theme', theme);
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.toggle(theme);
    }, [theme]);

    useEffect(() => {
        setScrollDocument(isOpenDiaLog);
    }, [isOpenDiaLog]);

    const handleLogout = () => {
        googleLogout();
        setUser(null);
        setIsLogin(false);
        localStorage.removeItem('user');
        window.location.href = '/';
    };

    const value = {
        isLogin,
        user,
        width,
        theme,
        isOpenDiaLog,
        quantityComicArchive,
        quantityComicHistory,
        setUser,
        setIsLogin,
        handleLogout,
        setTheme,
        setIsOpenDiaLog,
        setQuantityComicArchive,
        setQuantityComicHistory,
    };

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
}

export default Provider;
