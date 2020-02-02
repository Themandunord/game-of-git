import React from 'react';
import { RepositoryListDataItem } from '../../../pages/RepositoryList/types';

interface WebhookStreamProps {
    repository: RepositoryListDataItem;
}

const WebhookStream: React.FC<WebhookStreamProps> = ({ repository }) => {
    return <p>Webhook Stream</p>;
};

export default WebhookStream;
