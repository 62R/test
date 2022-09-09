<template>
  <section class="addindion-section">
    <h2 class="header">Добавление товара</h2>
    <form
      class="addition-form"
      :class="{ 'addition-form_pushed': isPush }"
      @submit.prevent="validate"
      @input="checkValid"
    >
      <fieldset class="input-field">
        <label for="name"
               class="input-label">
          Наименование товара
          <span class="dot"></span>
        </label>
        <input
          v-model="product.name"
          class="input-element"
          name="name"
          type="text"
          placeholder="Введите наименование товара"
          @input="checkInput('name')"
        />
        <span v-show="errorMsg.name"
              class="input-error">
          Поле является обязательным
        </span>
      </fieldset>

      <fieldset class="input-field">
        <label for="discription"
               class="input-label">Описание товара</label>
        <textarea
          v-model="product.discription"
          class="textarea-element"
          name="discription"
          placeholder="Введите описание товара"
        ></textarea>
      </fieldset>

      <fieldset class="input-field">
        <label for="link"
               class="input-label">
          Ссылка на изображение товара
          <span class="dot"></span>
        </label>
        <input
          v-model="product.link"
          class="input-element"
          name="link"
          type="url"
          placeholder="Введите ссылку"
          @input="checkInput('link')"
        />
        <span v-show="errorMsg.link"
              class="input-error">
          Поле является обязательным
        </span>
      </fieldset>

      <fieldset class="input-field">
        <label for="price"
               class="input-label">
          Цена товара
          <span class="dot"></span>
        </label>
        <input
          v-model="modelPrice"
          class="input-element"
          name="price"          
          placeholder="Введите цену"
          @input="checkInput('price')"
          @focus="isChange = true"
          @blur="isChange = false"
        />
        <span v-show="errorMsg.price"
              class="input-error">
          Поле является обязательным
        </span>
      </fieldset>

      <button
        class="submit-btn"
        type="submit"
        :class="{ 'submit-btn_disable': !isValid, 'submit-btn_active':isValid}"
      >
        Добавить товар
      </button>
    </form>
  </section>
</template>

<script>
export default {
  name: "AdditionForm",
  props: {},
  data() {
    return {
      product: {
        name: "",
        discription: "",
        link: "",
        price: "",
      },
      errorMsg: {
        name: false,
        link: false,
        price: false,
      },
      isValid: false,
      isPush: false,
      isChange: false,
    };
  },
  computed: {
    modelPrice: {
      get() {
        return this.isChange ? this.product.price : this.$filters.priceWithSpace(this.product.price);
      },
      set(value) {
        const newPrice = +value.replace(/\s/g, "");
        if (!isNaN(newPrice)) {
          this.product.price = newPrice;
          this.$emit('input', this.product.price); 
        }
      },
    },
  },
  methods: {
    checkValid() {
      for (let item in this.errorMsg) {
        if (this.product[item] === "") {
          this.isValid = false;
          return;
        }
      }
      this.isValid = true;
    },
    checkInput(item) {
      this.errorMsg[item] = true;
      if (
        (this.product[item] > 0) | (this.product[item].length > 0) &&
        this.errorMsg[item]
      ) {
        this.errorMsg[item] = false;
      }
    },
    setErrorActive() {
      for (let item in this.errorMsg) {
        this.checkInput(item);
      }
    },
    validate() {
      if (this.isValid === false) {
        this.setErrorActive();
        return;
      }
      this.$parent.$refs.productList.addProduct({ ...this.product, id: 10 });
      this.product = {
        name: "",
        discription: "",
        link: "",
        price: "",
      };
      this.isValid = false;
      this.isPush = true;
      setTimeout(() => {
        this.isPush = false;
      }, 500);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@mixin input-style {
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
}

.addindion-section {
  width: 100%;
}

.addition-form {
  display: flex;
  flex-direction: column;
  position: sticky;

  margin: 0 auto;
  top: 24px;
  width: 332px;
  padding: 24px;

  transition: box-shadow 0.5s;

  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;

  &_pushed {
    box-shadow: 0px 20px 30px rgba(123, 174, 115, 0.5),
      0px 6px 10px rgba(123, 174, 115, 0.5);
  }
}
.header {
  margin: 0 0 16px 0;

  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
  color: #3f3f3f;
}
.submit-btn {
  padding: 11px 95px;
  border: none;
  border-radius: 10px;
  margin-top: 8px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  letter-spacing: -0.02em;

  transition: box-shadow 0.3s, background-color 0.3s;
  &:hover {
    cursor: pointer;
  }

  &_active {
    background: #7bae73;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    color: #ffffff;

    &:hover {
      box-shadow: 0px 0px 12px rgba(123, 174, 115, 1);
    }
  }

  &_disable {
    color: #b4b4b4;
    background: #eeeeee;

    &:hover {
      box-shadow: 0px 0px 12px rgba(255, 132, 132, 1);
    }
  }
}
.input-field {
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;

  border: none;
  margin: none;
  padding: 0 0 16px 0;
}
.input-label {
  position: relative;

  text-align: left;
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  letter-spacing: -0.02em;
  color: #49485e;
}
.dot {
  display: inline-block;
  position: absolute;
  top: 0;
  width: 4px;
  height: 4px;

  background: #ff8484;
  border-radius: 4px;
}
.input-element {
  @include input-style();
  padding: 10px 16px;

  border: 1px solid transparent;
  background: #fffefb;
  border-radius: 4px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

  color: #3f3f3f;
  &::placeholder {
    @include input-style();
    color: #b4b4b4;
  }
  &_error {
    border-color: #ff8484;
  }
}
.textarea-element {
  @include input-style();

  height: 108px;
  padding: 10px 16px;

  resize: none;
  border: none;
  background: #fffefb;
  border-radius: 4px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

  color: #3f3f3f;
  &::placeholder {
    @include input-style();
    color: #b4b4b4;
  }
}
.input-error {
  position: absolute;
  bottom: 2px;

  font-weight: 400;
  font-size: 8px;
  line-height: 10px;
  letter-spacing: -0.02em;
  color: #ff8484;
}

@media (max-width: 1139px) {
  .addition-form {
    top: 8px;
  }
}

@media (max-width: 1023px) {
  .addition-form {
    position: unset;
    top: 8px;
  }
}
</style>
