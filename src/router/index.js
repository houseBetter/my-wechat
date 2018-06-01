import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Index from '@/components/Index'
import Contacts from '@/components/Contacts'
import Find from '@/components/Find'
import Me from '@/components/Me'
import Dialog from '@/components/Dialog'
import MsgBox from '@/components/MsgBox'
import DialogBox from '@/components/DialogBox'
// import Header from '@/components/Header'
import Content from '@/components/Content'
// import Vuex from '@/components/Vuex'
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    // {
    //   path: '/',
    //   name: 'Index',
    //   component: Index
    // },
    {
      path: '/',
      name: 'Content',
      component: Content
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
    },
    {
      path: '/dialog',
      name: 'Dialog',
      component: Dialog
    },
    {
      path: '/msg-box',
      name: 'MsgBox',
      component: MsgBox
    },
    {
      path: '/dialog-box/:data',
      name: 'DialogBox',
      component: DialogBox
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }

  ]
})
