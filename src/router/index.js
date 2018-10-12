import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/components/LoginPage'
import Todos from '@/components/Todos'
import AddTodo from '@/components/AddTodo'
import EditTodo from '@/components/EditTodo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/todos',
      name: 'Todos',
      component: Todos
    },
    {
      path: '/todos/new',
      name: 'AddTodo',
      component: AddTodo
    },
    {
      path: '/todos/:id/edit',
      name: 'EditTodo',
      component: EditTodo
    }
  ]
})
