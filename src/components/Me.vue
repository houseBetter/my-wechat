<template>
    <div class="me">
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
            <div class="content-row-1 m-t-18 top-long-solid bottom-long-solid">
                <div class="row-1-icon float">
                    <img src="https://sinacloud.net/vue-wechat/images/headers/header01.png" >
                </div>
                <div class="row-1-title float">
                    <div class="nickname">东华</div>
                    <div class="wx-num">微信号:abcde</div>
                </div>
                <div class="right">
                    <i class="iconfont icon-erweima"></i>
                    <i class="iconfont icon-tongyongzhankaidayuhao"></i>
                </div>
            </div>
            
            <div class="content-row m-t-18 top-long-solid">
                <div class="row-icon float">
                    <i class="iconfont icon-xiangce"></i>
                </div>
                <div class="row-title float">相册</div>
                
            </div>
            <div class="content-row top-short-solid">
                <div class="row-icon float">
                    <i class="iconfont icon-shoucang"></i>
                </div>
                <div class="row-title float">收藏</div>
                
            </div>
            <div class="content-row top-short-solid">
                <div class="row-icon float">
                    <i class="iconfont icon-icon-unpaid-o"></i>
                </div>
                <div class="row-title float">钱包</div>
                
            </div>
            <div class="content-row top-short-solid bottom-long-solid">
                <div class="row-icon float">
                    <i class="iconfont icon-wodeqiajuan"></i>
                </div>
                <div class="row-title float">卡卷</div>
                
            </div>
            <div class="content-row m-t-18 top-long-solid bottom-long-solid">
                <div class="row-icon float">
                    <i class="iconfont icon-biaoqing"></i>
                </div>
                <div class="row-title float">表情</div>
                
            </div>
            <div class="content-row m-t-18 top-long-solid bottom-long-solid">
                <div class="row-icon float">
                    <i class="iconfont icon-shezhi"></i>
                </div>
                <div class="row-title float">设置</div>
                
            </div>
            
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
  name: "Me",
  components:{
      MyHeader,
      MyFooter
  },
  data(){
      return {
          headerTitle:'我',
          cls:{
              hasRightIconCls: false,
              iconCls:{
                  'icon-tianjiahaoyou1':false,
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
.content{
    background-color:#f9f9f9;
    overflow: scroll;
}
.content .content-row{
    height: 48px;
    padding: 10px 15px;
    background-color: #fff;
    position: relative;
}
.content .content-row-1{
    height: 80px;
    padding: 10px 15px;
    background-color: #fff;
    position: relative;
}
.content .content-row-1 .row-1-icon{
    margin-right: 10px;
    width: 70px;
    height: 60px;
    color: green;
}
.content .content-row-1 .row-1-icon img{
    width: 60px;
    height: 60px;
    border-radius: 5px;
}
.content .content-row-1 .row-1-title .nickname{
    font-size: 16px;
    margin-bottom: 5px;

}
.content .content-row-1 .row-1-title .wx-num{
    font-size:13px;
}
.content .content-row-1 .right{
    text-align: right;
    height: 60px;
    line-height: 60px;
}
.content .content-row-1 .right i[class*='icon-erweima']::before{
    font-size: 20px;
}
.content .content-row .row-icon{
    margin-right: 10px;
    width: 30px;
    height: 20px;
    color: green;
}
.content .content-row .row-icon img{
    width: 60px;
    height: 60px;
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
.m-t-18{
    margin-top: 18px;
}
.float{
    float: left;
}

</style>


