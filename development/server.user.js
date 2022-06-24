/* ==UserStyle==
@name           Moe背景/自定义图片+网页优化去广告（已优化：哔哩哔哩bilibili/谷歌搜索google/百度搜索页baidu/...~yui）
@namespace      helloworld.lol
@version        1.1.1
@description    使用Chrome以及stylus插件获得完整体验
@author         yui
==/UserStyle== */
 
@-moz-document regexp(".*") {
body:before
  {
    content: "";
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -100;
    background-image: url(https://i0.hdslb.com/bfs/album/a284e6269702e91c0e8c8302a96f961bcbaeb2b7.jpg);
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    opacity: .2 /*暗图.2*/
    }
 
}
 
@-moz-document domain("baidu.com"){
    
    #content_right,.se-ft-promlink, .c-line-clamp1{display: none!important}
    #head{background: rgba(0,0,0,0);}
    #form{background: rgba(255, 255, 255, .2);}
    #rs,#page-relative{opacity: .4}
    .bdsug{background: rgba(255, 255, 255, .8);}
    .wrapper_new .sam_newgrid~#page {background-color: rgba(0,0,0,0);}
    .wrapper_new #foot {background-color: rgba(0,0,0,0);}
    .wrapper_new #foot #help {background-color: rgba(0,0,0,0);}
    body .se-page-hd {background: rgba(0,0,0,0);}
    #page-bd, .se-head-tablink,.c-container, .se-page-controller .new-pagenav, .se-page-copyright, .se-page-ft {background: rgba(0,0,0,0);}
    .banner{opacity:0!important}
    .se-form,.s_ipt_wr{background: rgba(0,0,0,0)}
    div[tpl="recommend_list"],.c-recomm-wrap{display: none!important}
}
 
 
@-moz-document url("https://www.baidu.com/"){
    /*百度首页优化*/
    #s_wrap,#bottom_layer,.s-top-nav{display: none!important}
    #s_top_wrap{background: rgba(0,0,0,0);}
    #form{opacity:.5}
    #lg{opacity:0}}
 
@-moz-document domain("google.com"){
    .sfbg,.yg51vc,.appbar,.kp-blk,.f6F9Be,.minidiv,.s8GCU,.Lj9fsd,.jZWadf,.qcTKEe,.ECgenc,.sbib_a,.c93Gbe{background: rgba(255,255,255,0)!important}
    .I6TXqe,.RNNXgb,.sbibod{background: rgba(255,255,255,0.5)!important}
}
 
@-moz-document domain("moehui.com"){
    body{background: rgba(0,0,0,0);}
    .sec-panel{background: rgba(0,0,0,0)!important}
    header{opacity:0.6}
    .post-loop-default .item:hover{background:transparent}
    }
 
@-moz-document domain("bilibili.com"){
    body, #app,.bb-comment,.mini-type,.v-wrap{background: rgba(0,0,0,0)!important;}
    .textarea-container textarea{background-color: rgba(255,255,255,0.6)!important;}
    .main-container .ep-list-wrapper,#danmukuBox{opacity:0.6}
    /*视频内弹窗*/.bilibili-player-video-popup,.bilibili-player-video-top-follow{display: none!important}
    .timeline-header,.timeline-wrapper,.tl-head .tl-day{background:transparent}
    .timeline-header .tl-weeks:after{display: none}
    #activity_vote,#right-bottom-banner,.ad-report,#reportFirst2,#live_recommand_report{display: none!important;}
    .bili-avatar-pendent-dom,.bili-avatar-pendent,.b-danmaku-high-icon,.bilibili-player-dm-tip-wrap,.h .space-theme-trigger{display: none!important;}
    /*主页动图*/
    .h-inner{
    background-image: url(https://i0.hdslb.com/bfs/album/77d0a7be17f0d08bbd12719ad011c4ade4095e0a.jpg)!important;
    background-position: 60% 77%!important;
    /*background-repeat: repeat-x;
    background-size: contain!important;*/
    }
    #page-index .col-1,.col-full{background:transparent}
    .card[data-v-2dbadba2],.feed-title[data-v-87ed4514],#page-dynamic .col-2 .section{background-color: rgba(255,255,255,0.6)}
    #page-index .col-2{opacity:0.6}
    .n .n-inner{background-color: rgba(255,255,255,0.7)}
    /*个人动态页*/
    .fixed-bg{background-image:none!important}
    .left-panel,.right-panel{opacity:0.8}
    .center-panel{opacity:0.9}
    .page-container,.history-list .r-info{background:transparent}
    /*2021-03-30 update*/
    .forw-area,.pager,.input-wrap{background:transparent!important}
    .comment-send-lite{background:rgba(255,255,255,0.6)!important}
    .nav-search-box{opacity:0.8}
    div.bb-comment > div.reply-notice,div.proxy-box > div > a,.bilibili-player-video-toast-bottom,.bilibili-player-link.bilibili-player-show,.unlogin-popover,.login-tip{display: none!important;}
    .bpx-player-toast-wrap,.bpx-player-dialog-wrap,img[alt^="[神楽Mea"], img[alt^="神楽Mea"]{display:none}
    .input-suggest{opacity:0.8}
    .video-container,.post-content,.shop-list,.card{background:rgba(255,255,255,.4)!important}
    /*220615*/
    .bili-layout>:nth-child(3),.bili-layout>:nth-child(6),.recommended-swipe{display: none!important;}
    .recommend-container__2-line>*:nth-of-type(1n + 8){display:block!important}
    /*220619屏蔽b站系统通知*/
    .red-num--message,.message-inner-list> a:nth-child(4)>.message-inner-list__item--num{display: none!important;}
    .nav-item-message>.t>.num{display: none!important;}
    a[href="//message.bilibili.com/#/system"]>span{display: none!important;}
    .side-bar>.list>li:nth-child(4)>a>.notify-number{display: none!important;}
    }
 
@-moz-document domain("send2boox.com"){
    /*.AppHeader{background:transparent}
    .list-container, .page-container{background:transparent}
    body{overflow-y:auto;height:200%}
    .el-table__body-wrapper{height:auto!important}
    #adpp{height:auto!important}
    240%*/
    html{overflow-y:visible;height:1444px}
    .push-container .push-menu{width:150px!important}
    .list-container, .page-container{background:transparent}
    .push-file-header{opacity:0.7}
    .gb-table,.el-table{opacity:0.9}
}
 
@-moz-document domain("bing.com"){
    #b_header,#b_results>li,#b_context .b_ans, #b_context #wpc_ag,.b_footer,#b_pole .b_wpTabsWrapper{background:transparent!important}
    .b_searchboxForm, .sa_as .sa_drw{background: rgba(255,255,255,0.6)}
}
