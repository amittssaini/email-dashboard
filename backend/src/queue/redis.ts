import IORedis from "ioredis";

// Connect to Redis running on default localhost:6379
export const redis = new IORedis({
  host: "127.0.0.1",
  port: 6379,
  maxRetriesPerRequest: null,
  enableOfflineQueue: true,  // BullMQ recommends this
});


redis.on("connect", () => {
  console.log("✅ Redis connected");
});

redis.on("error", (err) => {
  console.error("❌ Redis error:", err);
});
