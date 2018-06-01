import Vue from 'vue'
import Vuex from 'vuex'
// import actions from './actions.js'
// import mutations from './mutations.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // 搜索栏状态
    searchSet: {
      isShow: true
    },
    // 底部导航栏状态
    footerNavSet: {
      isShow: true
    },
    // 头部状态
    headerSet: {
      toPath: '/',
      headerTitle: '微信',
      cls: {
        hasRightIconCls: true,
        iconCls: {
          'icon-tianjiahaoyou1': false,
          'icon-jiahao': true
        }
      },
      hasHeaderLeft: false,
      headerLeftTitle: ''

    },
    msgList: [
      {
        uid: 'yehua',
        account: {
          fw: 'B', // 首字母
          uid: 'baiqian',
          uname: '白浅',
          icon: require('../assets/images/baiqian.jpg')
        },
        gid: '',
        gname: '',
        type: 'private', // 'private':私聊,'public':群聊
        users: [
          {
            uid: 'yehua',
            uname: '夜华',
            icon: require('../assets/images/yehua.jpg')
          },
          {
            uid: 'baiqian',
            uname: '白浅',
            icon: require('../assets/images/baiqian.jpg')
          }
        ],
        record: [
          {
            uid: 'baiqian',
            uname: '白浅',
            isMe: false,
            icon: require('../assets/images/baiqian.jpg'),
            say: '吃饭了没'
          },
          {
            uid: 'yehua',
            uname: '夜华',
            isMe: true,
            icon: require('../assets/images/yehua.jpg'),
            say: '没'
          },
          {
            uid: 'baiqian',
            uname: '白浅',
            isMe: false,
            icon: require('../assets/images/baiqian.jpg'),
            say: '一起吃吧'
          },
          {
            uid: 'yehua',
            uname: '夜华',
            isMe: true,
            icon: require('../assets/images/yehua.jpg'),
            say: '好'
          }
        ]
      },
      {
        uid: 'yehua', // 当前账号所属用户
        account: {
          fw: '',
          uid: '',
          uname: '',
          icon: ''
        },
        gid: '1group',
        gname: '第1大群',
        type: 'public', // 'private':私聊,'public':群聊
        users: [
          {
            uid: 'liubei',
            uname: '刘备',
            icon: require('../assets/images/liubei.jpg')
          },
          {
            uid: 'guangyu',
            uname: '关羽',
            icon: require('../assets/images/guangyu.jpg')
          },
          {
            uid: 'yehua',
            uname: '夜华',
            icon: require('../assets/images/yehua.jpg')
          }
        ],
        record: [
          {
            uid: 'liubei',
            uname: '刘备',
            isMe: false,
            icon: require('../assets/images/liubei.jpg'),
            say: '贤弟！'
          },
          {
            uid: 'guangyu',
            uname: '关羽',
            isMe: false,
            icon: require('../assets/images/guangyu.jpg'),
            say: '大哥！！'
          },
          {
            uid: 'liubei',
            uname: '刘备',
            isMe: false,
            icon: require('../assets/images/liubei.jpg'),
            say: '贤弟！！！'
          },
          {
            uid: 'guangyu',
            uname: '关羽',
            isMe: false,
            icon: require('../assets/images/guangyu.jpg'),
            say: '大哥！！'
          },
          {
            uid: 'liubei',
            uname: '刘备',
            isMe: false,
            icon: require('../assets/images/liubei.jpg'),
            say: '贤弟！！！！'
          },
          {
            uid: 'guangyu',
            uname: '关羽',
            isMe: false,
            icon: require('../assets/images/guangyu.jpg'),
            say: '你有病吧！'
          },
          {
            uid: 'yehua',
            uname: '夜华',
            isMe: true,
            icon: require('../assets/images/yehua.jpg'),
            say: '一群2货'
          }
        ]
      },
      {
        uid: 'yehua',
        account: {
          fw: 'G',
          uid: 'guangyu',
          uname: '关羽',
          icon: require('../assets/images/guangyu.jpg')
        },
        gid: '',
        gname: '',
        type: 'private', // 'private':私聊,'public':群聊
        users: [
          {
            uid: 'yehua',
            uname: '夜华',
            icon: require('../assets/images/yehua.jpg')
          },
          {
            uid: 'guangyu',
            uname: '关羽',
            icon: require('../assets/images/guangyu.jpg')
          }
        ],
        record: [
          {
            uid: 'yehua',
            uname: '夜华',
            isMe: true,
            icon: require('../assets/images/yehua.jpg'),
            say: '小关'
          },
          {
            uid: 'guangyu',
            uname: '关羽',
            isMe: false,
            icon: require('../assets/images/guangyu.jpg'),
            say: '不在'
          }
        ]
      },
      {
        uid: 'yehua',
        account: {
          fw: 'H',
          uid: 'huangyueying',
          uname: '黄月英',
          icon: require('../assets/images/huangyueying.jpg')
        },
        gid: '',
        gname: '',
        type: 'private',
        users: [
          {
            uid: 'yehua',
            uname: '夜华',
            icon: require('../assets/images/yehua.jpg')
          },
          {
            uid: 'huangyueying',
            uname: '黄月英',
            icon: require('../assets/images/huangyueying.jpg')
          }
        ],
        record: []
      },
      {
        uid: 'yehua',
        account: {
          fw: 'L',
          uid: 'liubei',
          uname: '刘备',
          icon: require('../assets/images/liubei.jpg')
        },
        gid: '',
        gname: '',
        type: 'private',
        users: [
          {
            uid: 'yehua',
            uname: '夜华',
            icon: require('../assets/images/yehua.jpg')
          },
          {
            uid: 'liubei',
            uname: '刘备',
            icon: require('../assets/images/liubei.jpg')
          }
        ],
        record: []
      },
      {
        uid: 'yehua',
        account: {
          fw: 'S',
          uid: 'sunshangxiang',
          uname: '孙尚香',
          icon: require('../assets/images/sunshangxiang.jpg')
        },
        gid: '',
        gname: '',
        type: 'private',
        users: [
          {
            uid: 'yehua',
            uname: '夜华',
            icon: require('../assets/images/yehua.jpg')
          },
          {
            uid: 'sunshangxiang',
            uname: '孙尚香',
            icon: require('../assets/images/sunshangxiang.jpg')
          }
        ],
        record: []
      },
      {
        uid: 'yehua',
        account: {
          fw: 'Y',
          uid: 'yehua',
          uname: '夜华',
          icon: require('../assets/images/yehua.jpg')
        },
        gid: '',
        gname: '',
        type: 'private',
        users: [
          {
            uid: 'yehua',
            uname: '夜华',
            icon: require('../assets/images/yehua.jpg')
          }
        ],
        record: []
      }
    ]

  },
  mutations: {
    modifyHeaderSet (state, payload) {
      state.headerSet = payload.headerSet
    },
    modifyFooterNavSet (state, payload) {
      state.footerNavSet.isShow = payload.isShow
    },
    modifySearchSet (state, payload) {
      state.searchSet.isShow = payload.isShow
    }
  },
  actions: {},
  getters: {
    getAccountsBySort: state => { // 通讯录按字母排序
      let arry = Array.from(state.msgList).filter(ele => ele.type === 'private');
      return arry.sort(function (a, b) {
        if (a.account.fw < b.account.fw) return -1;
        if (a.account.fw > b.account.fw) return 1;
        return 0;
      })
    },
    getFWBySort: state => { // 通讯录中人名首字母按字母顺序排
      let arry = Array.from(state.msgList).filter(ele => ele.type === 'private');
      arry.sort(function (a, b) {
        if (a.account.fw < b.account.fw) return -1;
        if (a.account.fw > b.account.fw) return 1;
        return 0;
      });
      let fwArray = [];
      for (let i = 0; i < arry.length; i++) {
        if (i === 0) {
          fwArray[i] = arry[i].account.fw;
        }
        let len = fwArray.length;
        for (let j = 0; j < len; j++) {
          if (fwArray[j] === arry[i].account.fw) break;
          if (j === len - 1) {
            fwArray.push(arry[i].account.fw)
          }
        }
      }
      return fwArray;
    },
    getMsgByTypeAndId: (state) => (type, id) => {
      let arry = state.msgList;
      return arry.filter(ele => {
        return (type === ele.type && ele.account.uid === id) ||
          (type === ele.type && ele.gid === id)
      })[0];
    }
  }
});
export default store
