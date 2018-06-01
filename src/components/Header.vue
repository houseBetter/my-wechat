<template>
    <div class='header' ref='header'>
        <router-link :to='toPath' tag='div' class='header-left' v-show='hasHeaderLeft'>
            <!-- <div class='header-left'> -->
            <i class='iconfont icon-fanhui1'></i>
            <span>{{headerLeftTitle}}</span>

            <!-- </div> -->
        </router-link>
        <div class='header-title'>
            <span>{{headerTitle}}</span>
        </div>

        <div v-bind:class="{'header-right-icon':$props['hasRightIconCls']}" @click='show'>
            <i class='iconfont' v-bind:class='iconCls'></i>
            <ul class='tip-menu' v-show='listIsShow'>
                <li>
                    <i class='iconfont icon-xinxi1'></i>
                    <div>发起群聊</div>
                </li>
                <router-link tag='li' to=''>
                    <i class='iconfont icon-tianjiahaoyou1'></i>
                    <div>添加朋友</div>
                </router-link>
                <li>
                    <i class='iconfont icon-saoyisao'></i>
                    <div>扫一扫</div>
                </li>
                <li>
                    <i class='iconfont icon-shoufukuan'></i>
                    <div>收付款</div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  props: [
    'headerTitle',
    'hasRightIconCls',
    'iconCls',
    'hasHeaderLeft',
    'headerLeftTitle',
    'toPath',
    'listIsShow'
  ],
  methods: {
    show () {
      this.listIsShow = !this.listIsShow;
    }
  }
};
</script>
<style scoped>

.tip-menu {
  position: absolute;
  z-index: 2;
  width: 133px;
  font-size: 16px;
  right: 10px;
  top: 54px;
  text-align: left;
  border-radius: 2px;
  background-color: #49484b;
  padding: 0 15px;
  list-style:none;
}
.tip-menu li{
    position: relative;
    height: 40px;
    line-height: 40px;
}
.tip-menu::before{
    width: 0;
    height: 0;
    position: absolute;
    top: -7px;
    right: 15px;
    content: '';
    border-width: 0 6px 8px;
    border-color: transparent transparent #49484b transparent;
    border-style: solid;
}
.tip-menu li:not(:last-child)::after{
    content: '';
    width: 200%;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    background-color: #5b5b5d;
    -webkit-transform: scale(0.5);
    -ms-transform: scale(0.5);
    transform: scale(0.5);
    -webkit-transform-origin: 0 100%;
    -ms-transform-origin: 0 100%;
    transform-origin: 0 100%;
}
.tip-menu li div{
    height:40px;
    line-height: 40px;
    text-align: left;

}
.tip-menu li i{
    float: left;
    font-size: 16px;
    margin-right: 15px;
    height: 40px;
    line-height: 40px;
}

</style>
