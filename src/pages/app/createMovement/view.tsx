import { SafeAreaView } from "react-native-safe-area-context";
import { styled } from "styled-components/native";
import { MainButton } from "../../../shared/components/button";
import { Input } from "../../../shared/components/input/input";
import { Switch } from "../../../shared/components/switch/switch";
import { CreateMovementViewModel } from "./model";
import { useCreateMovementViewModel } from "./view.model";

export function CreateMovementView({
  navigation,
}: CreateMovementViewModel): React.JSX.Element {
  const {
    state: { currency, description, type, formValidator, loader },
    methods: { setCurrency, setDescription, setType, submit },
  } = useCreateMovementViewModel({ navigation });

  return (
    <Background>
      <SafeAreaView style={{ alignItems: "center" }}>
        <FormControl>
          <ComponentWrapper>
            <Input
              placeholder="Descrição do registro"
              maxLength={30}
              value={description}
              onChangeText={setDescription}
              error={formValidator.description}
            />
          </ComponentWrapper>
          <ComponentWrapper>
            <Input
              placeholder="Valor do registro"
              keyboardType="numeric"
              value={currency}
              onChangeText={setCurrency}
              error={formValidator.currency}
            />
          </ComponentWrapper>
          <ComponentWrapper>
            <Switch type={type} updateType={setType} />
          </ComponentWrapper>
          <ComponentWrapper>
            <MainButton
              label="Adicionar"
              onPress={submit}
              bgColor="#00b94a"
              loader={loader}
            />
          </ComponentWrapper>
        </FormControl>
      </SafeAreaView>
    </Background>
  );
}

const Background = styled.View`
  flex: 1;
  background-color: #f0f4ff;
`;

const FormControl = styled.View`
  display: flex;
  align-items: center;
`;

const ComponentWrapper = styled.View`
  flex-direction: row;
  margin-bottom: 15px;
  width: 90%;
`;
