<template lang="pug">
  .input
    .input__wrap(@input.lazy="input($event)")
      label.input__text(:for="name", v-if="text") {{ text }}:
      textarea.input__textarea.input__value(v-if="type==='textarea'", :name="name", :placeholder="placeholder", :id="name", autocomplete="off" rows="8" required)
      input.input__box.input__value(v-else, :type="type", :name="name", :placeholder="placeholder", :id="name", autocomplete="off" required)
      .input__icon-wrap(v-if="icon")
        svg.input__svg
          use(:xlink:href="`#${icon}`")
</template>
<script>
export default {
  props: ['type', 'name', 'placeholder', 'text', 'icon'],
  methods: {
    input (e) {
      const value = e.target.closest('.input__value').value
      this.$emit('input', value)
    }
  }
}
</script>
<style lang="scss">
  @import '../../assets/sass/vars';
  @import '../../assets/sass/mixins';
  .input--row {
    margin-right: 175px;
    @include laptop {
      margin-right: 0;
    }
  }
  .input__wrap {
    display: flex;
    position: relative;
    margin-bottom: 25px;
    margin-top: 8px;
    @include tablets {
      flex-direction: column;
    }
  }
  .input__text {
    margin-right: 30px;
    @include tablets {
      margin-left: 0;
    }
  }
  .input__box {
    flex-grow: 2;
    border: none;
    border-bottom: 2px solid $greey-dark;
    padding-left: 15px;
    padding-bottom: 10px;
    background-color: transparent;
    @include tablets {
      margin-top: 20px;
      padding-left: 0;
    }
  }
  .input__svg {
    width: 35px;
    height: 30px;
    fill: #ccc;
  }
  .input__icon-wrap {
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .input__textarea {
    border: 2px solid $greey-dark;
    height: 140px;
    padding: 10px 15px;
    outline: none;
    display: flex;
    width: 100%;
    resize: none;
    overflow: auto;
    background-color: transparent;
  }
  .input__textarea:hover, .input__textarea:focus {
    border: 2px solid $green-light;
  }
  .input__wrap:hover .input__box{
    border-bottom: 2px solid $green-light;
    outline: none;
  }
  .input__box:focus {
    border-bottom: 2px solid $green-light;
    outline: none;
  }
</style>
