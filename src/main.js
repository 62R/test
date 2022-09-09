import { createApp } from "vue";
import App from "./App.vue";


const app = createApp(App);

app.config.globalProperties.$filters = {
  /**
   * Фильтр разбивает число на разряды по тысячам.
   * @param {number} price 
   * @returns {string}
   */
  priceWithSpace(price) {
    return price.toLocaleString('ru-RU');
  }
}

app.mount('#app');

