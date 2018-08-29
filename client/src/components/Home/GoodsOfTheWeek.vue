<template lang="pug">
  section.section-goodsOfTheWeek
    .container
      .box.goodsOfTheWeek
        .box__title
          .title {{ good.name }}
          .box__subtitle
            span.subtitle Товар недели
        .box__wrapper
          .goodsOfTheWeek__desc {{ good.descr }}
          .goodsOfTheWeek__info
            .goodsOfTheWeek__info-row(v-for="(item, i) in good.data", :key="i")
              .goodsOfTheWeek__info-name {{ item.key }}:
              .goodsOfTheWeek__info-descr {{ item.value }}
          .box__img
            img.img(:src="good.image")
          .box__bottom
            .goodsOfTheWeek__price Цена: {{ good.price }} руб.
            .btn(@click="addInBasket") Заказать
        .box__modal(v-if="show")
          .box__modal-text Товар добавлен в корзину!
    //.ware__wrap
      .ware(v-for="n in 19")
        svg(viewBox="0 0 310 300" preserveAspectRatio="xMinYMin meet")
          path( d="M0,150Q75,80 150,150T300,150" stroke="#f1f1f1" stroke-width="38" fill="none")

</template>
<script>
export default {
  data () {
    return {
      show: false
    }
  },
  computed: {
    good () {
      return this.$store.state.goods[2]
    }
  },
  methods: {
    addInBasket () {
      const item = {
        id: this.good.id,
        count: 1,
        img: this.good.image,
        name: this.good.name,
        price: this.good.price
      }
      item.total = parseInt(item.count) * parseInt(item.price)
      this.$store.commit('changeBasket', item)
      this.show = true
      setTimeout(() => {
        this.show = false
      }, 1000)
    }
  },
  created () {
    this.$store.dispatch('loadGoods')
  }
}
</script>
<style lang="scss">
  @import '../../assets/sass/vars';
  @import '../../assets/sass/mixins';
.section-goodsOfTheWeek {
  background: url('../../assets/img/demo/ware.svg') repeat-x 0% 100%;
}
.goodsOfTheWeek {
  min-height: 640px;
}
.box {
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  margin-bottom: 100px;
  position: relative;
  @include laptop {
    margin-top: 50px;
    min-height: 500px;
  }
  @include tablets {
    margin-top: 26px;
    margin-bottom: 50px;
  }
 }
 .box__wrapper {
   width: 350px;
   display: flex;
   flex-direction: column;
   justify-content: flex-end;
   margin-left: 175px;
   padding-right: 60px;
   flex-grow: 2;
   @include laptop {
     margin-left: 0;
     width: 334px;
   }
 }
 .box__img {
   position: absolute;
   bottom: 0%;
   right: 0%;
   @include tablets {
     position: relative;
   }
 }
 .img {
   width: 525px;
   height: auto;
   @include laptop {
     width: 334px;
     height: 406px;
   }
   @include tablets {
     width: 260px;
     height: 315px;
     margin-bottom: 20px;
   }
 }
 .goodsOfTheWeek__info {
   position: relative;
   flex-grow: 2;
   @include tablets {
     margin-bottom: 30px;
   }
 }
 .goodsOfTheWeek__info-row {
   display: flex;
   color: $greey-dark;
   font-size: 15px;
   border-bottom: 1px solid $greey-super-light;
   padding: 10px 0;
 }
 .box__title {
   display: flex;
   align-items: center;
   margin-bottom: 50px;
   z-index: 10;
   @include laptop {
     justify-content: space-between;
   }
   @include tablets {
     flex-direction: column;
     margin-bottom: 20px;
     .title {
       text-align: left;
       width: 100%;
     }
   }
 }
 .box__subtitle {
   order: -1;
   width: 175px;
   font-size: 17px;
   font-weight: 700;
   line-height: 1.1;
   color: $green-light;
   text-transform: uppercase;
   display: flex;
   justify-content: center;
   @include laptop {
     order: 0;
     justify-content: flex-end;
   }
   @include tablets {
     width: 100%;
     margin-top: 10px;
   }
 }
 .subtitle {
   width: 50%;
   display: inline-block;
   text-align: center;
   @include tablets {
     width: 100%;
     text-align: left;
   }
 }
  .goodsOfTheWeek__desc {
    font-size: 17px;
    color: $greey-dark;
    line-height: 1.8;
    flex-grow: 1;
    @include tablets {
      font-size: 15px;
      margin-bottom: 15px;
    }
  }
  .goodsOfTheWeek__info-name {
    flex-basis: 90px;
    @include tablets {
      font-size: 15px;
    }
  }
  .goodsOfTheWeek__price {
    font-size: 20px;
    font-weight: 700;
    color: $greey-dark;
    text-align: center;
    margin-bottom: 30px;
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
  }
  .box__modal {
    position: absolute;
    top: 50%;
    transform: translateX(-50%);
    left: 50%;
  }
</style>
