import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/createChannel.module.css';

export default function CreateChannel() {
    const router = useRouter();
    const [channelName, setChannelName] = useState('');

    const handleChannelNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChannelName(event.target.value);
    };

    const handleCreateChannel = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Code to create channel

        router.push('/channel/[channel_id]', `/channel/${channelName}`);
    };

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <h1 className={styles.title}>Create Channel</h1>
                <form className={styles.form} onSubmit={handleCreateChannel}>
                    <input
                        type="text"
                        value={channelName}
                        onChange={handleChannelNameChange}
                        placeholder="Channel Name"
                        className={styles.input}
                    />
                    <button type="submit" className={styles.button}>Create</button>
                </form>
            </div>
        </div>
    );
}
