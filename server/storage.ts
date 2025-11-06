import type { IStorage as IStoragePg } from "./storage.postgres";
import { DatabaseStorage } from "./storage.postgres";
import type { IStorage as IStorageMongo } from "./storage.mongo";
import { MongoStorage } from "./storage.mongo";

export type IStorage = IStoragePg & IStorageMongo;

function createStorage(): IStorage {
  const kind = (process.env.STORAGE || "postgres").toLowerCase();
  if (kind === "mongo" || kind === "mongodb") {
    return new (MongoStorage as any)();
  }
  return new (DatabaseStorage as any)();
}

export const storage = createStorage();
