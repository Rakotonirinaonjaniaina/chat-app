import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/profile.module.css';

export default function Profile() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [bio, setBio] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleBioChange = (event) => {
        setBio(event.target.value);
    };

    const handleUpdateProfile = (event) => {
        event.preventDefault();

        // Code to update profile

        router.push('/');
    };

    return (
        <div className={styles.container}>
            <div className={styles.background}></div>
            <h1 className={styles.title}>Edit Profile</h1>
            <form className={styles.profileForm} onSubmit={handleUpdateProfile}>
                <input
                    type="text"
                    value={username}
                    onChange={handleUsernameChange}
                    placeholder="Username"
                    className={styles.inputText}
                />
                <input
                    type="text"
                    value={bio}
                    onChange={handleBioChange}
                    placeholder="Bio"
                    className={styles.inputText}
                />
                <button type="submit" className={styles.saveButton}>
                    Save
                </button>
            </form>
        </div>
    );
}
