<template>
        <div class="header" ref="header">
            <router-link :to="toPath" tag="div" class="header-left" v-show="hasHeaderLeft">
                <!-- <div class="header-left"> -->
                    <i class="iconfont icon-fanhui1"></i>
                    <span>{{headerLeftTitle}}</span>                

                <!-- </div> -->
            </router-link>
            <div class="header-title">
                <span>{{headerTitle}}</span>
            </div>
           
            <div v-bind:class="{'header-right-icon':$props['hasRightIconCls']}">
                <i  class="iconfont" v-bind:class="iconCls"></i>
            </div>
        </div>
</template>
<script>
export default {
    props:['headerTitle','hasRightIconCls','iconCls','hasHeaderLeft','headerLeftTitle','toPath']
    
}
</script>

