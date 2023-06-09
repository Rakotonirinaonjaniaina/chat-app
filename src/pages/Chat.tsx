import React, { useEffect, useState } from 'react';
import styles from '../styles/chat.module.css';

const Chat = () => {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const userDataString = localStorage.getItem('user');
        if (userDataString) {
            const parsedUserData = JSON.parse(userDataString);
            setUser(parsedUserData);
        }
    }, []);

    const renderUserDetails = () => {
        return (
            <div>
                <h2>Welcome, {user.name}!</h2>
                <p>Email: {user.email}</p>
                {user.bio && <p>Bio: {user.bio}</p>}
            </div>
        );
    };

    const renderLoginForm = () => {
        return (
            <form>
                <h2>Please log in to use the chat.</h2>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Log in</button>
            </form>
        );
    };

    const renderChatContent = () => {
        return (
            <div>
                {/* Ajoutez ici le contenu du chat, par exemple, une liste de messages */}
            </div>
        );
    };

    return (
        <div>
            <h1>Chat</h1>
            {user ? renderUserDetails() : renderLoginForm()}
            {user && renderChatContent()}
        </div>
    );
};

export default Chat;
