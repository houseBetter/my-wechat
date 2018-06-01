<template>
  <div class='footer' ref='footer'>
    <template v-if='footerNavSet.isShow'>
      <div class='nav'>
        <router-link tag='div' class='nav-wx' to='/' exact>
          <div class='icon'>
            <i class='iconfont icon-xinxi1'></i>
          </div>
          <div class='title'>
            <span>微信</span>
          </div>
          <div class='wx-state'>
            <span>2</span>
          </div>

        </router-link>
        <router-link tag='div' class='nav-contacts' to='/contacts'>
          <div class='icon'>
            <i class='iconfont icon-tongxunlu'></i>
          </div>
          <div class='title'>
            <span>通讯录</span>
          </div>
          <div class='contacts-state'></div>
        </router-link>
        <router-link tag='div' class='nav-find' to='/find'>
          <div class='icon'>
            <i class='iconfont icon-faxian'></i>
          </div>
          <div class='title'>
            <span>发现</span>
          </div>
          <div class='find-state'></div>
        </router-link>
        <router-link tag='div' class='nav-me' to='/me'>
          <div class='icon'>
            <i class='iconfont icon-wo'></i>
          </div>
          <div class='title'>
            <span>我</span>
          </div>
          <div class='me-state'></div>
        </router-link>
      </div>
    </template>
    <template v-else>
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
    </template>

  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  name: 'Footer',
  computed: mapState(['footerNavSet'])
};
</script>
