import { MMKV } from "react-native-mmkv";

export const storage = new MMKV();

export function getUserStorage(userId: string) {
  return new MMKV({
    id: `user-${userId}-storage`,
  });
}
