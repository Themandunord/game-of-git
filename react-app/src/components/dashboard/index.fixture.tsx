import React from 'react';
import IssuesList from './IssuesList/IssuesList';
import PullRequestList from './PullRequestList/PullRequestList';
import WebhookStream from './WebhookStream/WebhookStream';
import mockRepository from '../../fixtureUtils/mockData/mockRepository';

export default {
    'Issues List': <IssuesList />,
    'PullRequest List': <PullRequestList />,
    'Webhook Stream': <WebhookStream repository={mockRepository} />,
};
