import { createApp } from "vue";
import "./index.css";
import store from "./store";
import App from "./App.vue";
import BaseButton from "./components/BaseButton.vue";

const app = createApp(App);

app.component("BaseButton", BaseButton);

app.use(store);

app.mount("#app");
