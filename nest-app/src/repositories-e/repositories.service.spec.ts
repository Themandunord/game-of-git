import { RepositoriesResolver } from './repositories.resolver';
import { Test, TestingModule } from '@nestjs/testing';
import { RepositoriesService } from './repositories.service';
import { WebhooksModule } from '../git/client/webhooks/webhooks.module';
import { WebhooksService } from '../git/client/webhooks/webhooks.service';

import ps from '../pubsub';

const gitClientServiceMock = jest.mock('./../git/client/git-client.service');
const webhooksServiceMock = jest.mock(
    './../git/client/webhooks/webhooks.service'
);
const repositoriesResolverMock = jest.mock('./repositories.resolver');

describe('RepositoriesService', () => {
    let service: RepositoriesService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [WebhooksModule],
            providers: [
                RepositoriesService,
                RepositoriesResolver,
                {
                    provide: 'PUB_SUB',
                    useValue: ps
                }
            ]
        })
            .overrideProvider(RepositoriesResolver)
            .useValue(repositoriesResolverMock)
            .overrideProvider(WebhooksService)
            .useValue(webhooksServiceMock)
            .compile();

        service = module.get<RepositoriesService>(RepositoriesService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    xdescribe('Retriving the Repository Selection Set', () => {});

    xdescribe('Retrieving Repositories', () => {});

    xdescribe('Retrieving Repositories from GitHub', () => {});

    xdescribe("Creating a Respotiroy Record and Updating it's isTracked status", () => {});
});
