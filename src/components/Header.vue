<template>
        <div class="header" ref="header">
            <div class="header-title">
                <span>{{headerTitle}}</span>
            </div>
           
            <!-- <div v-bind:class="{'header-right-icon':hasIcoCls}">
                <i  class="iconfont" v-bind:class="icoCls"></i>
            </div> -->
            <div v-bind:class="{'header-right-icon':$props['hasRightIconCls']}">
                <i  class="iconfont" v-bind:class="$props['iconCls']"></i>
            </div>
        </div>
</template>
<script>
export default {

    props:['headerTitle','hasRightIconCls','iconCls']
    // data(){
    //     return {
    //         hasIcoCls: this.hasRightIconCls,
    //         icoCls: this.iconCls
    //     }
    // }
}
</script>

