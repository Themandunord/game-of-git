import { RepositoryProviders } from '@game-of-git/common';

export interface AddApiKeyFormData {
    key: string | null;
    name: string | null;
    provider: string | null;
}
