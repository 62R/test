<template>
  <section class="products">
    <div class="sortList__wrap">
      <ul
        class="sortList"
        :class="{ sortList_open: sortIsOpen }"
        @click="sortIsOpen = !sortIsOpen"
      >
        <li
          class="sortList__li sortList__li_disable"
          :class="{ sortList__li_select: '' === sortReq }"
        >
          По умолчанию
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="6"
            viewBox="0 0 8 6"
            fill="none"
          >
            <path
              d="M7.48532 1.24264L4.24268 4.48528L1.00003 1.24264"
              stroke="#b4b4b4"
            />
          </svg>
        </li>
        <li
          class="sortList__li"
          :class="{ sortList__li_select: 'nameAToZ' === sortReq }"
          @click="changeSortReq('nameAToZ')"
        >
          По имени
          <svg xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 512 512">
            <!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M239.6 373.1c11.94-13.05 11.06-33.31-1.969-45.27c-13.55-12.42-33.76-10.52-45.22 1.973L160 366.1V64.03c0-17.7-14.33-32.03-32-32.03S96 46.33 96 64.03v302l-32.4-35.39C51.64 317.7 31.39 316.7 18.38 328.7c-13.03 11.95-13.9 32.22-1.969 45.27l87.1 96.09c12.12 13.26 35.06 13.26 47.19 0L239.6 373.1zM448 416h-50.75l73.38-73.38c9.156-9.156 11.89-22.91 6.938-34.88S460.9 288 447.1 288H319.1C302.3 288 288 302.3 288 320s14.33 32 32 32h50.75l-73.38 73.38c-9.156 9.156-11.89 22.91-6.938 34.88S307.1 480 319.1 480h127.1C465.7 480 480 465.7 480 448S465.7 416 448 416zM492.6 209.3l-79.99-160.1c-10.84-21.81-46.4-21.81-57.24 0L275.4 209.3c-7.906 15.91-1.5 35.24 14.31 43.19c15.87 7.922 35.04 1.477 42.93-14.4l7.154-14.39h88.43l7.154 14.39c6.174 12.43 23.97 23.87 42.93 14.4C494.1 244.6 500.5 225.2 492.6 209.3zM367.8 167.4L384 134.7l16.22 32.63H367.8z"
            />
          </svg>
        </li>
        <li
          class="sortList__li"
          :class="{ sortList__li_select: 'nameZToA' === sortReq }"
          @click="changeSortReq('nameZToA')"
        >
          По имени
          <svg xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 512 512">
            <!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M104.4 470.1c12.12 13.26 35.06 13.26 47.19 0l87.1-96.09c11.94-13.05 11.06-33.31-1.969-45.27c-13.02-11.95-33.27-11.04-45.22 1.973L160 366.1V64.03c0-17.7-14.33-32.03-32-32.03S96 46.33 96 64.03v302l-32.4-35.39c-6.312-6.883-14.94-10.39-23.61-10.39c-7.719 0-15.47 2.785-21.61 8.414c-13.03 11.95-13.9 32.22-1.969 45.27L104.4 470.1zM320 96h50.75l-73.38 73.38c-9.156 9.156-11.89 22.91-6.938 34.88s16.63 19.74 29.56 19.74h127.1C465.7 223.1 480 209.7 480 192s-14.33-32-32-32h-50.75l73.38-73.38c9.156-9.156 11.89-22.91 6.938-34.88S460.9 32 447.1 32h-127.1C302.3 32 288 46.31 288 64S302.3 96 320 96zM492.6 433.3l-79.99-160.1c-10.84-21.81-46.4-21.81-57.24 0l-79.99 160.1c-7.906 15.91-1.5 35.24 14.31 43.19c15.87 7.922 35.04 1.477 42.93-14.4l7.154-14.39h88.43l7.154 14.39c6.174 12.43 23.97 23.87 42.93 14.4C494.1 468.6 500.5 449.2 492.6 433.3zM367.8 391.4L384 358.7l16.22 32.63H367.8z"
            />
          </svg>
        </li>
        <li
          class="sortList__li"
          :class="{ sortList__li_select: 'priceToLow' === sortReq }"
          @click="changeSortReq('priceToLow')"
        >
          По цене
          <svg xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 576 512">
            <!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M416 288h-95.1c-17.67 0-32 14.33-32 32s14.33 32 32 32H416c17.67 0 32-14.33 32-32S433.7 288 416 288zM544 32h-223.1c-17.67 0-32 14.33-32 32s14.33 32 32 32H544c17.67 0 32-14.33 32-32S561.7 32 544 32zM352 416h-32c-17.67 0-32 14.33-32 32s14.33 32 32 32h32c17.67 0 31.1-14.33 31.1-32S369.7 416 352 416zM480 160h-159.1c-17.67 0-32 14.33-32 32s14.33 32 32 32H480c17.67 0 32-14.33 32-32S497.7 160 480 160zM192.4 330.7L160 366.1V64.03C160 46.33 145.7 32 128 32S96 46.33 96 64.03v302L63.6 330.7c-6.312-6.883-14.94-10.38-23.61-10.38c-7.719 0-15.47 2.781-21.61 8.414c-13.03 11.95-13.9 32.22-1.969 45.27l87.1 96.09c12.12 13.26 35.06 13.26 47.19 0l87.1-96.09c11.94-13.05 11.06-33.31-1.969-45.27C224.6 316.8 204.4 317.7 192.4 330.7z"
            />
          </svg>
        </li>
        <li
          class="sortList__li"
          :class="{ sortList__li_select: 'priceToHigh' === sortReq }"
          @click="changeSortReq('priceToHigh')"
        >
          По цене
          <svg xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 576 512">
            <!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M320 224H416c17.67 0 32-14.33 32-32s-14.33-32-32-32h-95.1c-17.67 0-32 14.33-32 32S302.3 224 320 224zM320 352H480c17.67 0 32-14.33 32-32s-14.33-32-32-32h-159.1c-17.67 0-32 14.33-32 32S302.3 352 320 352zM320 96h32c17.67 0 31.1-14.33 31.1-32s-14.33-32-31.1-32h-32c-17.67 0-32 14.33-32 32S302.3 96 320 96zM544 416h-223.1c-17.67 0-32 14.33-32 32s14.33 32 32 32H544c17.67 0 32-14.33 32-32S561.7 416 544 416zM192.4 330.7L160 366.1V64.03C160 46.33 145.7 32 128 32S96 46.33 96 64.03v302L63.6 330.7c-6.312-6.883-14.94-10.38-23.61-10.38c-7.719 0-15.47 2.781-21.61 8.414c-13.03 11.95-13.9 32.22-1.969 45.27l87.1 96.09c12.12 13.26 35.06 13.26 47.19 0l87.1-96.09c11.94-13.05 11.06-33.31-1.969-45.27C224.6 316.8 204.4 317.7 192.4 330.7z"
            />
          </svg>
        </li>
      </ul>
    </div>
    <transition-group name="listAnimation"
                      class="productList"
                      tag="ul">
      <product-item
        v-for="item in sorted"
        :key="item.id"
        :product="item"
        @removeProduct="removeProduct"
      />
    </transition-group>
  </section>
</template>

<script>
import ProductItem from "./ProductItem.vue";
export default {
  name: "ProductList",
  components: { ProductItem },
  data() {
    return {
      products: [],
      sorted: [],
      sortIsOpen: false,
      sortReq: "",
      api: "/api/products",
    };
  },
  mounted() {
    this.getJson(this.api).then((data) => {
      for (let el of data) {
        this.products.push(el);
      }
      this.sortProduct();
    });
  },
  methods: {
    getJson(url) {
      return fetch(url)
        .then((result) => result.json())
        .catch((error) => {
          console.log(error);
        });
    },
    postJson(url, data) {
      return fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((result) => result.json())
        .catch((error) => console.log(error));
    },
    deleteJson(url) {
      return fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((result) => result.json())
        .catch((error) => console.log(error));
    },
    addProduct(item) {
      this.postJson(this.api, item).then((data) => {
        if (data.result === 1) {
          this.products.push({ ...item, id: data.id });
          this.sortProduct();
        }
      });
    },
    removeProduct(id) {
      this.deleteJson(`${this.api}/${id}`).then((data) => {
        if (data.result === 1) {
          const index = this.products.findIndex((el) => el.id === id);
          this.products.splice(index, 1);
          this.sortProduct();
        } else {
          console.log("Failed delete data.");
        }
      });
    },
    changeSortReq(req) {
      this.sortReq = req;
      this.sortProduct();
    },
    sortProduct() {
      switch (this.sortReq) {
        case "":
          this.sorted = [...this.products];
          break;
        case "nameAToZ":
          this.sorted = this.products.sort((firstEl, secondEl) => {
            if (firstEl.name > secondEl.name) {
              return 1;
            }
            if (firstEl.name < secondEl.name) {
              return -1;
            }
            return 0;
          });
          break;
        case "nameZToA":
          this.sorted = this.products.sort((firstEl, secondEl) => {
            if (firstEl.name < secondEl.name) {
              return 1;
            }
            if (firstEl.name > secondEl.name) {
              return -1;
            }
            return 0;
          });
          break;
        case "priceToLow":
          this.sorted = this.products.sort((firstEl, secondEl) => {
            if (firstEl.price < secondEl.price) {
              return 1;
            }
            if (firstEl.price > secondEl.price) {
              return -1;
            }
            return 0;
          });
          break;
        case "priceToHigh":
          this.sorted = this.products.sort((firstEl, secondEl) => {
            if (firstEl.price > secondEl.price) {
              return 1;
            }
            if (firstEl.price < secondEl.price) {
              return -1;
            }
            return 0;
          });
          break;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.products {
  flex-grow: 1;
  align-self: center;
  display: flex;
  flex-direction: column;
}

.sortList {
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1;

  background: #fffefb;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 4px;

  transition: all 0.3s;

  &_open {
    & .sortList__li {
      display: flex;
    }
  }

  &__wrap {
    display: flex;
    justify-content: right;
    position: relative;
    margin: 0 0 16px 0;
    min-height: 36px;
  }

  &__li {
    display: none;
    align-items: center;
    justify-content: space-between;

    min-width: 122px;
    padding: 10px 16px;

    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    transition: all 0.3s;

    cursor: pointer;

    &_select {
      order: 0;
      display: flex;
      color: #b4b4b4;
      fill: #b4b4b4;
    }

    & svg {
      display: block;
      width: 16px;
      height: 12px;
      padding-left: 5px;
    }

    &_disable {
      color: #b4b4b4;
      & svg {
        height: 5px;
        width: fit-content;
      }
    }

    &:hover {
      box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
    }
  }
}

.productList {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  margin: 0 auto;
}
.listAnimation-enter-active,
.listAnimation-leave-active {
  transition: all 1s;
}
.listAnimation-enter,
.listAnimation-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-move {
  transition: transform 1s;
}

@media (max-width: 1139px) {
  .productList {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 687px) {
  .productList {
    grid-template-columns: 1fr;
  }
}
</style>
