import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main/Main.vue'
import Catalog from '../components/Catalog/Catalog.vue'
import Order from '../components/Order/Order.vue'
import Backet from '../components/Basket/Basket.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'home', component: Main},
    {path: '/catalog', name: 'catalog', component: Catalog},
    {path: '/order', name: 'order', component: Order},
    {path: '/basket', name: 'basket', component: Backet}
  ]
})
