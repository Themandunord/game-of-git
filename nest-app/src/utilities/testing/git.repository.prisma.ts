import { PrismaService } from '../../prisma/prisma.service';
import {
    RepositoryCreateInput,
    Repository
} from '../../generated/prisma-client';
import { UserIdOrEmailArgs } from '@game-of-git/common';

interface RepositoryData {
    name: string;
    idExternal: string;
    createdAtExternal: string;
    updatedAtExternal: string;
    description: string;
    homepageUrl: string;
    url: string;
    owner: string;
    isTracked: boolean;
    isFork: boolean;
    isLocked: boolean;
    isPrivate: boolean;
    isArchived: boolean;
    isDisabled: boolean;
    sshUrl?: string;
}
const REPOSITORY = process.env.GIT_TESTING_REPOSITORY;

export const createOrRetrieveRepository = async (
    prisma: PrismaService,
    user: any,
    appKey: any,
    repositoryData: RepositoryData
): Promise<Repository> => {
    let name = REPOSITORY;

    if (repositoryData.name) {
        name = repositoryData.name;
        const existingRepository = await prisma.client.repository({
            name
        });
        if (existingRepository) {
            return existingRepository;
        }
    }

    const createRepositoryData: RepositoryCreateInput = {
        name,
        appKey: {
            connect: {
                id: appKey.id
            }
        },
        addedBy: {
            connect: {
                id: user.id
            }
        },
        ...repositoryData
    };
    const created = await prisma.client.createRepository(createRepositoryData);

    return created;
};

export const clearRepository = async (
    prisma: PrismaService,
    repositoryName: string
) => {
    return await prisma.client.deleteRepository({ name: repositoryName });
};

export const clearUserRepositories = async (
    prisma: PrismaService,
    userIdOrEmailArgs: UserIdOrEmailArgs
) => {
    return await prisma.client.deleteManyRepositories({
        addedBy: userIdOrEmailArgs
    });
};
