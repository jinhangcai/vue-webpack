<template>
    <div id='mario'>
        <ul>
            <li>
                <div>
                    <a href="javascript:;" target="_blank"><strong style="color: rgb(35, 132, 232);">电影</strong><span>影院热映</span></a>
                    <a href="javascript:;" target=""><strong style="color: rgb(230, 70, 126);">同城</strong><span>周末活动</span></a>
                    <a href="javascript:;" target=""><strong style="color: rgb(159, 120, 96);">阅读</strong><span>电子书</span></a>
                    <a href="javascript:;"><strong style="color: rgb(225, 100, 77);">东西</strong><span>心爱之物</span></a>
                </div>
            </li>
            <li>
                <div>
                    <a href="javascript:;" target="_blank"><strong style="color: rgb(122, 106, 219);">电视</strong><span>正在热播</span></a>
                    <a href="javascript:;" target="_blank"><strong style="color: rgb(42, 184, 204);">小组</strong><span>志趣相投</span></a>
                    <a href="javascript:;" target="_blank"><strong style="color: rgb(87, 116, 197);">游戏</strong><span>虚拟世界</span></a>
                    <a href="javascript:;" target=""><strong style="color: rgb(64, 207, 169);">FM</strong><span>红心歌单</span></a>
                </div>
            </li>
            <li>
                <div>
                    <a href="javascript:;" target="_blank"><strong style="color: rgb(159, 120, 96);">图书</strong><span>畅销排行</span></a>
                    <a href="javascript:;" target="_blank"><strong style="color: rgb(244, 143, 46);">音乐</strong><span>新碟榜</span></a>
                    <a href="javascript:;" target="_blank"><strong style="color: rgb(89, 108, 221);">应用</strong><span>玩手机</span></a>
                    <a href="javascript:;"><strong style="color: rgb(66, 189, 86);">市集</strong><span>购买原创</span></a>
                </div>
            </li>
        </ul>
        <div class="navBottom">
            <div class="nav-item">
                <router-link to="/login" class="list-group-item" v-if='!login'>登录</router-link>
                <a class="toExit" href="javascript:;" @click='exit'  v-else>退出豆瓣</a>
                <a class="toUser" href="javascript:;">豆瓣</a>
            </div>
            <div class="nav-item">
                <a class="toPC" href="javascript:;">使用桌面版</a>
                <a class="toApp">使用豆瓣App</a>
            </div>
        </div>
    </div>
</template>
<style lang='less'>
    .router-link{
        display:block;
    }
    #mario{
        ul{
            padding-top: 25px;
            overflow: hidden;
            display: -webkit-box;
            display: flex;
            justify-content: space-around;
            li{
                width: 33.33%;
                div{
                    float: left;
                    position: relative;
                    left: 50%;
                    top: 0;
                    a{
                        display: block;
                        text-align: center;
                        margin-bottom: 25px;
                        position: relative;
                        left: -50%;
                        top: 0;
                    }
                }
                strong{
                    display: block;
                    font-weight: 400;
                    font-size: 24px;
                    line-height: 28px;
                }
                span{
                    display: block;
                    color: #999;
                    height: 17px;
                    font-size: 12px;
                    letter-spacing: 1px;
                    text-align: center;
                }
            }
        }
        .navBottom{
            width: 100%;
            border-bottom: 1px solid #f3f3f3;
            .nav-item{
                border-top: 1px solid #f3f3f3;
                padding: 13px 0;
                a{
                    width: 49%;
                    display: inline-block;
                    box-sizing: border-box;
                    margin: 0 auto;
                    text-align: center;
                    text-decoration: none;
                    font-size: 15px;
                    color: #42bd56;
                }
                a:first-child{
                    border-right: 1px solid #e5e5e5;
                }
            }
        }
    }
</style>
<script>
export default{
    data(){
        return{
            msg:'hello vue',
            login:store.state.login
        }
    },
    computed :{


    },
    methods:{
      exit(){
          var _this = this;
          store.commit('exit');
          _this.login = store.state.login;
      }
    },
    mounted(){
        var _this = this;
    }
}
</script>
