<template lang="pug">
  section.section-contacts
    .container
      .box.contacts
        .box__title
          .title Контакты
          .box__subtitle
            img(src="../../assets/img/demo/flag2.svg")
        .box__wrapper
          .contacts__items
            .contacts__item(v-for="(item, i) in contacts", :key="i")
              .contacts__name {{ item.name }}
              .contacts__info {{ item.info }}
          .box__img
            .img.contacts__map#map
          .box__bottom
            .btn(@click="sendEmail") Напишите нам
      Modal(v-if="showModal", :typeForm="'sendEmail'",  @close="close")
</template>
<style lang="scss">
  @import '../../assets/sass/vars';
  @import '../../assets/sass/mixins';
  .section-contacts {
    @include laptop {
      .container {
        width: 100%;
      }
    }
  }
  .contacts {
    margin-top: 130px;
    @include laptop {
      margin-top: 50px;
      .box__title {
        width: 668px;
        margin: 0 auto 40px;
      }
      .box__wrapper {
        padding: 0;
        width: 100%;
      }
      .box__img {
        position: relative;
        margin-bottom: 55px;
        width: 100%;
        height: 460px;
      }
      .img {
        width: 100%;
      }
      .box__bottom {
        display: flex;
        justify-content: center;
      }
    }
    @include tablets {
      margin-top: 30px;
      margin-bottom: 35px;
      .box__title {
        width: 260px;
        margin-bottom: 25px;
      }
      .box__subtitle {
        display: none;
      }
      .box__img {
        margin-bottom: 30px;
      }
    }
  }
  .contacts__map {
    height: 455px;
  }
  .contacts__items {
    display: flex;
    flex-direction: column;
    margin-bottom: 35px;
    align-items: flex-start;
    @include laptop {
      flex-direction: row;
      justify-content: space-between;
      width: 668px;
      margin: 0 auto;
    }
    @include tablets {
      flex-direction: column;
      width: 260px;
    }
  }
  .contacts__item {
    font-size: 17px;
    color: $greey-dark;
    display: flex;
    margin-bottom: 40px;
    max-width: 300px;
    line-height: 1.8;
    @include tablets {
      margin-bottom: 30px;
      font-size: 15px;
    }
  }
  .contacts__name {
    min-width: 80px;
  }
</style>
<script>
import Modal from '../Modal/Modal.vue'
export default {
  data () {
    return {
      showModal: false,
      contacts: [
        {'name': 'e-mail:', 'info': 'info@mimimishkashop.ru'},
        {'name': 'адрес:', 'info': 'г. Санкт-Петербург,  ул. Большая Конюшеная, д. 19/8, офис 101'}
      ]
    }
  },
  components: {
    Modal
  },
  methods: {
    initMap () {
      ymaps.ready(init)

      function init () {
        const myMap = new ymaps.Map('map', {
          center: [59.938631, 30.323055],
          zoom: 16
        })
        myMap.behaviors.disable([
          'drag',
          'scrollZoom'
        ])
        myMap.controls
          .remove('geolocationControl')
          .remove('searchControl')
          .remove('trafficControl')
          .remove('rulerControl')

        const myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {
          hintContent: 'Здесь наш магазин!',
          balloonContent: 'Магазин товаров ручной работы.'
        }, {
          preset: 'islands#darkGreenIcon'
          // iconLayout: 'default#image',
          // iconImageHref: 'src/assets/img/map-pin.png',
          // iconImageSize: [67, 100],
          // iconImageOffset: [-3, -42]
        })

        myMap.geoObjects.add(myPlacemark)
      }
    },
    sendEmail () {
      this.showModal = true
    },
    close () {
      this.showModal = false
    }
  },
  mounted () {
    this.initMap()
  }
}
</script>
