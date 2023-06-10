import React from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/channelEdit.module.css';

export default function ChannelEdit() {
    const router = useRouter();
    const { channel_id } = router.query;

    const handleSaveChanges = () => {
        // Code to save changes

        router.push('/channel/edit/[channel_id]', `/channel/edit/${channel_id}`);
    };

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <h1 className={styles.title}>Edit Channel {channel_id}</h1>
                <button className={styles.saveButton} onClick={handleSaveChanges}>Save Changes</button>
            </div>
        </div>
    );
}
