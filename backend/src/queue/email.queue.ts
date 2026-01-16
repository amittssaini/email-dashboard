import { Queue } from "bullmq";
import { redis } from "./redis";

// This queue will handle all email scheduling
export const emailQueue = new Queue("email-queue", {
  connection: redis,
});
