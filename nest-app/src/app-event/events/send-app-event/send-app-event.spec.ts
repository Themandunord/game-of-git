import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppEventModule } from '../../app-event.module';
import { AppEventService } from '../../app-event.service';
import { SendAppEvent } from './send-app-event.event';
import { SendAppEventHandler } from './send-app-event.handler';

jest.mock('../../app-event.service');

describe('Send App Event', () => {
    let service: AppEventService;
    let app: INestApplication;
    let sendAppEventHandler: SendAppEventHandler;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [AppEventModule],
            providers: [AppEventService]
        }).compile();

        service = module.get<AppEventService>(AppEventService);
        sendAppEventHandler = module.get<SendAppEventHandler>(
            SendAppEventHandler
        );

        jest.resetAllMocks();
    });

    describe('Testing Scenario Setup', () => {
        it('The service mock to be defined', () => {
            expect(service).toBeDefined();
        });
        it('The appEventHandler must be defined', () => {
            expect(sendAppEventHandler).toBeInstanceOf(SendAppEventHandler);
        });
    });

    describe('Events and Handlers', () => {
        it('Triggers AppEventService.sendAppEvent once', async () => {
            const payload = {
                some: 'data',
                my: {
                    man: 'slow down',
                    number: 3
                }
            };
            const eventType = 'CustomAppEvent';

            const event = new SendAppEvent(eventType, payload);
            service.sendAppEvent = jest.fn(async () => {});

            sendAppEventHandler.handle(event);

            expect(service.sendAppEvent).toBeCalledTimes(1);
            expect(service.sendAppEvent).toBeCalledWith({
                type: eventType,
                data: JSON.stringify(payload)
            });
        });
    });
});
