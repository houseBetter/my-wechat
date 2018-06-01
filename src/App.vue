<template>
  <div id='app'>
    <my-header :headerTitle='headerSet.headerTitle' :hasRightIconCls='headerSet.cls.hasRightIconCls' :iconCls='headerSet.cls.iconCls' :headerLeftTitle='headerSet.headerLeftTitle' :hasHeaderLeft='headerSet.hasHeaderLeft' :toPath='headerSet.toPath' ref='myHeader'></my-header>
    <div class='content' ref='content'>
      <my-search-bar v-show='searchSet.isShow'></my-search-bar>
      <router-view></router-view>
    </div>
    <my-footer ref='myFooter' v-show='isShow'></my-footer>
  </div>
</template>

<script>
import MyHeader from './components/Header';
import MyFooter from './components/Footer';
import MyContent from './components/Content';
import MySearchBar from './components/SearchBar';
import { mapState } from 'vuex';
export default {
  name: 'App',
  computed: mapState(['headerSet', 'searchSet', 'footerNavSet']),
  methods: {
    modifyHeaderSet (headerSet) {
      this.$store.commit({
        type: 'modifyHeaderSet',
        headerSet: headerSet
      });
    }
  },
  components: {
    MyHeader,
    MyContent,
    MyFooter,
    MySearchBar
  },
  watch: {
    $route (to, from) {
      //  “微信”，“通讯录”，“发现”，“我”四大模块切换时，头部状态更新
      //  路由切换，头部文字，样式修改
      let headerData = {
        headerTitle: '微信',
        cls: {
          hasRightIconCls: true,
          iconCls: {
            'icon-tianjiahaoyou1': false,
            'icon-jiahao': true
          },
          headerLeftTitle: ''
        }
      };
      let name = '';
      let isSearchShow = true;
      let isFooterShow = true;
      let hasRightIconCls = true;
      let iconCls = {
        'icon-tianjiahaoyou1': false,
        'icon-jiahao': true
      };
      switch (to.path) {
        case '/':
          name = '微信';
          hasRightIconCls = true;
          iconCls['icon-tianjiahaoyou1'] = false;
          iconCls['icon-jiahao'] = true;
          isSearchShow = true;
          isFooterShow = true;
          break;
        case '/contacts':
          name = '通讯录';
          hasRightIconCls = true;
          iconCls['icon-tianjiahaoyou1'] = true;
          iconCls['icon-jiahao'] = false;
          isSearchShow = true;
          isFooterShow = true;
          break;
        case '/find':
          name = '发现';
          hasRightIconCls = false;
          iconCls['icon-tianjiahaoyou1'] = false;
          iconCls['icon-jiahao'] = false;
          isSearchShow = false;
          isFooterShow = true;
          break;
        case '/me':
          name = '我';
          hasRightIconCls = false;
          iconCls['icon-tianjiahaoyou1'] = false;
          iconCls['icon-jiahao'] = false;
          isSearchShow = false;
          isFooterShow = true;
          break;
        default:
          break;
      }
      headerData.headerTitle = name;
      headerData.headerLeftTitle = name;
      headerData.cls.hasRightIconCls = hasRightIconCls;
      headerData.cls.iconCls = iconCls;
      headerData.toPath = to.path;
      this.modifyHeaderSet(headerData);
      this.$store.commit('modifySearchSet', { isShow: isSearchShow });
      this.$store.commit('modifyFooterNavSet', { isShow: true });
      this.isShow = isFooterShow;
    }
  },

  mounted () {
    // 内容区设置高度，调节可视区位置
    // const headerViewHeight = this.$refs.header.offsetHeight;
    // Header作为子组件，this.$refs.myHeader访问子组件，.$refs.header访问子组件中header元素
    const headerViewHeight = this.$refs.myHeader.$refs.header.offsetHeight;
    // const footerViewHeight = this.$refs.footer.offsetHeight;
    // 理由同上
    const footerViewHeight = this.$refs.myFooter.$refs.footer.offsetHeight;
    const totalHeight = document.documentElement.clientHeight;
    this.$refs.content.style.height =
      totalHeight - headerViewHeight - footerViewHeight + 'px';
  },
  data () {
    return {
      isShow: true
    };
  }
};
</script>

<style>
@import 'assets/css/reset.css';
@import 'assets/iconfont/iconfont.css';
@import 'assets/css/footer.css';
@import 'assets/css/header.css';
@import 'assets/css/search-bar.css';
</style>
