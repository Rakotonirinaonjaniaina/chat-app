import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function EditChannel() {
    const router = useRouter();
    const { channel_id } = router.query;
    const [channelName, setChannelName] = useState('');

    const handleChannelNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChannelName(event.target.value);
    };

    const handleUpdateChannel = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Code to update channel

        router.push('/channel/[channel_id]', `/channel/${channel_id}`);
    };

    return (
        <>
            <h1>Edit Channel {channel_id}</h1>
            <form onSubmit={handleUpdateChannel}>
                <input type="text" value={channelName} onChange={handleChannelNameChange} placeholder="New Channel Name" />
                <button type="submit">Update</button>
            </form>
        </>
    );
}
