<template>
  <div class='dialog'>
    <my-header :headerTitle='headerTitle' :hasRightIconCls='cls.hasRightIconCls' :iconCls='cls.iconCls' :hasHeaderLeft='cls.hasHeaderLeft' ref='myHeader'></my-header>
    <div class='content' ref='content'>
      <div class='msg-list'>
        <div class='msg-row'>
          <div class='msg-icon'>
            <img src='../assets/images/baiqian.jpg'>
          </div>
          <div class='msg-box'>
            曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及， 人世间最痛苦的事莫过于此。 如果上天能够给我一个再来一次的机会， 我会对那个女孩子说三个字：我爱你。 如果非要在这份爱上加上一个期限， 我希望是…… 一万年！！

          </div>
        </div>
        <div class='msg-row'>
          <div class='msg-icon'>
            <img src='../assets/images/baiqian.jpg'>
          </div>
          <div class='msg-box'>
            吃饭了没
          </div>
        </div>
        <div class='msg-row-me'>
          <div class='msg-icon'>
            <img src='../assets/images/yehua.jpg'>
          </div>
          <div class='msg-box'>
            没吃，不知道吃什么，纠结啊！！！！
          </div>
        </div>
        <div class='msg-row-me'>
          <div class='msg-icon'>
            <img src='../assets/images/yehua.jpg'>
          </div>
          <div class='msg-box'>
            你吃了没，有想吃的没？
          </div>
        </div>
        <div class='msg-row'>
          <div class='msg-icon'>
            <img src='../assets/images/baiqian.jpg'>
          </div>
          <div class='msg-box'>
            没吃，去星耀城看看去吧
          </div>
        </div>

      </div>
    </div>
    <!-- <my-footer ref='myFooter'></my-footer> -->
    <div class='dialog-footer' ref='dialogFooter'>
      <div class='icon-voice'>
        <i class='iconfont icon-shengyin'></i>
      </div>
      <div class='msg-input'>
        <input type='text' placeholder='请输入聊天信息' />
      </div>
      <div class='icon-bq'>
        <i class='iconfont icon-biaoqing'></i>
      </div>
      <div class='icon-add'>
        <i class='iconfont icon-tianjia'></i>
      </div>
    </div>

  </div>
</template>
<script>
import MyHeader from './Header';
import MyFooter from './Footer';
export default {
  name: 'Dialog',
  components: {
    MyHeader,
    MyFooter
  },
  data () {
    return {
      headerTitle: '东华',
      cls: {
        hasRightIconCls: true,
        iconCls: {
          'icon-tianjiahaoyou1': false,
          'icon-jiahao': false,
          'icon-huifukuangtianjiachengyuan': true
        },
        hasHeaderLeft: true
      }
    };
  },
  mounted () {
    //  const headerViewHeight = this.$refs.header.offsetHeight;
    //  Header作为子组件，this.$refs.myHeader访问子组件，.$refs.header访问子组件中header元素
    const headerViewHeight = this.$refs.myHeader.$refs.header.offsetHeight;
    //  const footerViewHeight = this.$refs.footer.offsetHeight;
    //  理由同上
    const footerViewHeight = this.$refs.dialogFooter.offsetHeight;
    //  const footerViewHeight = this.$refs.myFooter.$refs.footer.offsetHeight;
    const totalHeight = document.documentElement.clientHeight;
    this.$refs.content.style.height =
      totalHeight - headerViewHeight - footerViewHeight + 'px';
    //  console.log(headerViewHeight+','+totalHeight+','+footerViewHeight);
  }
};
</script>
<style scoped>
/* -------- 页头 --------- */
/* .header .header-left{
    position: absolute;
    top:0;
    left:10px;
    color: white;
    width: 55px;
    height: 45px;
    line-height: 45px;
} */

/*--------- 页中 ---------*/
.content {
  /* background-color:#f9f9f9; */
  background-color: rgb(146, 141, 141);
  padding: 8px;
  overflow: scroll;
}
.content .msg-list .msg-row {
  /* height: 38px; */
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-top: 30px;
}
.content .msg-list .msg-row-me {
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: nowrap;
  margin-top: 30px;
}

.content .msg-list .msg-row img,
.content .msg-list .msg-row-me img {
  width: 35px;
  height: 35px;
}

.content .msg-list .msg-row .msg-box {
  /* width: 246px; */
  /* height: 82px; */
  padding: 8px 8px;
  margin-left: 10px;
  max-width: 80%;

  background-color: #fff;
  font-size: 14px;
  border-radius: 4px;
  position: relative;
}
.content .msg-list .msg-row .msg-box::before {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-right-color: #fff;
  top: 11px;
  left: -11px;
}
.content .msg-list .msg-row-me .msg-box {
  /* width: 246px; */
  /* height: 82px; */
  padding: 8px 8px;
  margin-right: 10px;
  max-width: 80%;

  background-color: #fff;
  font-size: 14px;
  border-radius: 4px;
  position: relative;
}
.content .msg-list .msg-row-me .msg-box::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-left-color: #fff;
  top: 11px;
  right: -11px;
}

/*------- 页尾 --------*/
.dialog-footer {
  height: 50px;
  padding: 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  color: #7d7e83;
}
.dialog-footer i {
  font-size: 30px;
  width: 40px;
  height: 40px;
  line-height: 40px;
}
.dialog-footer .msg-input input {
  border: 1px solid #7d7e83;
  transform: scale(0.5);
  transform-origin: 0 0;
  margin: 0;
  width: 200%;
  height: 200%;
  padding: 0 10px;
  font-size: 30px;
}
.dialog-footer .icon-voice,
.dialog-footer .icon-bq,
.dialog-footer .icon-add {
  width: 40px;
  padding: 0 4px;
  flex-grow: 1;
}
.dialog-footer .msg-input {
  width: 280px;
  height: 40px;
  padding: 4px 0;
  flex-grow: 8;
}
</style>
