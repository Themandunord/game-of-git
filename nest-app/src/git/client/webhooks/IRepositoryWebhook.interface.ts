// import { Document } from 'mongoose';

// export interface IRepositoryWebhook extends Document {
export interface IRepositoryWebhook {
    repository: string;
    eventType: string;
    action: string;
    date: Date;
    data: any;
}
