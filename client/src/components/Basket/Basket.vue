<template lang="pug">
  section.backet
    .container
      .backet__title Содержимое корзины
      .backet__table.table
        .table__thead.table__thead--hidden
          .table__tr
            .table__td(v-for="(item, i) in thead", :key="i") {{ item }}
        .tablet__body
          .table__tr(v-for="(item, i) in basket", :key="i")
            .table__td
              img.table__img(:src="item.img")
              .table__item-wrap
                .table__item
                  .table__subtitle Товар
                  .table__item-name {{ item.name }}
                .table__delete(@click="deleteItem(i)")
                  svg(viewBox="0 0 24 24")
                    title delete
                    path(d="M12 3c-4.963 0-9 4.038-9 9s4.037 9 9 9 9-4.038 9-9-4.037-9-9-9zM12 19c-3.859 0-7-3.14-7-7s3.141-7 7-7 7 3.14 7 7-3.141 7-7 7z")
                    path(d="M12.707 12l2.646-2.646c0.194-0.194 0.194-0.512 0-0.707-0.195-0.194-0.513-0.194-0.707 0l-2.646 2.646-2.646-2.647c-0.195-0.194-0.513-0.194-0.707 0-0.195 0.195-0.195 0.513 0 0.707l2.646 2.647-2.646 2.646c-0.195 0.195-0.195 0.513 0 0.707 0.097 0.098 0.225 0.147 0.353 0.147s0.256-0.049 0.354-0.146l2.646-2.647 2.646 2.646c0.098 0.098 0.226 0.147 0.354 0.147s0.256-0.049 0.354-0.146c0.194-0.194 0.194-0.512 0-0.707l-2.647-2.647z")
            .table__td
              .table__subtitle Кол-во
              .table__count-wrap
                .table__count {{ item.count }}
                .table__count-change(@click="changeCount($event, i)")
                  .table__change.table__add +
                  .table__change.table__reduce -
            .table__td
              .table__subtitle Цена за ед.
              .table__cost {{ item.price }} RUB
            .table__td
              .table__subtitle Итого
              .table__cost {{ item.total }} RUB
        .table__total
          span.table__total-val Итоговая стоимость
          span.table__total-val {{ total }}  RUB
        .table__btn
          .btn Оформить заказ
</template>
<style lang="scss">
  @import '../../assets/sass/vars';
  @import '../../assets/sass/mixins';
  .backet {
    flex-grow: 2;
    margin-top: 80px;
    @include tablets {
      margin-top: 40px;
    }
  }
  .backet__title {
    font-size: 18px;
    font-weight: 700;
    color: $green-dark;
    margin-bottom: 30px;
  }
  .backet__table {
    margin-bottom: 50px;
  }
  .table {
    display: flex;
    flex-direction: column;
  }
  .table__thead {
    text-align: center;
    font-weight: 700;
    @include laptop {
      font-size: 15px;
    }
  }
  .table__thead--hidden {
    @include tablets {
      display: none;
    }
  }
  .table__td {
    flex-basis: 15%;
    padding: 10px 5px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    &:first-child {
      flex-basis: 55%;
      justify-content: flex-start;
    }
    @include tablets {
      flex-direction: column;
      align-items: flex-start;
      border: 1px solid $greey-super-light;
    }
  }
  .table__tr {
    display: flex;
    @include tablets {
      flex-direction: column;
      border: 1px solid $down;
    }
  }
  .table__item-wrap {
    display: flex;
    align-items: center;
    @include tablets {
      // align-items: flex-start;
    }
  }
  .table__img {
    width: 100px;
    height: 100px;
    margin-right: 20px;
    @include tablets {
      align-self: center;
    }
  }
  .table__item {
    font-size: 18px;
    margin-right: 10px;
    color: $green-dark;
    @include tablets {
      font-size: 16px;
    }
  }
  .table__delete {
    width: 24px;
    height: 24px;
    transition: .3s;
    flex-shrink: 0;
    svg {
      fill: $hover;
    }
    &:hover svg {
      fill: $greey-dark;
      transform: scale(1.2);
    }
  }
  .table__thead .table__td:first-child {
    padding-left: 105px;
  }
  .table__count-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
  }
  .table__count {
    width: 40px;
    height: 40px;
    border: 1px solid $green-light;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .table__count-change {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
    font-size: 18px;
    font-weight: 700;
    width: 40px;
    height: 40px;
  }
  .table__change:hover {
    transform: scale(1.2);
  }
  .table__total {
    text-align: right;
    color: $greey-dark;
    font-size: 18px;
    font-weight: 700;
    border-top: 1px solid $down;
    border-bottom: 1px solid $down;
    margin: 25px 0;
    padding: 20px 0;
    @include tablets {
      display: flex;
      flex-direction: column;
    }
  }
  .table__btn {
    display: flex;
    justify-content: flex-end;
    .btn {
      width: auto;
      display: inline-block;
    }
  }
  .table__subtitle {
    display: none;
    color: #000;
    font-size: 14px;
    font-weight: 700;
    @include tablets {
      display: block;
    }
  }
  .table__cost {
    @include tablets {
      font-size: 15px;
    }
  }
</style>
<script>
export default {
  data () {
    return {
      thead: ['Товар', 'Кол-во', 'Цена за ед.', 'Итого'],
      count: 1
    }
  },
  computed: {
    basket () {
      return this.$store.state.basket
    },
    total () {
      let totalAmount = 0
      this.basket.forEach(item => {
        totalAmount = +totalAmount + item.total
      })
      return totalAmount
    }
  },
  methods: {
    changeCount (e, i) {
      let target = e.target
      const count = this.basket[i].count
      if (target.closest('.table__add')) {
        this.$store.commit('changeCount', {
          count: +count + 1,
          i: i
        })
      }
      if (target.closest('.table__reduce')) {
        this.$store.commit('changeCount', {
          count: +count - 1,
          i: i
        })
      }
    },
    deleteItem (i) {
      this.$store.commit('deleteItem', i)
    }
  }
}
</script>
