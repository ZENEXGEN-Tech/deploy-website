import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export const ipRateLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "15 m"), // 5 requests per 15 minutes
  analytics: true,
});

export const emailRateLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(3, "1 h"), // 3 requests per hour per email
  analytics: true,
});

export const globalRateLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(100, "1 h"), // 100 total requests per hour
  analytics: true,
});
