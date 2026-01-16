// import { Worker } from "bullmq";
// import { redis } from "./redis";

// // Create a worker for the "email-queue"
// const worker = new Worker(
//   "email-queue",
//   async (job) => {
//     console.log("📌 Job received:", job.id);
//     console.log("Data:", job.data);
//     // For now, just simulate sending email
//     console.log(`Simulated sending email to: ${job.data.to}`);
//   },
//   { connection: redis }
// );

// worker.on("completed", (job) => {
//   console.log(`✅ Job completed: ${job.id}`);
// });

// worker.on("failed", (job, err) => {
//   console.log(`❌ Job failed: ${job?.id}`, err);
// });

// console.log("🟢 Worker running, listening to email-queue...");


import { Worker } from "bullmq";
import { redis } from "./redis";
import nodemailer from "nodemailer";

const worker = new Worker(
  "email-queue",
  async (job) => {
    const { to, subject, body } = job.data;

    // Create Ethereal test account
    const testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
      host: testAccount.smtp.host,
      port: testAccount.smtp.port,
      secure: testAccount.smtp.secure,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    const info = await transporter.sendMail({
      from: `"Email Dashboard" <${testAccount.user}>`,
      to,
      subject,
      text: body,
    });

    console.log("📧 Email sent:", nodemailer.getTestMessageUrl(info));
  },
  { connection: redis }
);

console.log("🟢 Worker running with Ethereal email support");
