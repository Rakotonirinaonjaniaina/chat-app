import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/login.module.css';

interface User {
    email: string;
    password: string;
}

export default function Login() {
    const router = useRouter();
    const [user, setUser] = useState<User>({ email: '', password: '' });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        localStorage.setItem('user', JSON.stringify(user));

        router.push('/chat');
    };

    return (
        <>
            <div className={styles.background}></div>
            <div className={styles.container}>
                <h1 className={styles.title}>Login Form</h1>
                <form className={styles.loginForm} onSubmit={handleLogin}>
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        placeholder="Your email..."
                        className={styles['input-email']}
                    />
                    <input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        placeholder="Your password..."
                        className={styles['input-password']}
                    />
                    <button type="submit" className={styles['login-button']}>
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
}
