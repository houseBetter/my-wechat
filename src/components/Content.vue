<template>
    <div>
        <my-msg-box
        v-for='msg in msgList'
        v-bind:key="msg.type==='private'?msg.account.uid:msg.gid"
        :data='msg'>
        </my-msg-box>
    </div>
</template>
<script>
import MyMsgBox from './MsgBox'
import { mapState } from 'vuex'
export default {
  name: 'Content',
  components: { MyMsgBox },
  computed: mapState(['msgList'])
};
</script>
<style scoped>
</style>
