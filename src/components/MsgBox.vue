<template>
    <div class='dialog-list' >
            <template v-if="data.type==='private' && data.record.length > 0" >
                <template v-for='user in data.users' v-if='user.uid !== data.uid' >
                    <router-link class='dialog-row' tag='div' :to="{name:'DialogBox',params:{data:{type:data.type,id:data.account.uid}}}" :key='user.uid'>
                        <div class='dialog-row-icon'>
                            <img :src='user.icon'/>
                            <i class='icon-state'>{{data.record.length}}</i>
                        </div>
                        <div class='dialog-row-title'>
                            <div class='row-title-nickname'>{{user.uname}}</div>
                            <div class='row-title-msg'>
                                {{data.record[data.record.length-1].uname}}:{{data.record[data.record.length-1].say}}
                            </div>
                        </div>
                        <div class='dialog-row-right'>
                            <div class='right-time'>22:04</div>
                            <div class='right-icon'>
                                <i class='iconfont icon-maikefeng-jingyin-tianchongsvg'></i>
                            </div>
                        </div>
                    </router-link>
                </template>
            </template>
            <template v-else-if="data.type==='public' && data.record.length > 0">
                <router-link class='dialog-row' tag='div' :to="{name:'DialogBox',params:{data:{type:data.type,id:data.gid}}}">
                    <div class='dialog-row-icon' ref='dialogRowIcon'>
                        <img
                        :src='user.icon'
                        v-bind:key='user.uid'
                        v-for='user in data.users'>
                        <i class='icon-state'>{{data.record.length}}</i>
                    </div>
                    <div class='dialog-row-title'>
                        <div class='row-title-nickname'>{{data.gname}}</div>
                        <div class='row-title-msg'>
                            {{data.record[data.record.length-1].uname}}:{{data.record[data.record.length-1].say}}
                        </div>
                    </div>
                    <div class='dialog-row-right'>
                        <div class='right-time'>22:04</div>
                        <div class='right-icon'>
                            <i class='iconfont icon-maikefeng-jingyin-tianchongsvg'></i>
                        </div>
                    </div>
                </router-link>
            </template>
    </div>
</template>
<script>
export default {
  name: 'MsgBox',
  props: ['data']
}
</script>
<style scoped>

/* 对话框 */
.dialog-list .dialog-row{
    height: 64px;
    padding: 8px;
    background-color:#fff;
    position: relative;
}
.dialog-list .dialog-row .dialog-row-icon{
    float:left;
    height: 48px;
    width: 48px;
    margin-right: 10px;
    background-color:#dddbdb;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /* flex-flow: row wrap; */
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    overflow:hidden;
}
.dialog-list .dialog-row .dialog-row-icon .icon-state{
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
.dialog-list .dialog-row .dialog-row-icon img{
    /* width: 48px; */
    /* width:30%; */
    width:29%;
    height:auto;
    /* height: 48px; */
    border-radius: 5px;
    margin:1px;
    flex-grow:2;

}
.dialog-list .dialog-row .dialog-row-title{
    float:left;
}
.dialog-list .dialog-row .dialog-row-title .row-title-nickname{
    height: 25px;
    line-height: 25px;
    font-size: 16px;
    color: #000;
}
.dialog-list .dialog-row .dialog-row-title .row-title-msg{
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
    content: '';
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
    content: '';
    position: absolute;
    left: 8px;
    bottom: 0;
    right: 0px;
    background-color: #b7b7b7;
    height: 1px;
    transform: scale(.5);
    transform-origin: 0 0;
    width: 200%;
}

</style>
