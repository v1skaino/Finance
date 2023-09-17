import Ionicons from "@expo/vector-icons/Ionicons";
import { FlatList, ListRenderItem, Text } from "react-native";
import { styled } from "styled-components/native";
import { BalanceListItem } from "../../../shared/components/balanceItem/balanceItem";
import { TransactionTile } from "../../../shared/components/transactionTile/transactionTile";
import {
  BalanceDataModel,
  TransactionsDataModel,
} from "../../../shared/repositories/app/app.model";
import { HomeViewModel } from "./model";
import { useHomeViewModel } from "./view.model";

export function HomeView({ navigation }: HomeViewModel): React.JSX.Element {
  const {
    state: { balanceList, transactions },
    methods: { deleteTransaction },
  } = useHomeViewModel({ navigation });

  const renderItem: ListRenderItem<BalanceDataModel> = ({ item }) => (
    <BalanceListItem {...item} />
  );

  const renderItemTransaction: ListRenderItem<TransactionsDataModel> = ({
    item,
  }) => <TransactionTile {...item} deleteClick={deleteTransaction} />;

  return (
    <Background>
      <ListBalance
        data={balanceList}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item: BalanceDataModel) => item.tag}
      />
      <Transactions>
        <Filter>
          <Ionicons name="filter" size={18} />
          <Text style={{ fontSize: 18 }}>Últimas Movimentações</Text>
        </Filter>
        <ListTransactions
          data={transactions}
          renderItem={renderItemTransaction}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item: TransactionsDataModel) => item.id}
        />
      </Transactions>
    </Background>
  );
}

const Background = styled.View`
  flex: 1;
  background-color: #fff;
`;

const ListBalance = styled(FlatList<BalanceDataModel>)`
  max-height: 190px;
  padding: 10px 0px;
`;

const Transactions = styled.View`
  background-color: #f0f4ff;
  padding: 20px 20px 40px 20px;
  flex: 1;
  row-gap: 10px;
`;

const ListTransactions = styled(FlatList<TransactionsDataModel>)`
  background-color: #fff;
  border-radius: 5px;
`;

const Filter = styled.TouchableOpacity`
  flex-direction: row;
  gap: 5px;
`;
