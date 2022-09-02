<template>
  <addition-form />
  <product-list ref="productList" />
</template>

<script>
  
import ProductList from "./components/ProductList.vue";
import AdditionForm from "./components/AdditionForm.vue";

export default {
  name: "App",
  components: {
    AdditionForm,
    ProductList,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;900&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  display: flex;
  justify-content: center;
  background: rgba(255, 254, 251, 0.8);
}
#app {
  font-family: Source Sans Pro, Avenir, Helvetica, Arial, sans-serif;
  max-width: 1440px;
  flex-grow: 1;
  padding: 32px;
  display: flex;
  gap: 16px;
}

@media (max-width: 1023px) {
  #app {
    flex-wrap: wrap;
  }
}

//убираем стрелочки у инпутов типа номер
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type="number"],
input[type="number"]:hover,
input[type="number"]:focus {
  appearance: none;
  -moz-appearance: textfield;
}
</style>
