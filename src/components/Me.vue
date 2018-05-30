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
        <!-- <my-header 
            :headerTitle="headerTitle" 
            :hasRightIconCls="cls.hasRightIconCls"
            :iconCls="cls.iconCls"
            ref="myHeader"
            ></my-header> -->
        <!-- <div class="content" ref="content"> -->
            <div class="content-row-1 m-t-18 top-long-solid bottom-long-solid">
                <div class="row-1-icon float">
                    <img src="../assets/images/header01.png" >
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
            
        <!-- </div> -->
       
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
        <!-- <my-footer ref="myFooter"></my-footer> -->

    </div>
</template>
<script>
export default {
  name: "Me"
};
</script>
<style scoped>
/*--------- 页中 ---------*/
.me{
    background-color:#f9f9f9;
    overflow: scroll;
}
.me .content-row{
    height: 48px;
    padding: 10px 15px;
    background-color: #fff;
    position: relative;
}
.me .content-row-1{
    height: 80px;
    padding: 10px 15px;
    background-color: #fff;
    position: relative;
}
.me .content-row-1 .row-1-icon{
    margin-right: 10px;
    width: 70px;
    height: 60px;
    color: green;
}
.me .content-row-1 .row-1-icon img{
    width: 60px;
    height: 60px;
    border-radius: 5px;
}
.me .content-row-1 .row-1-title .nickname{
    font-size: 16px;
    margin-bottom: 5px;

}
.me .content-row-1 .row-1-title .wx-num{
    font-size:13px;
}
.me .content-row-1 .right{
    text-align: right;
    height: 60px;
    line-height: 60px;
}
.me .content-row-1 .right i[class*='icon-erweima']::before{
    font-size: 20px;
}
.me .content-row .row-icon{
    margin-right: 10px;
    width: 30px;
    height: 20px;
    color: green;
}
.me .content-row .row-icon img{
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


