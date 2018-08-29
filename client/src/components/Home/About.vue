<template lang="pug">
  section.section-about
    .container.about__wrap
      .about__title.title Коротко о нас:
      ul.about__items
        li.about__item(v-for="(item, i) in icons", :key="i", :class="item.icon")
          .about__text {{ item.text }}

</template>
<style lang="scss">
  @import '../../assets/sass/vars';
  @import '../../assets/sass/mixins';
  .section-about {
    margin-bottom: 30px;
    @include tablets {
      margin-bottom: 20px;
    }
  }
  .about__wrap {
    width: 700px;
    @include tablets {
      width: 260px;
    }
  }
  .about__title {
    margin: 50px 0 50px;
    @include tablets {
      margin-top: 10px;
      margin-bottom: 30px;
    }
  }
  .about__items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @include tablets {
      flex-direction: column;
    }
  }
  .about__item {
    padding-top: 50px;
    width: 350px;
    padding-bottom: 60px;
    @include tablets {
      width: 240px;
      padding-bottom: 30px;
    }
  }
  .about__text {
    max-width: 300px;
    font-size: 20px;
    font-weight: 700;
    color: #000;
    line-height: 1.2;
    @include tablets {
      font-size: 17px;
      line-height: 1.1;
    }
  }
  .about__icon {
    margin-bottom: 15px;
  }
  .icon-1 {
    background: url('../../assets/img/demo/leaf2.svg') no-repeat 0% 0%;
  }
  .icon-2 {
    background: url('../../assets/img/demo/heart.svg') no-repeat 0% 0%;
  }
  .icon-3 {
    background: url('../../assets/img/demo/credit-card.svg') no-repeat 0% 0%;
  }
  .icon-4 {
    background: url('../../assets/img/demo/location-park.svg') no-repeat 0% 0%;
  }
  .icon-5 {
    background: url('../../assets/img/demo/like.svg') no-repeat 0% 0%;
  }
  .icon-6 {
    background: url('../../assets/img/demo/gift2.svg') no-repeat 0% 0%;
  }

</style>
<script>
export default {
  data () {
    return {
      contacts: [
        { 'name': 'e-mail:', 'info': 'info@mimimishkashop.ru' },
        { 'name': 'адрес:', 'info': 'г. Санкт-Петербург, ул. Большая Конюшеная, д. 19/8, офис 101' }
      ],
      icons: [
        {'icon': 'icon-1', 'text': 'Экологически чистые материалы'},
        {'icon': 'icon-2', 'text': 'Связано вручную с любовью и умилением'},
        {'icon': 'icon-3', 'text': 'Скандинавский стиль по российской цене'},
        {'icon': 'icon-4', 'text': 'Поддержка отечественного производителя'},
        {'icon': 'icon-5', 'text': 'Увеличивает лайки на фотографиях'},
        {'icon': 'icon-6', 'text': 'Поставляется в  подарочной упаковке'}
      ]
    }
  }
}
</script>
