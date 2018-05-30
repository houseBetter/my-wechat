import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js'
// import mutations from './mutations.js'


Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        // 搜索栏状态
        searchSet:{
            isShow:true
        },
        // 底部导航栏状态
        footerNavSet:{
            isShow:true
        },
        // 头部状态
        headerSet:{

            headerTitle: "微信",
            cls: {
            hasRightIconCls: true,
            iconCls: {
                "icon-tianjiahaoyou1": false,
                "icon-jiahao": true
                }
            },
            hasHeaderLeft:false,
            headerLeftTitle:''

        },
        msgList: [
            {
                uid: 'yehua',
                account: {
                    uid: 'baiqian',
                    uname: '白浅',
                    icon: require('../assets/images/baiqian.jpg')
                },
                gid: '',
                gname: '',
                type: 'private', //'private':私聊,'public':群聊
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
                uid: 'yehua', //当前账号所属用户
                account: {
                    uid: '',
                    uname: '',
                    icon: ''
                },
                gid: '1group',
                gname: '第1大群',
                type: 'public', //'private':私聊,'public':群聊
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
                        uid: '刘备',
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
                        uid: '刘备',
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
                        uid: '刘备',
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
                    uid: 'guangyu',
                    uname: '关羽',
                    icon: require('../assets/images/guangyu.jpg')
                },
                gid: '',
                gname: '',
                type: 'private', //'private':私聊,'public':群聊
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
            }
        ]

    },
    mutations: {
        modifyHeaderSet(state,payload){
            state.headerSet = payload.headerSet
        },
        modifyFooterNavSet(state,payload){
            state.footerNavSet.isShow = payload.isShow
        },
        modifySearchSet(state,payload){
            state.searchSet.isShow = payload.isShow
        }
    },
    actions: {},
    getters: {}
});

export default store
