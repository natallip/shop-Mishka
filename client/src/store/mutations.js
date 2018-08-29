let mutations = {
  setGoodsList (state, payload) {
    state.goods = payload
  },
  setReviewsList (state, payload) {
    state.reviews = payload
  },
  mailSent (state, payload) {
    state.statusMailSend = payload
  },
  changeBasket (state, payload) {
    let basket = state.basket
    function contains (arr, item) {
      return arr.findIndex(i => i.id === item.id)
    }
    let existIndex = contains(basket, payload)

    if (existIndex === -1) {
      basket.push(payload)
    } else {
      basket[existIndex].count += 1
      basket[existIndex].total = basket[existIndex].count * basket[existIndex].price
      return basket[existIndex].total
    }
  },
  changeCount (state, payload) {
    let count = payload.count
    const i = payload.i
    if (count < 1) {
      count = 1
    }
    state.basket[i].count = count
    state.basket[i].total = +state.basket[i].count * +state.basket[i].price
  },
  deleteItem (state, payload) {
    state.basket.splice(payload, 1)
  }
}

export default mutations
