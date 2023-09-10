import { ActivityIndicator, View } from "react-native";

export const Loader = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f4ff",
      }}
    >
      <ActivityIndicator size="large" color="#131313" />
    </View>
  );
};
