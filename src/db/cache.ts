import { Redis } from "ioredis";

// we can also use in memory cache
// in memory cache possible only by usage of the map
// map - key, value store (not scalable but it can work)

export default class RedisCache {
  // this client will be only in used when we create an object otherwise
  // it will show red swiggly
  private client: Redis;
  private static instance: RedisCache;

  private constructor(redisUrl: string) {
    this.client = new Redis(redisUrl);
  }

  // singleton pattern has been used here
  // it ensures that there will be only single connection req to the redis
  static getInstance() {
    const redisUrl: string = process.env.REDIS_DB_URL || "";
    if (!this.instance) this.instance = new RedisCache(redisUrl);
    return this.instance;
  }

  generateKey(type: string): string {
    return `${type}}`;
  }

  async evict(type: string): Promise<void> {
    const key = this.generateKey(type);
    await this.client.del(key);
  }

  async set(type: string, value: string, expirySeconds: number): Promise<void> {
    const key = this.generateKey(type);
    if (expirySeconds) {
      await this.client.set(key, value, "EX", expirySeconds);
    } else {
      await this.client.set(key, value);
    }
  }

  async get(type: string): Promise<string[] | null> {
    const key = this.generateKey(type);
    const value = await this.client.get(key);
    return value ? JSON.parse(value) : null;
  }
}
