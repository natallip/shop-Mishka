<template lang="pug">
  .input(@click.prevent="check($event)")
    symbol(id="radio" viewBox="0 0 50 50")
      circle(class="unchecked" cx="25" cy="25" r="23")
      circle(class="checked" cx="25" cy="25" r="10")

    input(:type="type", :name="name", :value="value", :id="value", :i="i", @click="check")
    label.input__label(:for="value")
      .input__icon
        svg.form__icon(viewBox="0 0 50 50", v-if="type=='checkbox'")
          rect(class="unchecked" x="2" y="2" width="46" height="46")
          polyline(class="checked mark" points="10,22 20,32 40,15")
        svg.form__icon(viewBox="0 0 50 50" v-if="type=='radio'")
          circle(class="unchecked" cx="25" cy="25" r="23")
          circle(class="checked radio" cx="25" cy="25" r="10")

      .input__text {{ text }}
</template>
<script>
export default {
  props: ['type', 'name', 'value', 'text', 'i'],
  methods: {
    check () {
      this.$emit('check', [this.type, this.i, this.value])
    }
  }
}
</script>
<style lang="scss">
  @import '../../assets/sass/vars';
  @import '../../assets/sass/mixins';
  .input {
    margin-bottom: 20px;
    @include tablets {
      margin-bottom: 16px;
    }
  }
  .form__icon {
    width: 54px;
    height: 54px;
    margin-right: 20px;
    @include tablets {
      width: 40px;
      height: 40px;
      margin-right: 20px;
    }
  }
  .input__label {
    display: flex;
    align-items: center;
  }
  .checked {
    opacity: 0;
  }
  .is-checked .checked {
    opacity: 1;
  }
  input[type="radio"],
  input[type="checkbox"] {
    display: none;
  }
  .unchecked {
    stroke-width: 2px;
    stroke: #000;
    fill: none;
  }
  .checked {
    fill: $green-light;
  }
  .mark {
    fill: none;
    stroke-width: 2px;
    stroke: $greey-dark;
  }
  .input__text {
    font-size: 19px;
    font-weight: 700;
    color: #000;
    @include tablets {
      font-size: 17px;
      line-height: 1.1;
    }
  }
</style>
