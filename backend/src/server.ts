import app from "./app";
import { emailQueue } from "./queue/email.queue";
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



emailQueue.on("error", (err) => {
  console.error("Queue error:", err);
});
