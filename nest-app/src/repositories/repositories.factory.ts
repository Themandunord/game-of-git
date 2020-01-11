import { Repository } from '../generated/prisma-client';

export const repositoryFactory = (repoData?: Partial<Repository>) => {
    const name =
        repoData && repoData.name
            ? repoData.name
            : 'Some Repository Default Name';
    const idExternal =
        repoData && repoData.name
            ? repoData.name
            : 'someIdExternalRepositoriesFactory';
    const createdAtExternal =
        repoData && repoData.createdAtExternal
            ? (repoData.createdAtExternal as any).toISOString()
            : new Date().toISOString();
    const updatedAtExternal =
        repoData && repoData.updatedAtExternal
            ? (repoData.updatedAtExternal as any).toISOString()
            : new Date().toISOString();
    const description =
        repoData && repoData.description ? repoData.description : '';
    const homepageUrl =
        repoData && repoData.homepageUrl ? repoData.homepageUrl : '';
    const url = repoData && repoData.url ? repoData.url : '';
    const owner = repoData && repoData.owner ? repoData.owner : '';
    const isTracked =
        repoData && repoData.isTracked ? repoData.isTracked : false;
    const isFork = repoData && repoData.isFork ? repoData.isFork : false;
    const isLocked = repoData && repoData.isLocked ? repoData.isLocked : false;
    const isPrivate =
        repoData && repoData.isPrivate ? repoData.isPrivate : false;
    const isArchived =
        repoData && repoData.isArchived ? repoData.isArchived : false;
    const isDisabled =
        repoData && repoData.isDisabled ? repoData.isDisabled : false;

    return {
        name,
        idExternal,
        createdAtExternal,
        updatedAtExternal,
        description,
        homepageUrl,
        url,
        owner,
        isTracked,
        isFork,
        isLocked,
        isPrivate,
        isArchived,
        isDisabled
    };
};
