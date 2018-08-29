<template lang="pug">
  section.order
    symbol(id="mail" viewBox="0 0 24 24")
      path(class="input__img" d="M19 7h-14c-1.104 0-2 0.896-2 2v9c0 1.104 0.896 2 2 2h14c1.104 0 2-0.896 2-2v-9c0-1.104-0.896-2-2-2zM9.316 14.316l1.602 1.4c0.305 0.266 0.691 0.398 1.082 0.398s0.777-0.133 1.082-0.398l1.602-1.4-0.037 0.037 3.646 3.646h-12.586l3.646-3.646-0.037-0.037zM5 17.293v-6.753l3.602 3.151-3.602 3.602zM15.398 13.691l3.602-3.151v6.75l-3.602-3.599zM19 9v0.21l-6.576 5.754c-0.227 0.198-0.621 0.198-0.848 0l-6.576-5.754v-0.21h14z")

    symbol(id="phone" viewBox="0 0 40 40")
      path(class="input__img" d="M22 20c-2 2-2 4-4 4s-4-2-6-4-4-4-4-6 2-2 4-4-4-8-6-8-6 6-6 6c0 4 4.109 12.109 8 16s12 8 16 8c0 0 6-4 6-6s-6-8-8-6z")

    .section__title.title Вязание на заказ
    .container
      .order__text Мы будем рады воплотить в жизнь ваши пожелания! Заполните простую форму заказа и мы свяжемся с вами, чтобы уточнить детали.
    form.form(@submit.prevent="sendOrder")
      .fieldset
        .fieldset__wrap.container
          .fieldset__type Тип
          .fieldset__values
            Radio-Checkbox(v-for="(item, i) in radioBtns", :key="item.id", :i="item.id", :type="item.type", :name="item.name", :value="item.value", :text="item.text", ref="radio", @check="checked")
      .fieldset.fieldset--grey
        .fieldset__wrap.container
          .fieldset__type Цвет
          .fieldset__values.fieldset--row
            Radio-Checkbox(v-for="(item, i) in checkboxBtns", :key="item.id", :i="item.id", :type="item.type", :name="item.name", :value="item.value", :text="item.text", ref="check", @check="checked")
      .fieldset
        .fieldset__wrap.container
          .fieldset__type ФИО
          .fieldset__values
            Input(v-for="(item, i) in userData", :key="i", :type="item.type", :name="item.name", :text="item.name", :placeholder="item.placeholder", @input="inputUser($event)")
      .fieldset.fieldset--grey
        .fieldset__wrap.container
          .fieldset__type Тел
          .fieldset__values
            Input(:type="phone.type", :name="phone.name", :text="phone.name", :placeholder="phone.placeholder", :icon="phone.icon", @input="inputTel($event)")

        .fieldset__wrap.container
          .fieldset__type E-mail
          .fieldset__values
            Input(:type="email.type", :name="email.name", :text="email.name", :placeholder="email.placeholder", :icon="email.icon", @input="inputEmail($event)")
      .fieldset
        .fieldset__wrap.container
          .fieldset__type Доп
          .fieldset__values
            Input(:type="wishes.type", :placeholder="wishes.placeholder", @input="inputText($event)")
      .fieldset
        .fieldset__wrap.container.fieldset__btn
          input.btn(type="submit", value="Отправить заказ")
          p.form__info *Поля обязательны для заполнения
    Modal(v-if="showModal", :typeForm="'sendOrder'")

</template>
<style lang="scss">
  @import '../../assets/sass/vars';
  @import '../../assets/sass/mixins';
  .order {
    background-color: #fff;
  }
  .fieldset {
    margin-bottom: 10px;
    padding-bottom: 14px;
    padding-top: 30px;
    &:last-child {
      padding-top: 0;
      padding-bottom: 0;
    }
    @include tablets {
      margin: 0;
      padding: 0;
    }
  }
  .order__text {
    font-size: 17px;
    line-height: 1.8;
    color: $greey-dark;
    max-width: 700px;
    margin: 0 auto 25px;
    @include tablets {
      font-size: 13px;
      margin-bottom: 15px;
    }
  }
  .fieldset__wrap {
    display: flex;
    @include tablets {
      flex-direction: column;
      align-items: stretch;
      overflow: hidden;
    }
  }
  .fieldset__values {
    flex-grow: 2;
    margin-right: 175px;
    @include laptop {
      margin-right: 0;
    }
  }
  .fieldset--grey {
    background-color: $greey-super-light;
    @include tablets {
      background-color: transparent;
    }
  }
  .fieldset--row {
    display: flex;
    flex-wrap: wrap;
    .input {
      width: 265px;
      @include laptop {
        width: 250px;
      }
    }
  }
  .fieldset__type {
    width: 175px;
    text-align: center;
    text-transform: uppercase;
    color: $green-dark;
    font-size: 17px;
    font-weight: 700;
    margin-top: 5px;
    flex-shrink: 0;
    @include laptop {
      width: 165px;
      text-align: left;
    }
    @include tablets {
      margin-bottom: 20px;
      position: relative;
      width: 100%;
      &::after {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background-color: $green-dark;
        position: absolute;
        top: 50%;
        right: -25%;
      }
    }
  }
  .fieldset__btn {
    max-width: 700px;
    display: flex;
    justify-content: space-between;
  }
  .form {
    margin-bottom: 50px;
    @include tablets {
      margin-bottom: 55px;
    }
  }
  .form__info {
    font-size: 17px;
    color: $hover;
    @include tablets {
      order: -1;
      font-size: 14px;
      margin-top: 0;
      margin-bottom: 30px;
    }
  }
</style>
<script>
import RadioCheckbox from './Radio-Checkbox.vue'
import Input from './Input.vue'
import Modal from '../Modal/Modal.vue'
export default {
  data () {
    return {
      showModal: false,
      radioBtns: [
        {type: 'radio', id: 0, name: 'type', value: 'interior', text: 'Аксессуар для интерьера'},
        {type: 'radio', id: 1, name: 'type', value: 'toy', text: 'Детская игрушка'}
      ],
      checkboxBtns: [
        {type: 'checkbox', id: 0, name: 'color', value: 'white', text: 'Белый'},
        {type: 'checkbox', id: 1, name: 'color', value: 'black', text: 'Черный'},
        {type: 'checkbox', id: 2, name: 'color', value: 'grey', text: 'Серый'},
        {type: 'checkbox', id: 3, name: 'color', value: 'pink', text: 'Розовый'},
        {type: 'checkbox', id: 4, name: 'color', value: 'tiffani', text: '"Тиффани"'},
        {type: 'checkbox', id: 5, name: 'color', value: 'orange', text: 'Оранжевый'}
      ],
      userData: [
        {type: 'text', name: 'Имя', placeholder: 'Укажите ваше имя*'},
        {type: 'text', name: 'Фамилия', placeholder: 'Укажите вашу фамилию*'},
        {type: 'text', name: 'Отчество', placeholder: 'Укажите ваше отчество*'}
      ],
      phone: {type: 'phone', icon: 'phone', placeholder: '+7 XXX XX XX*'},
      email: {type: 'email', icon: 'mail', placeholder: 'Ваш Email*'},
      wishes: {type: 'textarea', placeholder: 'Опишите все ваши пожелания к заказу'},
      formType: undefined,
      formColor: [],
      formUser: undefined,
      formTel: undefined,
      formEmail: undefined,
      formText: undefined
    }
  },
  components: {
    RadioCheckbox,
    Input,
    Modal
  },
  computed: {
    status () {
      return this.$store.state.statusMailSend
    }
  },
  methods: {
    checked (e) {
      const type = e[0]
      const i = e[1]
      const value = e[2]
      if (type === 'radio') {
        const radioBtns = this.$refs.radio
        radioBtns.forEach(item => {
          item.$el.classList.remove('is-checked')
        })
        radioBtns[i].$el.classList.toggle('is-checked')
        this.formType = value
      }
      if (type === 'checkbox') {
        const checkBtns = this.$refs.check
        checkBtns[i].$el.classList.toggle('is-checked')
        this.formColor.push(value)
      }
    },
    inputUser (e) {
      this.formUser = e
    },
    inputTel (e) {
      this.formTel = e
    },
    inputEmail (e) {
      this.formEmail = e
    },
    inputText (e) {
      this.formText = e
    },
    sendOrder () {
      let data = {
        user: this.formUser,
        email: this.formEmail,
        phone: this.formTel,
        typeOfGoods: this.formType,
        colorOfGoods: this.formColor,
        text: this.formText
      }
      this.$store.dispatch('sendOrder', data)
      if (this.status !== undefined) {
        return this.showModal = true
      }
      if (this.status === 'success') {
        this.formType = undefined
        this.formColor = []
        this.formUser = undefined
        this.formTel = undefined
        this.formEmail = undefined
        this.formText = undefined
      }
    }
  }
}
</script>
