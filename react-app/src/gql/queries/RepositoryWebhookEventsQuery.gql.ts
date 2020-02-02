import gql from 'graphql-tag';

const RepositoryWebhookEventsQuery = gql`
    query RepositoryWebhookEvents($id: ID!) {
        gitHubWebhookEvents(where: { repository: { id: $id } }) {
            id
            createdAt
            eventType
            action
            sender
        }
    }
`;

export default RepositoryWebhookEventsQuery;
