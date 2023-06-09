import React from 'react';
import { useRouter } from 'next/router';

export default function Message() {
    const router = useRouter();
    const { user_id } = router.query;

    return (
        <>
            <h1>Messages for User {user_id}</h1>
        </>
    );
}
