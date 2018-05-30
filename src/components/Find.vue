<template>
    <div class="find">
        <!-- <div class="content" ref="content"> -->
            <div class="content-row m-t-18 top-long-solid bottom-long-solid">
                <div class="row-icon float">
                    <i class="iconfont icon-pengyouquan"></i>
                </div>
                <div class="row-title float">朋友圈</div>
                <div class="pyq-right">
                    <div><img src="../assets/images/yehua.jpg"></div>
                    <div class="state"></div>
                    <i class="iconfont icon-tongyongzhankaidayuhao"></i>
                </div>
            </div>
            
            <div class="content-row m-t-18 top-long-solid">
                <div class="row-icon float">
                    <i class="iconfont icon-saoyisao"></i>
                </div>
                <div class="row-title float">扫一扫</div>
                
            </div>
            <div class="content-row top-short-solid bottom-long-solid">
                <div class="row-icon float">
                    <i class="iconfont icon-yaoyiyao"></i>
                </div>
                <div class="row-title float">摇一摇</div>
                
            </div>
            <div class="content-row m-t-18 top-long-solid">
                <div class="row-icon float">
                    <i class="iconfont icon-gouwu"></i>
                </div>
                <div class="row-title float">购物</div>
                
            </div>
            <div class="content-row top-short-solid bottom-long-solid">
                <div class="row-icon float">
                    <i class="iconfont icon-tubiaozhizuomoban-"></i>
                </div>
                <div class="row-title float">游戏</div>
                
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
  name: "Find"
};
</script>
<style scoped>
/*--------- 页中 ---------*/
.find {
  background-color: #f9f9f9;
  overflow: scroll;
}
.find .content-row {
  height: 48px;
  padding: 10px 15px;
  background-color: #fff;
  position: relative;
}
.find .content-row .row-icon {
  margin-right: 10px;
  width: 30px;
  height: 20px;
  color: green;
}
.find .content-row .pyq-right {
  float: right;
  position: relative;
  width: 41px;
  padding-right: 13px;
}
.find .content-row .pyq-right .state {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  right: 6px;
  top: -4px;
}

.find .content-row .pyq-right div {
  width: 28px;
  height: 28px;
}
.find .content-row .pyq-right img {
  width: 28px;
  height: 28px;
}
.find .content-row .pyq-right i {
  position: absolute;
  right: -6px;
  top: 5px;
  color: #c8c8cd;
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
.m-t-18 {
  margin-top: 18px;
}
.float {
  float: left;
}
</style>


