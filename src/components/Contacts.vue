<template>
    <div class="contacts">
        <div class="contacts-public">
                <div class="new-friend">
                    <div class="float"><i class="iconfont icon-xindepengyou"></i></div>
                    <div><span class="b-h-l-52">新的朋友</span></div>
                </div>
                <div class="group-chat top-short-solid">
                    <div class="float"><i class="iconfont icon-qunliaotubiao"></i></div>
                    <div ><span class="b-h-l-52">群聊</span></div>
                </div>
                <div class="tags top-short-solid">
                    <div class="float"><i class="iconfont icon-biaoqian"></i></div>
                    <div><span class="b-h-l-52">标签</span></div>
                </div>
                <div class="public top-short-solid bottom-long-solid">
                    <div class="float"><i class="iconfont icon-gongzhonghaopingtaianquanzhushoutubiao"></i></div>
                    <div><span class="b-h-l-52">公众号</span></div>
                </div>
            </div>
        <div class="contacts-friends">
                <template v-for="msg in msgList">
                     <div class="first-word" :key="'fw'+msg.account.uid">
                        <span>B</span>
                    </div>
                    <router-link tag="div" class="friend top-long-solid bottom-long-solid"
                        :to="{name:'DialogBox',params:{data:msg}}"
                        :key="msg.account.uid"
                    >
                        <div class="float">
                            <img :src=msg.account.icon>
                        </div>
                        <div ><span class="b-h-l-32">{{msg.account.uname}}</span></div>
                    </router-link>
                </template>
            </div>
        <div class="first-word-bar">
            <span>B</span>
            <span>G</span>
            <span>H</span>
            <span>L</span>
            <span>S</span>
            <span>Y</span>
        </div>
      
    </div>
</template>
<script>
import MyHeader from "./Header";
import MyFooter from "./Footer";
export default {
  name: "Contacts",
  components: {
    MyHeader,
    MyFooter
  },
  computed: {},
  data() {
    return {
      headerTitle: "通讯录",
      cls: {
        hasRightIconCls: true,
        iconCls: {
          "icon-tianjiahaoyou1": true,
          "icon-jiahao": false
        }
      },
      msgList: [
        {
          uid: "yehua",//表示当前自己
          account:{
              uid:"baiqian",//表示账号所属用户
              uname:"白浅",
              icon:require("../assets/images/baiqian.jpg")
          },
          gid: "",
          gname: "",
          type: "private", //'private':私聊,'public':群聊
          users: [
            {
              uid: "yehua",
              uname: "夜华",
              icon: require("../assets/images/yehua.jpg")
            },
            {
              uid: "baiqian",
              uname: "白浅",
              icon: require("../assets/images/baiqian.jpg")
            }
          ],
          record: []
        },
        {
          uid: "yehua",//表示当前自己
          account:{
              uid:"guangyu",//表示账号所属用户
              uname:"关羽",
              icon:require("../assets/images/guangyu.jpg")
          },
          gid: "",
          gname: "",
          type: "private", //'private':私聊,'public':群聊
          users: [
            {
              uid: "yehua",
              uname: "夜华",
              icon: require("../assets/images/yehua.jpg")
            },
            {
              uid:"guangyu",
              uname:"关羽",
              icon:require("../assets/images/guangyu.jpg")
            }
          ],
          record: []
        },
        {
          uid: "yehua",
          account:{
              uid:"huangyueying",
              uname:"黄月英",
              icon:require("../assets/images/huangyueying.jpg")
          },
          gid: "",
          gname: "",
          type: "private", //'private':私聊,'public':群聊
          users: [
            {
              uid: "yehua",
              uname: "夜华",
              icon: require("../assets/images/yehua.jpg")
            },
            {
              uid:"huangyueying",
              uname:"黄月英",
              icon:require("../assets/images/huangyueying.jpg")
            }
          ],
          record: []
        },
        {
          uid: "yehua",
          account:{
              uid:"liubei",
              uname:"刘备",
              icon:require("../assets/images/liubei.jpg")
          },
          gid: "",
          gname: "",
          type: "private", //'private':私聊,'public':群聊
          users: [
            {
              uid: "yehua",
              uname: "夜华",
              icon: require("../assets/images/yehua.jpg")
            },
            {
              uid:"liubei",
              uname:"刘备",
              icon:require("../assets/images/liubei.jpg")
            }
          ],
          record: []
        },
        {
          uid: "yehua",
          account:{
              uid:"sunshangxiang",
              uname:"孙尚香",
              icon:require("../assets/images/sunshangxiang.jpg")
          },
          gid: "",
          gname: "",
          type: "private", //'private':私聊,'public':群聊
          users: [
            {
              uid: "yehua",
              uname: "夜华",
              icon: require("../assets/images/yehua.jpg")
            },
            {
              uid:"sunshangxiang",
              uname:"孙尚香",
              icon:require("../assets/images/sunshangxiang.jpg")
            }
          ],
          record: []
        },
        {
          uid: "yehua",
          account:{
              uid:"yehua",
              uname:"夜华",
              icon:require("../assets/images/yehua.jpg")
          },
          gid: "",
          gname: "",
          type: "private", //'private':私聊,'public':群聊
          users: [
            {
              uid: "yehua",
              uname: "夜华",
              icon: require("../assets/images/yehua.jpg")
            }
          ],
          record: []
        }
      ]
    };
  }
};
</script>
<style scoped>
/*--------- 页中 ---------*/

/* 新的朋友、群聊、标签、公众号 */
.contacts .contacts-public {
  height: 208px;
  background-color: #fff;
  font-size: 15px;
}
.contacts .contacts-public .new-friend,
.contacts .contacts-public .group-chat,
.contacts .contacts-public .tags,
.contacts .contacts-public .public {
  height: 52px;
  line-height: 52px;
  padding-left: 15px;
  position: relative;
}
.contacts .contacts-public .new-friend i::before,
.contacts .contacts-public .group-chat i::before,
.contacts .contacts-public .tags i::before,
.contacts .contacts-public .public i::before {
  font-size: 30px;
  color: green;
}
.contacts .contacts-public i {
  display: inline-block;
  height: 52px;
  line-height: 52px;
}
.float {
  float: left;
  margin-right: 10px;
}
.b-h-l-52 {
  display: block;
  height: 52px;
  line-height: 52px;
}
.b-h-l-32 {
  display: block;
  height: 32px;
  line-height: 32px;
}

.top-long-solid::before {
  content: " ";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  background-color: #d9d9d9;
  height: 1px;
  transform: scale(0.5);
  transform-origin: 0 0;
  width: 200%;
}
.bottom-long-solid::after {
  content: " ";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
  /* background-color: #d9d9d9; */
  border-top: 1px solid #d9d9d9;
  height: 1px;
  transform: scale(0.5);
  transform-origin: 0 0;
  width: 200%;
}
.top-short-solid::before {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 1px;
  border-top: 1px solid #d9d9d9;
  color: #d9d9d9;
  left: 15px;
  transform: scale(0.5);
  transform-origin: 0 0;
  width: 200%;
}
/* 朋友列表 */
.contacts .contacts-friends .friend img {
  width: 32px;
  height: 32px;
}

.contacts .contacts-friends .first-word {
  height: 22px;
  margin-top: 11px;
  margin-bottom: 4px;
  padding-left: 15px;
  color: #999;
}
.contacts .contacts-friends .friend {
  height: 52px;
  padding: 10px 15px 0;
  background-color: #fff;
  position: relative;
}
/* 首单词表 */
.contacts .first-word-bar {
  width: 10px;
  position: absolute;
  right: 2px;
  top: 50%;
  text-align: left;
  font-size: 13px;
}
</style>


