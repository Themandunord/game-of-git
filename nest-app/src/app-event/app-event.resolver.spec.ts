import { Test, TestingModule } from '@nestjs/testing';
import { AppEventResolver } from './app-event.resolver';
import ps from '../pubsub';
import { PubSubEngine } from 'type-graphql';
// const psMock = (jest.genMockFromModule<jest.Mocked<PubSubEngine>>('../pubsub') as any).default as jest.Mocked<PubSubEngine>;

describe('AppEventResolver', () => {
    let resolver: AppEventResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppEventResolver,
                {
                    provide: 'PUB_SUB',
                    useValue: ps
                }
            ]
        }).compile();

        resolver = module.get<AppEventResolver>(AppEventResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });

    // TODO: How to test subscription?
});
