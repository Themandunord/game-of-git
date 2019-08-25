import { Document } from "mongoose";

export interface IRepositoryWebhook extends Document {
  repository: string;
  eventType: string;
  action: string;
  date: Date;
  data: any;
}
