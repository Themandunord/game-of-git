import * as mongoose from "mongoose";

/**
 * Bulk document storage of Repository Webhook Events
 */
export const RepositoryWebhookSchema = new mongoose.Schema({
  repository: {
    type: String,
    required: true
  },
  eventType: {
    type: String,
    required: true
  },
  action: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  data: {
    type: Object,
    required: true
  }
});
