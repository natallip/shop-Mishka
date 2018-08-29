<template lang="pug">
  section.section-goods
    .container.goods
      .goods__title.title Милые штуки ручной работы для дома
      .goods__menuOfGoods
        ul.menuOfGooods
          router-link.menuOfGooods__item(v-for="(item, i) in goods", :key="i", tag="li", :to="item.href", :active-class="'menuOfGooods__item--active'" exact)
            .menuOfGooods__name {{ item.name }}
            .menuOfGooods__icon(:class="item.icon")
    .goods__bg
     //.ware__wrap
        .ware(v-for="n in 19")
          svg(viewBox="0 0 280 300" preserveAspectRatio="xMinYMin meet")
            path( d="M10,150Q75,80 150,150T300,150 L300,100 L00,100 Z" stroke="red" stroke-width="38" fill="red")

     // .ware__wrap
       .ware(v-for="n in 40")
        svg(viewBox="200 100 800 400")
         path(d="M200,300 Q400,50 600,300 T1000,300" fill="none" stroke="red" stroke-width="20")
     //<svg class="w" viewBox="20 0 160 160" xmlns="http://www.w3.org/2000/svg">
       <path d="M10 80 Q 40 40, 90 80 T 180 80" stroke="black" fill="transparent"/>
     //</svg>

</template>
<script>
export default {
  data () {
    return {
      goods: [
        {'name': 'Предметы интерьера', 'icon': 'interior', 'href': '/decor'},
        {'name': 'Детские игрушки', 'icon': 'toy', 'href': '/toys'}
      ]
    }
  }
}
</script>
<style lang="scss">
  @import '../../assets/sass/vars';
  @import '../../assets/sass/mixins';
  .section-goods {
    height: 750px;
    background: url('../../assets/img/home.jpg') 50% 50% no-repeat #f9f9f9;
    @include tablets {
      height: 490px;
      -ms-background-position-y: -25%;
      background-position-y: -25%;
      -webkit-background-size: 100% 80%;
      background-size: 100% 80%;
    }
  }
  .goods__bg {
    background: url('../../assets/img/demo/ware-block.svg') repeat-x 0% 90%;
    height: 24px;
    margin-top: -24px;
    z-index: 20;
    position: absolute;
    bottom: 0%;
    width: 100%;
    @include tablets {
      display: none;
    }
  }
  .goods__title {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 20%;
    text-align: center;
    width: 58%;
    @include tablets {
      max-width: 250px;
      top: 16%;
    }
  }
  .goods__menuOfGoods {
    display: flex;
    position: absolute;
    bottom: 0%;
    width: 1055px;
    left: 50%;
    transform: translateX(-50%);
    @include laptop {
      width: 668px;
    }
  }
  .menuOfGooods {
    display: flex;
    align-items: flex-end;
    width: 100%;
    color: #fff;
    @include tablets {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  .menuOfGooods__icon {
    display: flex;
    justify-content: center;
    height: 60px;
    width: 50px;
    @include tablets {
      margin-right: 0;
    }
  }
  .menuOfGooods__name {
    flex-basis: 165px;
    font-size: 20px;
    font-weight: 700;
    @include tablets {
      font-size: 18px;
      text-align: left;
    }
  }
  .menuOfGooods__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    @include tablets {
      padding: 20px;
    }
  }
  .menuOfGooods__item:first-child {
    background-color: $green-light;
    width: 50%;
    @include tablets {
      width: 320px;
    }
  }
  .menuOfGooods__item:last-child {
    background-color: $green-dark;
    width: 50%;
    @include tablets {
      width: 320px;
    }
  }
  .interior {
    background: url('../../assets/img/demo/lamp.svg') 50% 50% / cover;
  }
  .toy {
    background: url('../../assets/img/demo/plugin.svg') 50% 50% / cover;
  }
  .menuOfGooods__item:first-child:hover {
    border-bottom: 5px solid $green-light;
    cursor: pointer;
  }
  .menuOfGooods__item:last-child:hover {
    border-bottom: 5px solid $green-dark;
    cursor: pointer;
  }
  .menuOfGooods__item--active {
    color: #8be2d0;
  }
  .ware__wrap {
    z-index: 20;
    fill: red;
    stroke: red;
    stroke-width: 2px
  }
</style>
