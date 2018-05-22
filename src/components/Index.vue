<template>
    <div class="wx">
        <!-- <div class="header" ref="header">
            <div class="header-title">
                <span>{{headerTitle}}</span>
            </div>
           
            <div v-bind:class="{'header-right-icon':cls.hasRightIconCls}">
                <i  class="iconfont" v-bind:class="cls.iconCls"></i>
            </div>
        </div> -->
        <!-- 页头 -->
        <my-header 
            :headerTitle="headerTitle" 
            :hasRightIconCls="cls.hasRightIconCls"
            :iconCls="cls.iconCls"
            ref="myHeader"
            ></my-header>

        <div class="content" ref="content">
            <div class="search-bar">
                <div class="bar-icon-input">
                    <i class="iconfont icon-suosou"></i>
                    <input type="text" placeholder="搜索" class="search_input"/>
                </div>
            </div>
            <!-- <div class="dialog-list">
                
                <router-link class="dialog-row" tag="div" to="/dialog">   
                    <div class="dialog-row-icon">
                        <img src="../assets/images/header01.png"/>
                        <i class="icon-state">9</i>
                    </div>
                    <div class="dialog-row-title">
                        <div class="row-title-nickname">东华</div>
                        <div class="row-title-msg">
                                夜华:我试一试
                        </div>
                    </div>
                    <div class="dialog-row-right">
                        <div class="right-time">22:04</div>
                        <div class="right-icon">
                            <i class="iconfont icon-maikefeng-jingyin-tianchongsvg"></i>
                        </div>
                    </div>
                </router-link>

                <router-link class="dialog-row" tag="div" to="/dialog">
                    <div class="dialog-row-icon">
                        <img src="../assets/images/sunquan.jpg">
                    </div>
                    <div class="dialog-row-title">
                        <div class="row-title-nickname">孙权</div>
                        <div class="row-title-msg">
                                夜华:我试一试
                        </div>
                    </div>
                    <div class="dialog-row-right">
                        <div class="right-time">22:04</div>
                        <div class="right-icon">
                            <i class="iconfont icon-maikefeng-jingyin-tianchongsvg"></i>
                        </div>
                    </div>
                </router-link>
                <router-link class="dialog-row" tag="div" to="/dialog">
                    <div class="dialog-row-icon">
                        <img src="../assets/images/sunshangxiang.jpg">
                    </div>
                    <div class="dialog-row-title">
                        <div class="row-title-nickname">孙尚香</div>
                        <div class="row-title-msg">
                                夜华:我试一试
                        </div>
                    </div>
                    <div class="dialog-row-right">
                        <div class="right-time">22:04</div>
                        <div class="right-icon">
                            <i class="iconfont icon-maikefeng-jingyin-tianchongsvg"></i>
                        </div>
                    </div>
                </router-link>
                <router-link class="dialog-row" tag="div" to="/dialog">
                    <div class="dialog-row-icon">
                        <img src="../assets/images/guangyu.jpg">
                    </div>
                    <div class="dialog-row-title">
                        <div class="row-title-nickname">关羽</div>
                        <div class="row-title-msg">
                                夜华:我试一试
                        </div>
                    </div>
                    <div class="dialog-row-right">
                        <div class="right-time">22:04</div>
                        <div class="right-icon">
                            <i class="iconfont icon-maikefeng-jingyin-tianchongsvg"></i>
                        </div>
                    </div>
                </router-link>
                <router-link class="dialog-row" tag="div" to="/dialog">
                    <div class="dialog-row-icon" ref="dialogRowIcon">
                        <img src="../assets/images/guangyu.jpg">
                        <img src="../assets/images/sunshangxiang.jpg">
                    </div>
                    <div class="dialog-row-title">
                        <div class="row-title-nickname">关、孙群</div>
                        <div class="row-title-msg">
                                夜华:我试一试
                        </div>
                    </div>
                    <div class="dialog-row-right">
                        <div class="right-time">22:04</div>
                        <div class="right-icon">
                            <i class="iconfont icon-maikefeng-jingyin-tianchongsvg"></i>
                        </div>
                    </div>
                </router-link>
                <router-link class="dialog-row" tag="div" to="/dialog">
                    <div class="dialog-row-icon" ref="dialogRowIcon">
                        <img src="../assets/images/guangyu.jpg">
                        <img src="../assets/images/sunshangxiang.jpg">
                        <img src="../assets/images/sunquan.jpg">
                    </div>
                    <div class="dialog-row-title">
                        <div class="row-title-nickname">第一大群</div>
                        <div class="row-title-msg">
                                夜华:我试一试
                        </div>
                    </div>
                    <div class="dialog-row-right">
                        <div class="right-time">22:04</div>
                        <div class="right-icon">
                            <i class="iconfont icon-maikefeng-jingyin-tianchongsvg"></i>
                        </div>
                    </div>
                </router-link>
                <router-link class="dialog-row" tag="div" to="/dialog">
                    <div class="dialog-row-icon" ref="dialogRowIcon">
                        <img src="../assets/images/guangyu.jpg">
                        <img src="../assets/images/sunshangxiang.jpg">
                        <img src="../assets/images/sunquan.jpg">
                        <img src="../assets/images/guangyu.jpg">
                        <img src="../assets/images/sunshangxiang.jpg">
                        <img src="../assets/images/sunquan.jpg">
                    </div>
                    <div class="dialog-row-title">
                        <div class="row-title-nickname">第二大群</div>
                        <div class="row-title-msg">
                                夜华:我试一试
                        </div>
                    </div>
                    <div class="dialog-row-right">
                        <div class="right-time">22:04</div>
                        <div class="right-icon">
                            <i class="iconfont icon-maikefeng-jingyin-tianchongsvg"></i>
                        </div>
                    </div>
                </router-link>
                <router-link class="dialog-row" tag="div" to="/dialog">
                    <div class="dialog-row-icon" ref="dialogRowIcon">
                        <img src="../assets/images/guangyu.jpg">
                        <img src="../assets/images/sunshangxiang.jpg">
                        <img src="../assets/images/sunquan.jpg">
                        <img src="../assets/images/guangyu.jpg">
                        <img src="../assets/images/sunshangxiang.jpg">
                        <img src="../assets/images/sunquan.jpg">
                        <img src="../assets/images/sunquan.jpg">
                        <img src="../assets/images/guangyu.jpg">
                        <img src="../assets/images/sunshangxiang.jpg">
                        <img src="../assets/images/sunquan.jpg">
                    </div>
                    <div class="dialog-row-title">
                        <div class="row-title-nickname">第3大群</div>
                        <div class="row-title-msg">
                                夜华:我试一试
                        </div>
                    </div>
                    <div class="dialog-row-right">
                        <div class="right-time">22:04</div>
                        <div class="right-icon">
                            <i class="iconfont icon-maikefeng-jingyin-tianchongsvg"></i>
                        </div>
                    </div>
                </router-link>
            </div> -->
            <my-msg-box 
                v-for="msg in MsgList"
                v-bind:key="msg.type==='user'?msg.userInfo[0].id:msg.groupInfo.gid"
                :data="msg">
            </my-msg-box>

        </div>
        
        <!-- <div class="footer" ref="footer">
            <div class="nav">
                <div class="nav-wx">
                    <div class="icon">
                        <i  class="iconfont icon-xinxi1"></i>
                    </div>
                    <div class="title">
                        <span>微信</span>
                    </div>
                    <div class="wx-state"><span>2</span></div>
                    
                </div>
                <div class="nav-contacts">
                     <div class="icon">
                        <i class="iconfont icon-tongxunlu" ></i>
                    </div>
                    <div class="title">
                        <span>通讯录</span>
                    </div>
                    <div class="contacts-state"></div>
                </div>
                <div class="nav-find">
                     <div class="icon">
                        <i class="iconfont icon-faxian"></i>
                    </div>
                    <div class="title">
                        <span>发现</span>
                    </div>
                    <div class="find-state"></div>
                </div>
                <div class="nav-me">
                     <div class="icon">
                        <i class="iconfont icon-wo"></i>
                    </div>
                    <div class="title">
                        <span>我</span>
                    </div>
                    <div class="me-state"></div>
                </div>
            </div>
        </div> -->
        <!-- 页底 -->
        <my-footer ref="myFooter"></my-footer>
    </div>
</template>
<script>
import MyHeader from './Header'
import MyFooter from './Footer'
import MyMsgBox from './MsgBox'
export default {
  name: "Index",
  components:{
      MyHeader,
      MyFooter,
      MyMsgBox
  },
  data() {
    return {
      headerTitle: "微信",
      cls: {
        hasRightIconCls: true,
        iconCls: {
          "icon-tianjiahaoyou1": false,
          "icon-jiahao": true
        }
      },
      MsgList:[
          {
              type:'user',//'user':个人;'group':群组
              userInfo:[{
                  uid:'1',
                  accountId:'1',
                  uname:'东华',
                  icon:require('../assets/images/header01.png')
              }],
              groupInfo:{
                  gid:'',
                  gname:''
                  
              },
              msgInfo:[

              ]
              
          },
          {
              type:'user',//'user':个人;'group':群组
              userInfo:[{
                  uid:'2',
                  accountId:'2',
                  uname:'夜华',
                  icon:require('../assets/images/yehua.jpg')
              }],
              groupInfo:{
                  gid:'',
                  gname:''
                  
              },
              msgInfo:[

              ]
              
          },
          {
              type:'group',//'user':个人;'group':群组
              userInfo:[{
                  uid:'2',
                  accountId:'2',
                  uname:'夜华',
                  icon:require(`../assets/images/yehua.jpg`)
              },
              {
                  uid:'3',
                  accountId:'3',
                  uname:'孙尚香',
                  icon:require('../assets/images/sunshangxiang.jpg')
              },
              {
                  uid:'4',
                  accountId:'4',
                  uname:'关羽',
                  icon:require('../assets/images/guangyu.jpg')
              }
              ],
              groupInfo:{
                  gid:'g1',
                  gname:'第一大群'
                  
              },
              msgInfo:[

              ]
              
          }
      ]
    };
  },
  mounted() {
    //   固定底部导航区可视区位置
    // const headerViewHeight = this.$refs.header.offsetHeight;
    // Header作为子组件，this.$refs.myHeader访问子组件，.$refs.header访问子组件中header元素
    const headerViewHeight = this.$refs.myHeader.$refs.header.offsetHeight;
     // const footerViewHeight = this.$refs.footer.offsetHeight;
    // 理由同上
    const footerViewHeight = this.$refs.myFooter.$refs.footer.offsetHeight;
    const totalHeight = document.documentElement.clientHeight;
    this.$refs.content.style.height =
      totalHeight - headerViewHeight - footerViewHeight + "px";
    


  }
};
</script>

<style scoped>
@import "../assets/iconfont/iconfont.css";

/*--------- 页中 ----------*/
.content{
    overflow: scroll;
}
/* 对话框 */
/* .content .dialog-list .dialog-row{
    height: 64px;
    padding: 8px;
    background-color:#fff;
    position: relative;
}
.content .dialog-list .dialog-row .dialog-row-icon{
    float:left;
    height: 48px;
    width: 48px;
    margin-right: 10px;
    background-color:#dddbdb;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    overflow:hidden;
}
.content .dialog-list .dialog-row .dialog-row-icon .icon-state{
    position: absolute;
    top: 0px;
    left: 46px;
    width: 18px;
    height: 18px;
    line-height: 18px;
    background-color:red;
    border-radius: 9px; 
    padding:0 4px;
    color:#fff;
    text-align: center;

    
}
.content .dialog-list .dialog-row .dialog-row-icon img{
    
    width:29%;
    height:auto;

    border-radius: 5px;
    margin:1px;
    flex-grow:2;

}
.content .dialog-list .dialog-row .dialog-row-title{
    float:left;
}
.content .dialog-list .dialog-row .dialog-row-title .row-title-nickname{
    height: 25px;
    line-height: 25px;
    font-size: 16px;
    color: #000;
}
.content .dialog-list .dialog-row .dialog-row-title .row-title-msg{
    height: 23px;
    line-height: 23px;
    font-size: 14px;
    color: #888;
}
.dialog-list .dialog-row-right{
    float:right;
}
.dialog-list .dialog-row-right .right-time{
    height: 25px;
    color:#b8b8b8;
    font:13px/1.5 Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Noto Sans CJK SC, WenQuanYi Micro Hei, Arial, sans-serif;
}
.dialog-list .dialog-row-right .right-icon{
    color:#b8b8b8;
    text-align: right;
}
.dialog-row:not(:first-child)::before{
    content: "";
    position: absolute;
    left: 8px;
    top: 0;
    right: 0px;
    background-color: #b7b7b7;
    height: 1px;
    transform: scale(.5);
    transform-origin: 0 0;
    width: 200%;
}
.dialog-row:last-child::after{
    content: "";
    position: absolute;
    left: 8px;
    bottom: 0;
    right: 0px;
    background-color: #b7b7b7;
    height: 1px;
    transform: scale(.5);
    transform-origin: 0 0;
    width: 200%;
} */


</style>


