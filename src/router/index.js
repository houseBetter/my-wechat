import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Contacts from '@/components/Contacts'
import Find from '@/components/Find'
import Me from '@/components/Me'
import Dialog from '@/components/Dialog'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts
    },
    {
      path: '/find',
      name: 'Find',
      component: Find
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    },{
      path: '/dialog',
      name: 'Dialog',
      component: Dialog
    }

  ]
})
