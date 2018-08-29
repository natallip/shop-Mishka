let actions = {
  loadGoods ({ commit }) {
    return fetch('http://localhost:8081/api/getGoods', {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        commit('setGoodsList', data)
      })
  },
  loadReviews ({ commit }) {
    return fetch('http://localhost:8081/api/getReviews', {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        commit('setReviewsList', data)
      })
  },
  sendEmail ({ commit }, payload) {
    return fetch('http://localhost:8081/api/send-email', {
      method: 'POST',
      body: JSON.stringify(payload)
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        commit('mailSent', data)
      })
  },
  saveReview ({ commit }, payload) {
    return fetch('http://localhost:8081/api/save-review', {
      method: 'POST',
      body: JSON.stringify(payload)
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        commit('setReviewsList', data)
        commit('mailSent', 'success')
      })
  },
  sendOrder ({ commit }, payload) {
    return fetch('http://localhost:8081/api/send-order', {
      method: 'POST',
      body: JSON.stringify(payload)
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        commit('mailSent', data)
      })
  }
}

export default actions
