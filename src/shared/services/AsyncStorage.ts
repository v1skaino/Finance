import AsyncStorage from "@react-native-async-storage/async-storage";

const AsyncStorageService = {
  async saveToken(token: string) {
    await AsyncStorage.setItem("@finance_token__", token);
  },
  async clear() {
    await AsyncStorage.clear();
  },
  async getItem(key: string) {
    return await AsyncStorage.getItem(key);
  },
};

export { AsyncStorageService };
