export interface ICreateRepositoryWebhookDto {
    repository: string;
    eventType: string;
    action: string;
    date?: Date;
    data: any;
}
