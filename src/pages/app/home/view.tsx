import { Text, View } from "react-native";
import { useGlobal } from "../../../shared/contexts/global/global.context";

export function HomeView(): React.JSX.Element {
  const {
    state: { user },
  } = useGlobal();

  return (
    <View>
      <Text>{JSON.stringify(user)}</Text>
    </View>
  );
}
