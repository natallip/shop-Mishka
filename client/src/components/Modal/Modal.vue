<template lang="pug">
  .modal(ref="modal")
    .modal__bg
    .modal__block
      .modal__text
        p(v-if="(status === 'success' && this.typeForm === 'sendEmail')") Ваше сообщение отправлено!
        p(v-if="(status === 'success' && this.typeForm === 'saveReview')") Ваш отзыв отправлен!
        p(v-if="(status === 'success' && this.typeForm === 'sendOrder')") Ваш заказ принят!
      .modal__btn
        .btn(@click="toggle", v-if="showOk || this.status === 'success'")  OK
      .modal__close(@click="toggle")
        svg(viewBox="0 0 24 24")
          path(d="M17.414 6.586c-0.78-0.781-2.048-0.781-2.828 0l-2.586 2.586-2.586-2.586c-0.78-0.781-2.048-0.781-2.828 0-0.781 0.781-0.781 2.047 0 2.828l2.585 2.586-2.585 2.586c-0.781 0.781-0.781 2.047 0 2.828 0.39 0.391 0.902 0.586 1.414 0.586s1.024-0.195 1.414-0.586l2.586-2.586 2.586 2.586c0.39 0.391 0.902 0.586 1.414 0.586s1.024-0.195 1.414-0.586c0.781-0.781 0.781-2.047 0-2.828l-2.585-2.586 2.585-2.586c0.781-0.781 0.781-2.047 0-2.828z")

      form.modal__form(@submit.prevent="send", ref="form", v-if="status !=='success' && (typeForm==='saveReview' || typeForm==='sendEmail')")
        Input(:type="user.type", :name="user.name", :text="user.text", v-model="formUser", @input="inputUser($event)")
        Input(:type="email.type", :name="email.name", :text="email.text", v-model="formEmail", @input="inputEmail($event)")
        Input(:type="message.type", :name="message.name", :text="message.text", v-model="formText", @input="inputText($event)")
        .modal__btn
          input.btn(type="submit" value="Отправить")

</template>
<style lang="scss">
  @import '../../assets/sass/vars';
  @import '../../assets/sass/mixins';
  .modal {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 40;
  }
  .modal__bg {
    width: 100%;
    height: 100%;
    background-color: #ccc;
    opacity: .5;
    position: absolute;
    top: 0;
    left: 0;
  }
  .modal__block {
    padding: 20px 30px;
    background-color: $green-dark;
    color: #fff;
    position: relative;
    border-radius: 5px;
  }
  .modal__close {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 20px;
    height: 20px;
    &:hover {
      transform: scale(1.5)
    }
  }
  .modal__text {
    margin: 20px 0;
  }
  .modal__btn  {
    display: flex;
    justify-content: center;
    align-items: center;
    .btn {
      display: inline-block;
    }
  }
  .close {
    display: none;
  }
</style>
<script>
import Input from '../Order/Input.vue'
export default {
  data () {
    return {
      flag: false,
      showOk: false,
      user: {type: 'type', name: 'user', text: 'ФИО'},
      email: {type: 'email', name: 'email', text: 'Email'},
      message: {type: 'textarea', name: 'message'},
      formUser: undefined,
      formEmail: undefined,
      formText: undefined,
      value: ''
    }
  },
  computed: {
    status () {
      return this.$store.state.statusMailSend
    }
  },
  components: {
    Input
  },
  props: {
    text: String,
    typeForm: String,
    isShow: Boolean
  },
  created () {
    this.$store.commit('mailSent', 'error')
  },
  methods: {
    toggle () {
      this.$refs.modal.classList.toggle('close')
      this.$emit('close')
    },
    send () {
      let data = {
        user: this.formUser,
        email: this.formEmail,
        text: this.formText
      }
      this.$store.dispatch(this.typeForm, data)
    },
    inputUser (e) {
      this.formUser = e
    },
    inputEmail (e) {
      this.formEmail = e
    },
    inputText (e) {
      this.formText = e
    }
  }
}
</script>
