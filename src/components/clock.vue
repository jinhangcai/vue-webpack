<template>
    <section id="clock" class="page"  >
        <main class="viewport">
            <section id="movie_showing">
                <header>
                    <h2>影院热映</h2>
                    <a href="javascript:;">更多</a>
                </header>
                <div class="section-content">
                    <ul class="row items">
                        <li class="item item__movie">
                            <a href="javascript:;">
                                <div class="item-poster" style="background-image: url(https://qnmob.doubanio.com/view/movie_poster_cover/lpst/public/p2404720316.jpg?imageView2/0/q/80/w/9999/h/300/format/jpg)"></div>
                                <span class="item-title">铁道飞虎</span>
                                <div class="item-rating">
                                    <div class="rank">
                                        <span class="rating-stars" data-rating="2.7"><span class="rating-star rating-star-small-full"></span><span class="rating-star rating-star-small-full"></span><span class="rating-star rating-star-small-full"></span><span class="rating-star rating-star-small-gray"></span><span class="rating-star rating-star-small-gray"></span></span> <span>5.5</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
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
                h2{
                    display: inline-block;
                    min-width: 4em;
                    font-size: 18px;
                    color: #111;
                    padding-left: 0;
                    padding-bottom: 0;
                    margin: 0 0 15px;
                }
                a{
                    float: right;
                    font-size: .3rem;
                    line-height: 1.5rem;
                    color: #42bd56;
                }
            }
            .section-content{
                margin-bottom: -1.12rem;
            }
            .items{
                font-size: 0;
                white-space: nowrap;
                overflow-x: auto;
                -webkit-overflow-scrolling: touch;
            }
            .row{
                border-bottom: 1px solid #F2F2F2;
                padding: 15px 0 43px 0;
                .item{
                    display: inline-block;
                    vertical-align: top;
                    width: 100px;
                    text-align: center;
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
                            margin-top: .6rem;
                            line-height: .94rem;
                            display: block;
                        }
                        .item-rating{
                            color: #aaa;
                            line-height: .94rem;
                            margin-top: .3rem;
                            font-size: .72rem;
                            .rank{
                                .rating-stars{
                                    display: inline-block;
                                    vertical-align: middle;
                                    .rating-star{
                                        display: inline-block;
                                        margin-right: 1px;
                                        background-color: transparent;
                                        background-repeat: no-repeat;
                                    }
                                }

                            }
                        }
                    }
                }
                .item:first-child{
                    margin-left: .3rem;
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
