import Icon from "@expo/vector-icons/MaterialIcons";
import { Dispatch, SetStateAction, useState } from "react";
import {
  Modal,
  ModalProps,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Calendar, DateData, LocaleConfig } from "react-native-calendars";
import { MarkedDates, Theme } from "react-native-calendars/src/types";
import styled from "styled-components/native";
import { ptBr } from "../../utils/calendarLocale";
import { MainButton } from "../button";

LocaleConfig.locales["pt-br"] = ptBr;
LocaleConfig.defaultLocale = "pt-br";

interface CalendarModalProps extends ModalProps {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  filter: (selectedDate: Date) => Promise<void>;
}

export const CalendarModal = ({
  setShowModal,
  filter,

  ...rest
}: CalendarModalProps) => {
  const [dateNow, setDateNow] = useState(new Date());
  const [markedDates, setMarkedDates] = useState({});

  const calendarTheme: Theme = {
    todayTextColor: "#FF0000",
    selectedDayBackgroundColor: "#00adf5",
    selectedDayTextColor: "#fff",
  };

  const selectDay = (date: DateData) => {
    let markedDay: MarkedDates = {};

    markedDay[date.dateString] = {
      selected: true,
      selectedColor: "#3b3bbf",
      textColor: "#fff",
    };

    setMarkedDates(markedDay);
    setDateNow(new Date(date.dateString));
  };

  const searchBtnClickAction = () => {
    setShowModal(false);
    filter(dateNow);
  };

  return (
    <Modal {...rest}>
      <Backdrop>
        <TouchableWithoutFeedback onPress={() => setShowModal(false)}>
          <View style={{ flex: 1 }} />
        </TouchableWithoutFeedback>
        <Wrapper>
          <TouchableOpacity
            style={{ alignSelf: "center" }}
            onPress={() => setShowModal(false)}
          >
            <Icon name="arrow-drop-down" size={24} color="#5b5b5b" />
          </TouchableOpacity>
          <Calendar
            onDayPress={selectDay}
            markedDates={markedDates}
            enableSwipeMonths
            theme={calendarTheme}
          />
          <MainButton label="Buscar" onPress={searchBtnClickAction} />
        </Wrapper>
      </Backdrop>
    </Modal>
  );
};

const Backdrop = styled.View`
  background-color: rgba(0, 0, 0, 0.5);
  flex: 1;
`;

const Wrapper = styled.View`
  background-color: #fff;
  padding: 10px;
  border-radius: 20px 20px 0px 0px;
  flex: 2;
`;
