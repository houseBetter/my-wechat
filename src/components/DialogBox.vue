<template>
    <div class='dialog' ref='dialog'>
        <!-- <div class='content' ref='content'> -->
            <div class='msg-list'>
                <!-- <template v-for='(record,index) in this.$route.params.data.record'> -->
                    <template v-for='(record,index) in getMsgByTypeAndId.record'>
                    <div :class="{'msg-row':!record.isMe,'msg-row-me':record.isMe}"
                        :key='index'>
                        <div class='msg-icon'  >
                            <img :src='record.icon'>
                        </div>
                        <div class='msg-box'>
                            {{record.say}}
                        </div>
                    </div>
                </template>
            </div>
    </div>
</template>
<script>
// import MyFooter from './Footer'
import { mapState } from 'vuex'
export default {
  name: 'Dialog',
  created () {
    let { ...headerSet } = {
      headerTitle: this.headerTitle,
      cls: {
        hasRightIconCls: true,
        iconCls: {
          'icon-tianjiahaoyou1': false,
          'icon-jiahao': false,
          'icon-huifukuangtianjiachengyuan': true
        }
      },
      hasHeaderLeft: true,
      headerLeftTitle: '微信'
    };
    this.$store.commit({
      type: 'modifyHeaderSet',
      headerSet: headerSet
    });
    this.$store.commit({
      type: 'modifyFooterNavSet',
      isShow: false
    });
    this.$store.commit({
      type: 'modifySearchSet',
      isShow: false
    });
  },
  computed: {
    ...mapState(['headerSet']),
    getMsgByTypeAndId () {
      return this.$store.getters.getMsgByTypeAndId(this.type, this.id)
    },
    headerTitle: function () {
      let title = ''
      if (this.type === 'private') {
        title = this.getMsgByTypeAndId.account.uname;
      }
      if (this.type === 'public') {
        title = this.getMsgByTypeAndId.gname;
      }
      return title
    }
  },
  data () {
    return {
      type: this.$route.params.data.type,
      id: this.$route.params.data.id
    }
  }
};
</script>
<style scoped>
/*--------- 页中 ---------*/
.dialog {
  background-color: rgb(146, 141, 141);
  padding: 8px;
  height: 100%;
  overflow: scroll;
}
.dialog .msg-list .msg-row {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-top: 30px;
}
.dialog .msg-list .msg-row-me {
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: nowrap;
  margin-top: 30px;
}

.dialog .msg-list .msg-row img,
.dialog .msg-list .msg-row-me img {
  width: 35px;
  height: 35px;
}

.dialog .msg-list .msg-row .msg-box {
  padding: 8px 8px;
  margin-left: 10px;
  max-width: 80%;

  background-color: #fff;
  font-size: 14px;
  border-radius: 4px;
  position: relative;
}
.dialog .msg-list .msg-row .msg-box::before {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-right-color: #fff;
  top: 11px;
  left: -11px;
}
.dialog .msg-list .msg-row-me .msg-box {
  padding: 8px 8px;
  margin-right: 10px;
  max-width: 80%;

  background-color: #fff;
  font-size: 14px;
  border-radius: 4px;
  position: relative;
}
.dialog .msg-list .msg-row-me .msg-box::after {
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
/* .dialog-footer {
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
} */
</style>
