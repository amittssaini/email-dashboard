import { Request, Response } from "express";
import { emailQueue } from "../queue/email.queue";
import { v4 as uuid } from "uuid";

export const scheduleEmail = async (req: Request, res: Response) => {
  try {
    const { to, subject, body, sendAt } = req.body;

    if (!to || !subject || !body || !sendAt) {
      return res.status(400).json({ message: "Missing fields" });
    }

    const emailId = uuid();
    const delay = new Date(sendAt).getTime() - Date.now();

    if (delay < 0) {
      return res.status(400).json({ message: "Send time must be in the future" });
    }

    await emailQueue.add(
      "send-email",
      { emailId, to, subject, body },
      { delay, jobId: emailId } // prevents duplicates
    );

    return res.json({
      message: "Email scheduled successfully",
      emailId,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal error" });
  }
};
