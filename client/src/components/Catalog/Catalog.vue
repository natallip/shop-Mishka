<template lang="pug">
  section.catalog
    .section__title.title Каталог товаров
    .container
      .carts
        Cart(v-for="(item, i) in getGoods", :key="i", :item="item",  @addInBasket="addInBasket(item)")
      .production
        .production__video
          <iframe class="video" width="100%" height="100%" src="https://www.youtube.com/embed/Zg7oLltOouc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        .production__descr
          .production__title-wrap
            .production__icon
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                <title>video-camera</title>
                  <path d="M12 9c0-2.761 2.239-5 5-5s5 2.239 5 5c0 2.761-2.239 5-5 5s-5-2.239-5-5zM0 9c0-2.761 2.239-5 5-5s5 2.239 5 5c0 2.761-2.239 5-5 5s-5-2.239-5-5zM24 19v-3c0-1.1-0.9-2-2-2h-20c-1.1 0-2 0.9-2 2v10c0 1.1 0.9 2 2 2h20c1.1 0 2-0.9 2-2v-3l8 5v-14l-8 5zM20 24h-16v-6h16v6z"></path>
              </svg>
            .production__title Процесс производства
          .production__text По просьбам наших любимых фолловеров мы сняли для вас подробное По просьбам наших любимых фолловеров мы сняли для вас подробное
          router-link.production__btn.btn(tag="div", to="/order") Сделать заказ
</template>
<style lang="scss">
  @import '../../assets/sass/vars';
  @import '../../assets/sass/mixins';
  .carts {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 60px;
    @include tablets {
      margin-bottom: 30px;
    }
  }
  .production {
    display: flex;
    margin-bottom: 100px;
    border: 1px solid $greey-super-light;
    position: relative;
    @include laptop {
      flex-direction: column;
      align-items: stretch;
      margin-bottom: 64px;
    }
    @include tablets {
      padding-top: 100px;
    }
  }
  .production__video {
    width: 682px;
    height: 455px;
    @include laptop {
      width: 668px;
    }
    @include tablets {
      height: 150px;
      width: 260px;
    }
  }
  .video {
    width: 682px;
    height: 455px;
    @include laptop {
      width: 668px;
    }
    @include tablets {
      height: 150px;
      width: 260px;
    }
  }
  .production__video img {
    display: block;
    height: 100%;
    object-fit: cover;
    @include laptop {
      width: 100%;
    }
  }
  .production__descr {
    padding: 14px 60px 30px 78px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    @include laptop {
      padding: 30px 40px;
    }
  }
  .production__title-wrap {
    display: flex;
    flex-direction: column;
    @include laptop {
      flex-direction: row;
      align-items: center;
      margin-bottom: 30px;
    }
    @include tablets {
      position: absolute;
      top: 30px;
      left: 30px;
    }
  }
  .production__title {
    font-size: 20px;
    font-weight: 700;
    width: 80%;
    @include tablets {
      font-size: 17px;
    }
  }
  .production__text {
    font-size: 15px;
    color: $greey-dark;
    line-height: 2;
    @include laptop {
      margin-bottom: 40px;
    }
    @include tablets {
      font-size: 13px;
      margin-bottom: 25px;
    }
  }
  .production__icon {
    margin-bottom: 15px;
    fill: $green-light;
    @include laptop {
      margin-right: 30px;
      margin-bottom: 0;
    }
  }
  .production__btn.btn {
    padding: 10px;
  }
</style>
<script>
import Cart from './Cart.vue'

export default {
  components: {
    Cart
  },
  computed: {
    getGoods () {
      return this.$store.state.goods
    }
  },
  created () {
    this.$store.dispatch('loadGoods')
  },
  methods: {
    addInBasket (e) {
      const item = {
        id: e.id,
        count: 1,
        img: e.image,
        name: e.name,
        price: e.price
      }
      item.total = parseInt(item.count) * parseInt(item.price)
      this.$store.commit('changeBasket', item)
    }
  }
}
</script>
