import { Test, TestingModule } from '@nestjs/testing';
import { AppEventService } from './app-event.service';
import ps from '../pubsub';
import { PubSubEngine } from 'type-graphql';
import { APP_EVENT_NAME } from './app-event.resolver';

const psMock = (jest.genMockFromModule<jest.Mocked<PubSubEngine>>(
    '../pubsub'
) as any).default as jest.Mocked<PubSubEngine>;

describe('AppEventService', () => {
    let service: AppEventService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppEventService,
                {
                    provide: 'PUB_SUB',
                    useValue: psMock
                }
            ]
        }).compile();

        service = module.get<AppEventService>(AppEventService);

        jest.resetAllMocks();
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('Dispatching App Events', () => {
        describe('Invoking sendAppEvent', () => {
            it("Will trigger the pubsub.publish once with an 'appEvent' and whatever data is passed in", async () => {
                const payload = {
                    some: 'data',
                    my: {
                        man: 'slow down',
                        number: 3
                    }
                };
                psMock.publish.mockImplementationOnce(
                    async (triggerName: string, payload: any) => {
                        expect(triggerName).toEqual(APP_EVENT_NAME);
                        expect(payload).toEqual(payload);
                    }
                );

                service.sendAppEvent(payload);
                expect(psMock.publish).toBeCalledTimes(1);
                expect(psMock.publish).toBeCalledWith(APP_EVENT_NAME, {
                    appEvent: payload
                });
            });
        });
    });
});
