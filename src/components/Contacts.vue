<template>
    <div class="contacts">
        <!-- <div class="header" ref="header">
            <div class="header-title">
                <span>{{headerTitle}}</span>
            </div>
           
            <div v-bind:class="{'header-right-icon':cls.hasRightIconCls}">
                <i  class="iconfont" v-bind:class="cls.iconCls"></i>
            </div>
        </div> -->
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
                <div class="first-word">
                    <span>B</span>
                </div>
                <div class="friend top-long-solid bottom-long-solid">
                    <div class="float">
                        <img src="../assets/images/baiqian.jpg">
                    </div>
                    <div ><span class="b-h-l-32">白浅</span></div>
                </div>
                <div class="first-word">
                    <span>G</span>
                </div>
                <div class="friend top-long-solid bottom-long-solid">
                    <div class="float"><img src="../assets/images/guangyu.jpg"></div>
                    <div ><span class="b-h-l-32">关羽</span></div>
                </div>
                <div class="first-word">
                    <span>H</span>
                </div>
                <div class="friend top-long-solid bottom-long-solid">
                    <div class="float"><img src="../assets/images/huangyueying.jpg"></div>
                    <div ><span class="b-h-l-32">黄月英</span></div>
                </div>
                <div class="first-word">
                    <span>L</span>
                </div>
                <div class="friend top-long-solid bottom-long-solid">
                    <div class="float"><img src="../assets/images/liubei.jpg"></div>
                    <div ><span class="b-h-l-32">刘备</span></div>
                </div>
                <div class="first-word">
                    <span>S</span>
                </div>
                <div class="friend top-long-solid">
                    <div class="float"><img src="../assets/images/sunshangxiang.jpg"></div>
                    <div ><span class="b-h-l-32">孙尚香</span></div>
                </div>
                <div class="friend top-short-solid bottom-long-solid">
                    <div class="float"><img src="../assets/images/sunquan.jpg"></div>
                    <div ><span class="b-h-l-32">孙权</span></div>
                </div>
                <div class="first-word">
                    <span>Y</span>
                </div>
                <div class="friend top-long-solid bottom-long-solid">
                    <div class="float"><img src="../assets/images/yehua.jpg"></div>
                    <div ><span class="b-h-l-32">夜华</span></div>
                </div>
            </div>
        </div>
        <div class="first-word-bar">
            <span>B</span>
            <span>G</span>
            <span>H</span>
            <span>L</span>
            <span>S</span>
            <span>Y</span>
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
        <my-footer ref="myFooter"></my-footer>
    </div>
</template>
<script>
import MyHeader from './Header'
import MyFooter from './Footer'
export default {
  name: "Contacts",
  components:{
      MyHeader,
      MyFooter
  },
  data(){
      return {
          headerTitle:'通讯录',
          cls:{
              hasRightIconCls: true,
              iconCls:{
                  'icon-tianjiahaoyou1':true,
                  'icon-jiahao':false
              }
          }
      }
  },
  mounted(){
    // const headerViewHeight = this.$refs.header.offsetHeight;
    // Header作为子组件，this.$refs.myHeader访问子组件，.$refs.header访问子组件中header元素
    const headerViewHeight = this.$refs.myHeader.$refs.header.offsetHeight;
     // const footerViewHeight = this.$refs.footer.offsetHeight;
    // 理由同上
    const footerViewHeight = this.$refs.myFooter.$refs.footer.offsetHeight;
    const totalHeight = document.documentElement.clientHeight;
    this.$refs.content.style.height = (totalHeight - headerViewHeight - footerViewHeight) + "px";

  }
};
</script>
<style scoped>

/*--------- 页中 ---------*/

/* 新的朋友、群聊、标签、公众号 */
.content .contacts-public{
    height: 208px;
    background-color: #fff;
    font-size:15px;

}
.content .contacts-public .new-friend,
.content .contacts-public .group-chat,
.content .contacts-public .tags,
.content .contacts-public .public{
    height: 52px;
    line-height: 52px;
    padding-left:15px;
    position: relative;
    

}
.content .contacts-public .new-friend i::before,
.content .contacts-public .group-chat i::before,
.content .contacts-public .tags i::before,
.content .contacts-public .public i::before{
    font-size: 30px;
    color:green;
}
.content .contacts-public i{
    display: inline-block;
    height:52px;
    line-height: 52px;
}
.float{
    float:left;
    margin-right:10px;
}
.b-h-l-52{
    display: block;
    height:52px;
    line-height: 52px;
}
.b-h-l-32{
    display: block;
    height:32px;
    line-height: 32px;
}

.top-long-solid::before{
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
.bottom-long-solid::after{
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
.top-short-solid::before{
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
.content .contacts-friends .friend img{
    width: 32px;
    height: 32px;
}

.content .contacts-friends .first-word{
    height: 22px;
    margin-top: 11px;
    margin-bottom: 4px;
    padding-left: 15px;
    color:#999;
}
.content .contacts-friends .friend{
    height: 52px;
    padding: 10px 15px 0;
    background-color:#fff;
    position: relative;
}
/* 首单词表 */
.contacts .first-word-bar{
    width: 10px;
    position: absolute;
    right: 2px;
    top: 50%;
    text-align: left;
    font-size: 13px;
}

</style>


