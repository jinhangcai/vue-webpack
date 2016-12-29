<template>
    <section id="clock" class="page"  >
        <main class="viewport">
            <section id="movie_showing" style="padding-bottom:2rem;">
                <header>
                    <h2>影院热映</h2>
                    <a href="javascript:;">更多</a>
                </header>
                <div class="section-content">
                    <ul class="row items">
                        <template v-for ='arr in hit.subject_collection_items'>
                            <li class="item item__movie">
                                <a href="javascript:;">
                                    <div class="item-poster" :style="{backgroundImage: 'url(' + arr.cover.url + ')'}"></div>
                                    <div class="item-rating">
                                        <div class="item-title">{{arr.title}}</div>
                                        <div class="rank">
                                            <template v-if='arr.rating && arr.rating !=0'>
                                                <span class="rating-stars" data-rating="2.7">
                                                    <template v-for='i in parseInt(arr.rating.value/2)'>
                                                        <span class="rating-star rating-star-small-full"></span>
                                                    </template>
                                                   <template v-for='i in 5-parseInt(arr.rating.value/2)'>
                                                        <span class="rating-star rating-star-small-gray rating-star-left"></span>
                                                   </template>
                                                    <!--<span class="rating-star rating-star-small-full"></span>-->
                                                    <!--<span class="rating-star rating-star-small-full"></span>-->
                                                    <!--<span class="rating-star rating-star-small-gray"></span>-->
                                                    <span class="rating-star rating-star-small-score">{{parseInt(arr.rating.value)}}</span>
                                                </span>
                                            </template>
                                            <span v-else>暂无评分</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </template>
                    </ul>
                </div>
                <header style="margin-top:.6rem;">
                    <h2>免费在线电影</h2>
                    <a href="javascript:;">更多</a>
                </header>
                <div class="section-content">
                    <ul class="row items">
                        <template v-for ='arr in free.subject_collection_items'>
                            <li class="item item__movie">
                                <a href="javascript:;">
                                    <div class="item-poster" :style="{backgroundImage: 'url(' + arr.cover.url + ')'}"></div>
                                    <div class="item-rating">
                                        <div class="item-title">{{arr.title}}</div>
                                        <div class="rank">
                                            <template v-if='arr.rating && arr.rating !=0'>
                                                <span class="rating-stars" data-rating="2.7">
                                                    <template v-for='i in parseInt(arr.rating.value/2)'>
                                                        <span class="rating-star rating-star-small-full"></span>
                                                    </template>
                                                   <template v-for='i in 5-parseInt(arr.rating.value/2)'>
                                                        <span class="rating-star rating-star-small-gray rating-star-left"></span>
                                                   </template>
                                                    <!--<span class="rating-star rating-star-small-full"></span>-->
                                                    <!--<span class="rating-star rating-star-small-full"></span>-->
                                                    <!--<span class="rating-star rating-star-small-gray"></span>-->
                                                    <span class="rating-star rating-star-small-score">{{parseInt(arr.rating.value)}}</span>
                                                </span>
                                            </template>
                                            <span v-else>暂无评分</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </template>
                    </ul>
                </div>
                <header style="margin-top:.6rem;">
                    <h2>新片速递</h2>
                    <a href="javascript:;">更多</a>
                </header>
                <div class="section-content">
                    <ul class="row items">
                        <template v-for ='arr in film.subject_collection_items'>
                            <li class="item item__movie">
                                <a href="javascript:;">
                                    <div class="item-poster" :style="{backgroundImage: 'url(' + arr.cover.url + ')'}"></div>
                                    <div class="item-rating">
                                        <div class="item-title">{{arr.title}}</div>
                                        <div class="rank">
                                            <template v-if='arr.rating && arr.rating !=0'>
                                                <span class="rating-stars" data-rating="2.7">
                                                    <template v-for='i in parseInt(arr.rating.value/2)'>
                                                        <span class="rating-star rating-star-small-full"></span>
                                                    </template>
                                                   <template v-for='i in 5-parseInt(arr.rating.value/2)'>
                                                        <span class="rating-star rating-star-small-gray rating-star-left"></span>
                                                   </template>
                                                    <!--<span class="rating-star rating-star-small-full"></span>-->
                                                    <!--<span class="rating-star rating-star-small-full"></span>-->
                                                    <!--<span class="rating-star rating-star-small-gray"></span>-->
                                                    <span class="rating-star rating-star-small-score">{{parseInt(arr.rating.value)}}</span>
                                                </span>
                                            </template>
                                            <span v-else>暂无评分</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </template>
                    </ul>
                </div>
                <header style="margin-top:.6rem;">
                    <h2>发现好电影</h2>
                </header>
                <div class="section-content interests">
                    <ul>
                        <li style="border-color: #FFAC2D;"><a  href="javascript:;" style="color:#FFAC2D;">同时入选IMDB250和豆瓣电影250的电影</a></li>
                        <li style="border-color: #42BD56;"><a  href="javascript:;" style="color:#42BD56;">带你进入不正常的世界</a></li>
                        <li style="border-color: #4F9DED;"><a  href="javascript:;" style="color:#4F9DED;">用电【影】来祭奠逝去的岁月</a></li>
                        <li style="border-color: #FF4055;"><a  href="javascript:;" style="color:#FF4055;">女孩们的故事【电影】</a></li>
                        <li class="line"></li>
                        <li style="border-color: #3BA94D;"><a  href="javascript:;" style="color:#3BA94D;">科幻是未来的钥匙——科幻启示录【科幻题材】</a></li>
                        <li style="border-color: #2384E8;"><a  href="javascript:;" style="color:#2384E8;">美国生活面面观</a></li>
                        <li style="border-color: #FFC46C;"><a  href="javascript:;" style="color:#FFC46C;">2015终极期待</a></li>
                        <li style="border-color: #CC3344;"><a  href="javascript:;" style="color:#CC3344;">经典韩国电影——收集100部</a></li>
                    </ul>
                </div>
                <header style="margin-top:.6rem;">
                    <h2>分类浏览</h2>
                </header>
                <div class="section-content">
                    <ul class="type-list">
                        <li><a href="javascript:;">经典<span></span></a></li>
                        <li><a href="javascript:;">冷门佳片<span></span></a></li>
                        <li><a href="javascript:;">豆瓣高分<span></span></a></li>
                        <li><a href="javascript:;">动作<span></span></a></li>
                        <li><a href="javascript:;">喜剧<span></span></a></li>
                        <li><a href="javascript:;">爱情<span></span></a></li>
                        <li><a href="javascript:;">悬疑<span></span></a></li>
                        <li><a href="javascript:;">恐怖<span></span></a></li>
                        <li><a href="javascript:;">科幻<span></span></a></li>
                        <li><a href="javascript:;">治愈<span></span></a></li>
                        <li><a href="javascript:;">文艺<span></span></a></li>
                        <li><a href="javascript:;">成长<span></span></a></li>
                        <li><a href="javascript:;">动作<span></span></a></li>
                        <li><a href="javascript:;">华语<span></span></a></li>
                        <li><a href="javascript:;">欧美<span></span></a></li>
                        <li><a href="javascript:;">韩国<span></span></a></li>
                    </ul>
                </div>
                <div class="download-app">
                    <div class="info">
                        <div class="douban-app"></div>
                        <div class="info-content"><strong>豆瓣</strong><div>我们的精神角落</div></div>
                    </div>
                </div>
            </section>
        </main>
    </section>
</template>
<style lang='less'>
    #clock{
        #movie_showing{
            header{
                padding: 0 0.3rem;
                line-height:1rem;
                h2{
                    display: inline-block;
                    min-width: 4em;
                    font-size: 18px;
                    color: #111;
                    padding-left: 0;
                    padding-bottom: 0;
                }
                a{
                    float: right;
                    font-size: .3rem;
                    color: #42bd56;
                }

            }
            .section-content{
                margin-bottom: -1.12rem;
            }
            .items{
                font-size: 0;
                white-space: nowrap;
                overflow-x: scroll;
                -webkit-overflow-scrolling: touch;
                &::-webkit-scrollbar {
                    display: none;
                }
            }
            .row{
                padding: 0 0 43px 0;
                .item{
                    display: inline-block;
                    vertical-align: top;
                    width: 100px;
                    text-align: center;
                    margin-left: 0.18rem;
                    a{
                        color: #111;
                        .item-poster{
                            width: 100%;
                            overflow: hidden;
                            background-size: cover;
                            background-position: center;
                            &:before{
                                content: "";
                                float: left;
                                margin-top: 142.85714%;
                            }
                        }
                        .item-title{
                            max-width: 100%;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            word-wrap: normal;
                            line-height: .24rem;
                            display: block;
                            font-size:.24rem;
                        }
                        .item-rating{
                            color: #aaa;
                            line-height: .94rem;
                            margin-top: .1rem;
                            font-size: .72rem;
                            .rank{
                                line-height:.1rem;
                                .rating-stars{
                                    display: inline-block;
                                    vertical-align: middle;
                                    .rating-star{
                                        display: inline-block;
                                        background-color: transparent;
                                        background-repeat: no-repeat;
                                        margin-right:0.02rem;
                                    }
                                    .rating-star-small-full{
                                        background: url('../images/clock/showxing.png') no-repeat center top;
                                        width: .15rem;
                                        height:.15rem;
                                        background-size:100%
                                    }
                                    .rating-star-small-gray{
                                        background: url('../images/clock/hidexing.png');
                                        width: .15rem;
                                        height:.15rem;
                                        background-size:100%
                                    }
                                    .rating-star-small-score{
                                        margin-left:0;
                                        font-size:0.22rem;
                                    }
                                    .rating-star-left{
                                        /*margin-left:-0.1rem;*/
                                    }
                                }
                                span{
                                    text-align: center;
                                    font-size:.24rem;
                                }
                            }
                        }
                    }
                }
                .item:first-child{
                    margin-left: .3rem;
                }
            }
            .interests{
                ul{
                    white-space: nowrap;
                    overflow-x: auto;
                    padding: 15px 15px 43px 15px;
                    font-size: 0;
                    margin-left: -5px;
                    &::-webkit-scrollbar {
                        display: none;
                    }
                    li{
                        margin: 0 0 8px 8px;
                        font-size: .24rem;
                        display: inline-block;
                        border-radius: .25rem;
                        border: solid 1px;
                        vertical-align: middle;
                        a{
                            height: 50px;
                            line-height: 50px;
                            padding: 0 .55rem;
                            letter-spacing: .1em;
                            overflow: auto;
                            display: block;
                            text-align: center;
                        }
                    }
                    .line{
                        width: 100%;
                        display: block;
                        height: 1px;
                        border: 0;
                        margin: 0;
                    }
                }
            }
            .type-list{
                padding: 1.12rem 0 1.88rem;
                color: #eee;
                font-size: .9rem;
                overflow: hidden;
                margin-left:0.3rem;
                li{
                    width: 2.91rem;
                    border-top: solid 1px #eee;
                    border-right: solid 1px #eee;
                    float: left;
                    padding-right: .12rem;
                    height: .6rem;
                    a{
                        float: left;
                        display: inline-block;
                        width: 100%;
                        line-height: .6rem;
                        color: #42bd56;
                        font-size:.24rem;
                        span{
                            color: #ccc;
                            float: right;
                            font-weight: bold;
                            display: inline-block;
                            border-right: solid 1px #ccc;
                            border-bottom: solid 1px #ccc;
                            width: .1rem;
                            height: .1rem;
                            transform: rotate(-45deg);
                            margin-top: .2rem;
                        }
                    }
                }
                li:nth-child(even){
                    border-right: none;
                    padding-left:.2rem;
                    width: 2.69rem;
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
    }
</style>
<script>
    export default{
        name:'clock',
        data(){
            return{
                msg:'hello vue',
                hit:[],
                free:[],
                film:[]
            }
        },
        computed :{
            loader(){
                var _this = this;
                $.ajax({
                    url:'/src/json/clock1.json',
                    type:'get',
                    dataType: "json",   //返回的数据类型
                    success:function(data){
                       _this.hit = data
                    }
                });
                $.ajax({
                    url:'/src/json/clock2.json',
                    type:'get',
                    dataType: "json",   //返回的数据类型
                    success:function(data){
                        console.log(data)
                        _this.free = data
                    }
                });
                $.ajax({
                    url:'/src/json/clock3.json',
                    type:'get',
                    dataType: "json",   //返回的数据类型
                    success:function(data){
                        _this.film = data
                    }
                })

        }
        },
        mounted(){
            var _this = this;
            _this.loader;
        }
    }
</script>
