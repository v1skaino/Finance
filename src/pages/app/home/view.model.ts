import { useIsFocused } from "@react-navigation/native";
import { format } from "date-fns";
import { useCallback, useEffect, useState } from "react";
import { getBalanceList } from "../../../shared/repositories/app/app.repository";
import { HomeModel, UseHomeViewModel } from "./model";

const useHomeViewModel = ({ navigation }: UseHomeViewModel): HomeModel => {
  const [balanceList, setBalanceList] = useState<BalanceDataModel[]>([]);
  const [movementDate, setMovementDate] = useState(new Date());
  const isFocused = useIsFocused();

  const getMovements = useCallback(async () => {
    const formattedData = format(movementDate, "dd/MM/yyyy");

    const { data }: { data: BalanceDataModel[] } = await getBalanceList({
      date: formattedData,
    });

    setBalanceList(data);

    console.log(data);
  }, [movementDate, setBalanceList]);

  useEffect(() => {
    getMovements();
  }, [getMovements, isFocused]);

  return {
    state: { balanceList },
    methods: {},
  };
};

export { useHomeViewModel };
