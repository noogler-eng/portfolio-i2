import { Redis } from "ioredis";

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

  generateKey(type: string, args: string[]): string {
    return `${type}:${args.join(":")}`;
  }

  async evict(type: string, args: string[]): Promise<void> {
    const key = this.generateKey(type, args);
    await this.client.del(key);
  }

  async set(
    type: string,
    args: string[],
    value: string[],
    expirySeconds: number
  ): Promise<void> {
    const key = this.generateKey(type, args);
    if (expirySeconds) {
      await this.client.set(key, JSON.stringify(value), "EX", expirySeconds);
    } else {
      await this.client.set(key, JSON.stringify(value));
    }
  }

  async get(type: string, args: string[]): Promise<any> {
    const key = this.generateKey(type, args);
    const value = await this.client.get(key);
    return value ? JSON.parse(value) : null;
  }
}
