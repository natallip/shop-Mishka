<template lang="pug">
  section.section-reviews
    .container
      .review
        .review__header
          .review__title.title Отзывы
          .review__btn.btn(@click="addReview") Написать
        .review__text {{ review.text }}
        .review__footer
          .review__author
            .review__user {{ review.user }}
            .review__email {{ review.email }}
          .review__arrows(@click="moveSlider")
            .arrow.arrow--left(ref="prev")
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                <title>arrow-left</title>
                  <path d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"></path>
              </svg>
            .arrow.arrow--rigth(ref="next")
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                <title>arrow-right</title>
                  <path d="M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"></path>
              </svg>
        Modal(v-if="showModal", :typeForm="'saveReview'",  @close="close")

</template>
<style lang="scss">
  @import '../../assets/sass/vars';
  @import '../../assets/sass/mixins';
  .section-reviews {
    background: url('../../assets/img/demo/ware.svg') repeat-x 0% 100%;
    @include laptop {
      width: auto;
      background: url('../../assets/img/review.jpg') no-repeat 0% 0%, url('../../assets/img/demo/ware.svg') repeat-x 0% 100%;
    }
    @include tablets {
      background: url('../../assets/img/demo/ware.svg') repeat-x 0% 100%;
    }
  }
  .review {
    background: url('../../assets/img/review.jpg') no-repeat 0% 0%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 450px;
    padding-left: 175px;
    margin-bottom: 100px;
    position: relative;
    @include laptop {
      padding-left: 0;
      background: none;
    }
    @include tablets {
      justify-content: flex-start;
      margin-bottom: 160px;
      margin-top: 40px;
      min-height: 300px;
    }
  }
  .review__title {
    margin-bottom: 20px;
    @include tablets {
      margin-bottom: 20px;
    }
  }
  .review__header, .review__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .review__header {
    margin-bottom: 20px;
    @include tablets {
      margin-bottom: 0;
    }
  }
  .review__text {
    margin-bottom: 40px;
    max-width: 788px;
    font-size: 17px;
    line-height: 1.8;
    color: $greey-dark;
    @include tablets {
      font-size: 15px;
      line-height: 2;
      margin-bottom: 25px;
      max-height: 120px;
      overflow-y: auto;
    }
  }
  .review__user {
    font-size: 17px;
    font-weight: 700;
    color: #000;
    margin-bottom: 8px;
  }
  .review__email {
    font-size: 17px;
    color: $greey-dark;
  }
  .review__footer {
    margin-bottom: 30px;
    @include tablets {
      margin-bottom: 0;
    }
  }
  .review__arrows {
    display: flex;
    justify-content: space-around;
    width: 175px;
    @include tablets {
      width: 260px;
      position: absolute;
      bottom: -30px;
      left: 50%;
      transform: translateX(-50%);
      border-top: 2px solid $greey-super-light;
      border-bottom: 2px solid $greey-super-light;
      padding-top: 6px;
      padding-bottom: 2px;
    }
  }
  .arrow:hover {
    fill: $hover;
  }
  .review__btn {
    width: 175px;
    @include tablets {
      width: 260px;
      position: absolute;
      bottom: -100px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
</style>
<script>
import Modal from '../Modal/Modal.vue'
export default {
  data () {
    return {
      showModal: false,
      review: {
        user: '',
        email: '',
        text: ''
      },
      count: 0
    }
  },
  components: {
    Modal
  },
  computed: {
    getReviews () {
      return this.$store.state.reviews
    }
  },
  created () {
    this.$store.dispatch('loadReviews')
      .then(() => {
        return this.getReviews
      })
      .then(() => {
        this.review = this.getReviews[0]
        return this.review
      })
  },
  methods: {
    addReview () {
      this.showModal = true
    },
    moveSlider (e) {
      const target = e.target.closest('.arrow')
      const prev = this.$refs.prev
      const next = this.$refs.next

      if (target === next) {
        this.count++
        if (this.count > this.getReviews.length - 1) {
          this.count = 0
        }
        this.review = this.getReviews[this.count]
      }
      if (target === prev) {
        this.count--
        if (this.count < 0) {
          this.count = this.getReviews.length - 1
        }
        this.review = this.getReviews[this.count]
      }
    },
    getActiveReview () {
      this.review = this.$store.state.reviews[0]
    },
    close () {
      this.showModal = false
    }
  }
}
</script>
