export default {
  data () {
    return {
      navTop: [
        { href: '/catalog', name: 'Каталог товаров' },
        { href: '/order', name: 'Вязание на заказ' }
      ],
      navBottom: [
        { href: '/', name: 'Новое поступление' },
        { href: '/', name: 'Распродажа' }
      ],
      hamburger: this.$refs.hamburger
    }
  },
  computed: {
    count () {
      return this.$store.state.basket.length ? this.$store.state.basket.length : 'Пока пуста'
    },
    amount () {
      let totalAmount = 0
      this.$store.state.basket.forEach(item => {
        totalAmount = totalAmount + parseInt(item.total)
      })
      return totalAmount
    }
  },
  methods: {
    toggleMenu () {
      const hamburger = this.$refs.hamburger
      const menu = this.$refs.menu

      hamburger.classList.toggle('is-active')
      menu.classList.toggle('is-active')
    }
  }
}
