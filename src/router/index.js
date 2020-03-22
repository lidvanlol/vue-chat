import Vue from 'vue'
import VueRouter from 'vue-router'
import AddRoom from '../components/AddRoom.vue'
import Chat from '../components/Chat.vue'
import Login from '../components/Login'
import Room from '../components/Room'

Vue.use(VueRouter)

const routes = [
  {
    path: '/chat/:nickname/:roomid/:roomname',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/room/:nickname',
    name: 'RoomList',
    component: Room
  },
  {
    path: '/add-room',
    name: 'AddRoom',
    component: AddRoom
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
