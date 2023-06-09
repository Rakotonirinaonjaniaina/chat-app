import React from 'react';
import { useRouter } from 'next/router';

export default function Channel() {
    const router = useRouter();
    const { channel_id } = router.query;

    const handleDeleteChannel = () => {
        // Code to delete channel

        router.push('/channel/create');
    };

    return (
        <>
            <h1>Channel {channel_id}</h1>
            <button onClick={handleDeleteChannel}>Delete Channel</button>
        </>
    );
}
