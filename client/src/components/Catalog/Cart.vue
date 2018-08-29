<template lang="pug">
  .cart
    .cart__img
      img(:src="item.image")
    .cart__descr-wrap
      .cart__info
        .cart__name.link {{ item.name }}
        .cart__descr
          span(v-for="(point, i) in item.data", :key="i") {{ point.key }} : {{ point.value }}
      .cart__buy
        .cart__price {{ item.price }} руб.
        .cart__icon(@click="addInBasket")
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" class="icon">
          <title>basket</title>
          <path d="M0 14v-3h3.75l7.531-7.532c-0.050-0.149-0.093-0.301-0.093-0.468 0-0.829 0.671-1.5 1.5-1.5 0.828 0 1.5 0.671 1.5 1.5s-0.672 1.5-1.5 1.5c-0.111 0-0.209-0.041-0.312-0.063l-6.564 6.563h19.354l-6.525-6.579c-0.129 0.036-0.252 0.079-0.391 0.079-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5 1.5 0.671 1.5 1.5c0 0.153-0.045 0.293-0.088 0.433l7.567 7.567h3.771v3h-31zM24.869 28.902c-0.293 1.172-1.105 1.107-1.105 1.107l-16.595 0.032c-0.846 0-1.073-1.072-1.073-1.072l-4.387-13.955 27.574-0.026-4.414 13.914zM9.999 17h-1v5h1v-5zM9.999 23h-1v5h1v-5zM11.999 17h-0.999v5h0.999v-5zM11.999 23h-0.999v5h0.999v-5zM13.999 17h-1v5h1v-5zM13.999 23h-1v5h1v-5zM16 17h-1v5h1v-5zM16 23h-1v5h1v-5zM18 17h-1v5h1v-5zM18 23h-1v5h1v-5zM20 17h-1v5h1v-5zM20 23h-1v5h1v-5zM22 17h-1v5h1v-5zM22 23h-1v5h1v-5z"></path>
          </svg>
      .box__modal(v-if="show")
        .box__modal-text Товар добавлен в корзину!
</template>
<style lang="scss">
  @import '../../assets/sass/vars';
  @import '../../assets/sass/mixins';
  .cart {
    display: inline-flex;
    flex-direction: column;
    border: 1px solid $greey-super-light;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    width: 315px;
    position: relative;
    @include laptop {
      flex-direction: row;
      margin-bottom: 55px;
    }
    @include tablets {
      width: 100%;
      flex-direction: column;
      margin-bottom: 30px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  .cart:hover {
    .cart__descr-wrap {
      box-shadow: 0 0 10px rgba(0,0,0,0.2);
    }
  }
  .cart__img  {
    height: 460px;
    width: 315px;
    overflow: hidden;
    z-index: 10;
    @include laptop {
      width: 334px;
      height: 334px;
    }
    @include tablets {
      width: 260px;
      height: 195px;
    }
  }
  .cart__img img{
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .cart__descr {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .cart__descr-wrap {
    padding: 18px 30px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @include laptop {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
  .cart__info {
    padding-bottom: 25px;
  }
  .cart__name {
    font-weight: 700;
    font-size: 20px;
    line-height: 1.2;
    margin-bottom: 10px;
    @include tablets {
      font-size: 17px;
    }
  }
  .cart__descr {
    font-size: 15px;
    color: $greey-dark;
    @include tablets {
      font-size: 13px;
    }
  }
  .cart__buy {
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 2;
    padding-top: 20px;
    border-top: 1px solid $greey-super-light;
  }
  .cart__price {
    font-size: 17px;
    font-weight: 700;
    @include tablets {
      font-size: 15px;
    }
  }
  .cart__icon {
    display: flex;
    align-items: center;
    &:hover {
      transform: scale(1.2);
    }
  }
  .box__modal-text {
    color: #fff;
    background-color: $green-light;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 700;
    box-shadow: 0 0 10px #999;
    min-width: 200px;
  }
  .box__modal {
    position: absolute;
    top: 50%;
    transform: translateX(-50%);
    left: 50%;
  }
</style>
<script>
export default {
  data () {
    return {
      show: false
    }
  },
  props: ['item'],
  methods: {
    addInBasket () {
      this.$emit('addInBasket')
      this.show = true
      setTimeout(() => {
        this.show = false
      }, 1000)
    }
  }
}
</script>
