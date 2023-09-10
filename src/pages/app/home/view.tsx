import { FlatList, ListRenderItem } from "react-native";
import { styled } from "styled-components/native";
import { BalanceListItem } from "../../../shared/components/balanceItem/balanceItem";
import { HomeViewModel } from "./model";
import { useHomeViewModel } from "./view.model";

export function HomeView({ navigation }: HomeViewModel): React.JSX.Element {
  const {
    state: { balanceList },
    methods: {},
  } = useHomeViewModel({ navigation });

  const renderItem: ListRenderItem<BalanceDataModel> = ({ item }) => (
    <BalanceListItem {...item} />
  );

  return (
    <Background>
      <ListBalance
        data={balanceList}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item: BalanceDataModel) => item.tag}
      />
    </Background>
  );
}

const Background = styled.View`
  flex: 1;
  background-color: #f0f4ff;
`;

const ListBalance = styled(FlatList<BalanceDataModel>)`
  max-height: 190px;
`;
