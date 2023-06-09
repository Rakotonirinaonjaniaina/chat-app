import React, { useState } from 'react';
import { useRouter } from 'next/router';

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
        <>
            <h1>Create Channel</h1>
            <form onSubmit={handleCreateChannel}>
                <input type="text" value={channelName} onChange={handleChannelNameChange} placeholder="Channel Name" />
                <button type="submit">Create</button>
            </form>
        </>
    );
}
