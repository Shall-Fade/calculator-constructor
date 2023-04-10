import { createStore } from "vuex";

const store = createStore({
  state: {
    openTab: "Constructor",
    result: "",
    previousValue: "",
    operation: "",
    operatorIsClicked: false,
  },
  mutations: {
    CHANGE_OPEN_TAB(state, openTab) {
      state.openTab = openTab;
    },
    ADD_RESULT(state, result) {
      state.result = result;
    },
    ADD_PREVIOUS_VALUE(state, previousValue) {
      state.previousValue = previousValue;
    },
    ADD_OPERATION(state, operation) {
      state.operation = operation;
    },
    TOGGLE_OPERATOR_CLICKED(state, operatorIsClicked) {
      state.operatorIsClicked = operatorIsClicked;
    },
  },
});

export default store;
