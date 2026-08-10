import React, { createContext, useState, useEffect } from 'react';
import { loginApi, registerApi } from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (e) {
                localStorage.removeItem('user');
            }
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        const res = await loginApi({ email, password });
        if (res.data && res.data.success) {
            const userData = res.data.data;
            setUser(userData);
            localStorage.setItem('user', JSON.stringify(userData));
            return userData;
        } else {
            throw new Error(res.data.message || 'Login failed');
        }
    };

    const register = async (formData) => {
        const res = await registerApi(formData);
        if (res.data && res.data.success) {
            const userData = res.data.data;
            setUser(userData);
            localStorage.setItem('user', JSON.stringify(userData));
            return userData;
        } else {
            throw new Error(res.data.message || 'Registration failed');
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
