<template>
    <section id="coin" class="page"  >
        <main class="viewport">
            <div class="status-editor-bar">
                <div class="avatar">
                    <img src="https://img3.doubanio.com/icon/user_large.jpg" alt="包菜头">
                </div>
                <div class="holder">分享生活点滴...</div>
                <span @click='radioIn'>
                    <a  class="list-group-item icon icon-camera" :style="Color">我的广播</a>
                </span>
                <span @click='radioall'>
                <router-link to="/coin/cast" class="list-group-item icon icon-camera" :style="Color1">所有广播</router-link>
                </span>
            </div>
            <router-view></router-view>
            <div class="pull-refresh-loading"></div>
            <div class="download-app">
                <div class="info">
                    <div class="douban-app"></div>
                    <div class="info-content"><strong>豆瓣</strong><div>我们的精神角落</div></div>
                </div>
            </div>
        </main>
    </section>
</template>
<style lang="less">
    #coin{
        .status-editor-bar{
            position: relative;
            margin: 0 auto;
            width:5.8rem;
            padding: 10px 0;
            cursor: pointer;
            overflow: hidden;
            &:before{
                left: 0;
                bottom: 0;
                width: 100%;
                height: 1px;
                background: #E8E8E8;
                -webkit-transform: scaleY(0.5);
                content: '';
                position: absolute;
                -webkit-transform-origin: 0 bottom;
            }
            .avatar{
                width: 40px;
                height: 40px;
                float: left;
                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
            }
            .holder{
                color: #aaa;
                padding-left: 10px;
                font-size: 15px;
                line-height: 40px;
                float: left;
            }
            .icon{
                padding: 8px;
                position: relative;
                float: right;
                box-sizing: border-box;
                margin-right: 10px;
                line-height: .4rem;
                color:#aaa;
                &:hover{
                    color:red;
                }
            }
            .icon-camera{
                margin-right: 0;
            }
        }
        .download-app{
            padding: 0 0 20px 0;
            margin-top: 50px;
            margin-bottom: 30px;
            text-align: center;
            font-size: 15px;
            .info{
                margin: 0 auto 15px;
                overflow: hidden;
                text-align: left;
                font-size: 14px;
                display: inline-block;
                color: #111;
                .douban-app{
                    background: url('../images/clock/douban-app-logo.png');
                    float: left;
                    margin-right: 12px;
                    width:0.6rem;
                    height:0.6rem;
                    background-size:100%;
                }
                .info-content{
                    overflow:hidden;
                    strong{
                        font-size: 24px;
                        font-weight: normal;
                        line-height: 28px;
                    }
                    div{
                        white-space: pre;
                        line-height: 20px;
                    }
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
                Color:{
                    color:'#aaa'
                },
                Color1:{
                    color:'red'
                },
            }
        },
        computed :{

        },
        methods:{
            radioall(e){
                //所有广播
                var _this = this;

                _this.Color.color = '#aaa';
                _this.Color1.color = 'red';
            },
            radioIn(e){
                //我的广播
                var _this = this;
                if(!store.state.login){
                    routers.push('login');
                    return;
                }else{
                    routers.push('/coin/cast1');
                }
                _this.Color.color = 'red';
                _this.Color1.color = '#aaa';
            }
        },
        mounted(){
            var _this = this;
        }
    }
</script>

