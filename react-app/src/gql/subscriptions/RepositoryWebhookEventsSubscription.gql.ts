import gql from 'graphql-tag';

const RepositoryWebhookEventsSubscription = gql`
    subscription($id: ID!) {
        gitHubWebhookEvent(where: { node: { repository: { id: $id } } }) {
            mutation
            node {
                id
                createdAt
                eventType
                action
                sender
            }
        }
    }
`;

export default RepositoryWebhookEventsSubscription;
