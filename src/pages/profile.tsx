import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function Profile() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [bio, setBio] = useState('');

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handleBioChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setBio(event.target.value);
    };

    const handleUpdateProfile = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Code to update profile

        router.push('/');
    };

    return (
        <>
            <h1>Edit Profile</h1>
            <form onSubmit={handleUpdateProfile}>
                <input type="text" value={username} onChange={handleUsernameChange} placeholder="Username" />
                <textarea value={bio} onChange={handleBioChange} placeholder="Bio"></textarea>
                <button type="submit">Save</button>
            </form>
        </>
    );
}
