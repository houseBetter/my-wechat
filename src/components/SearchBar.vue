<template>

    <div class='search-bar'>
        <div class='bar-icon-input'>
            <i class='iconfont icon-suosou'></i>
            <input type='text' placeholder='搜索' class='search_input' />
        </div>
        <!-- <div class='search-detail'>
            <h3 class='weui-media-box__desc'>搜索指定内容</h3>
            <div class='tag'>
                <span>朋友圈</span>
                <span>文章</span>
                <span>公众号</span>
                <span>小说</span>
                <span>音乐</span>
                <span>表情</span>
            </div>
            <div class='weui-cells'>
                <a class='weui-cell weui-cell_access' href='javascript:;'>
                    <div class='weui-cell__hd'><img src='../assets/images/book.png' alt='' style='width:20px;margin-right:5px;display:block'></div>
                    <div class='weui-cell__bd'>
                        <p>朋友圈热文</p>
                    </div>
                    <div class='weui-cell__ft'></div>
                </a>
            </div>
        </div> -->
    </div>
</template>
<script>
export default {}
</script>
<style scoped>
.search-bar-top{
    position: relative;
    padding: 8px 10px;
    display: flex;
    box-sizing: border-box;
    background-color: #efeff4;
}
.search-detail{
    background: #eee;
    position: absolute;
    height: 800px;
    z-index: 3;
    overflow: hidden;
    padding-top: 30px;
    width: 100%;
    opacity: 0.99;
}
.search-open{
    z-index: 10;
    height: 100%;
    width: 100%;
    transition: 0.3s;
    position: relative;
    top:0;
    left:0;
    right:0;
    padding:0;
}
</style>
