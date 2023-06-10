import React from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/messagePage.module.css';
export default function Message() {
    const router = useRouter();
    const { user_id } = router.query;

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <h1>Messages for User {user_id}</h1>
            </div>
        </div>
    );
}
