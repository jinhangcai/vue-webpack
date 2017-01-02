<template>
     <div id='cast'>
        <ul class="status-list  comment-list">
            <template v-for='arr in array.items'>
                <li>
                    <div>
                        <div class="desc">
                            <a href="/people/95805238/">
                                <img src="https://img5.doubanio.com/icon/up95805238-16.jpg" alt="豆瓣">
                            </a>
                            <a href="/people/95805238/status/1932504669/">
                            <div class="user-info">
                                <strong>{{arr.status.author.name}}<span>{{arr.status.activity}}</span></strong>
                                <div class="timestamp">{{arr.status.create_time}}</div>
                            </div>
                            </a>
                        </div>
                        <a href="/people/95805238/status/1932504669/">
                            <div class="content"></div>
                        </a>
                    </div>
                    <div class="feed-card article-card has-cover has-subtitle">
                        <a href="https://www.douban.com/note/598885383/">
                            <div class="title">{{arr.status.card.title}}</div>
                            <div class="detail has-cover">
                                <div class="text">{{arr.status.card.subtitle}}</div>
                                <!--<template v-if='JSON.stringify(arr.status.card.image) != "{}" '>-->
                                    <!--{{arr.status.card.image}}-->
                                <!--</template>-->
                                <!--<template v-if='arr.status.card.image.large '>-->
                                    <!--&lt;!&ndash;{{arr.status.card.image}}&ndash;&gt;-->
                                <!--</template>-->
                                <!--<template v-else>-->
                                    <!--&lt;!&ndash;111&ndash;&gt;-->
                                <!--</template>-->
                                <!--<div class="cover"  :style="{backgroundImage: 'url(' + arr.status.card.image.large.url + ')'}"></div>-->
                            </div>
                        </a>
                    </div>
                    <div class="info"><div class="ic-btn ic-btn-like  left "><span class="text">{{arr.status.like_count}}</span></div>
                        <div class="ic-btn ic-btn-comment  left "><span class="text">{{arr.status.comments_count}}</span></div>
                        <div class="ic-btn ic-btn-retweet  left "><span class="text">{{arr.status.resharers_count}}</span></div>
                        <div class="ic-btn ic-btn-more   right"></div>
                    </div>
                </li>
            </template>
        </ul>
     </div>
</template>
<style lang='less'>
    #cast{
        width:5.8rem;
        margin:0 auto;
        .status-list{
            overflow:hidden;
            li{
                position: relative;
                padding-bottom: 20px;
                margin-top: 20px;
                margin-bottom: 20px;
                padding-left: 50px;
                .desc{
                    display: -webkit-box;
                    display: -moz-box;
                    display: box;
                    display: -webkit-flex;
                    display: -moz-flex;
                    display: -ms-flexbox;
                    display: flex;
                    font-size: 0;
                    line-height: normal;
                    margin: 0 0 11px;
                    color: #494949;
                    position: relative;
                    align-items: center;
                    margin-left: -50px;
                }
                .feed-card{
                    padding: 15px;
                    margin: 10px 0 20px;
                    border-radius: 2px;
                    border: solid 1px #d8d8d8;
                }
                a{
                    color: #42bd56;
                    img{
                        width: 40px;
                        height: 40px;
                        margin-right: 10px;
                        border-radius: 50%;
                        vertical-align: text-top;
                    }
                    .user-info{
                        flex: auto;
                        -webkit-flex: auto;
                        webkit-flex: auto;
                        strong{
                            display: inline-block;
                            vertical-align: text-top;
                            margin-right: 6px;
                            font-size: 17px;
                            line-height: 1;
                            color: #494949;
                            span{
                                color: #aaa;
                            }
                        }
                        .timestamp{
                            font-size: 14px;
                            margin-top: 6px;
                            line-height: 1;
                            color: #aaa;
                        }
                    }
                    .content{
                        padding-left: 0;
                        margin-top: 10px;
                        line-height: 22px;
                        color: #494949;
                        font-size: 17px;
                    }
                    .title{
                        font-size: 17px;
                        font-weight: 500;
                        line-height: 1.4;
                        color: #494949;
                        margin-bottom: 5px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                    }
                    .detail{
                        height: 48px;
                        padding-right: 90px;
                        position: relative;
                        color: #42bd56;
                    }
                    .text{
                        font-size: 12px;
                        line-height: 16px;
                        color: #aaa;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 3;
                        -webkit-box-orient: vertical;
                    }
                    .cover{
                        width: 75px;
                        height: 48px;
                        background-size: cover;
                        background-position: center;
                        background-repeat: no-repeat;
                        position: absolute;
                        top: 0;
                        right: 0;
                    }
                }
                .info{
                    padding-left: 0;
                    margin-top: 13px;
                    margin-right: -20px;
                    overflow: auto;
                    .ic-btn{
                        display: inline-block;
                        margin-right: 20px;
                        font-size: 14px;
                        cursor: pointer;
                        &:before{
                            content: '';
                            width: 20px;
                            height: 20px;
                            background-position: center center;
                            background-repeat: no-repeat;
                            display: inline-block;
                            margin-bottom: -2px;
                        }
                        .text{
                            color: #ccc;
                            margin-left: 3px;
                            position: relative;
                            left: 0;
                            top: -3px;
                        }
                    }
                    .ic-btn-like{
                        &:before{
                            background-image:url(../images/coin/ic_like_gray.svg)
                        }
                    }
                    .ic-btn-comment{
                        &:before{
                            background-image:url(../images/coin/ic_comment.svg)
                        }
                    }
                    .ic-btn-retweet{
                        &:before{
                            background-image:url(../images/coin/ic_retweet_gray.svg)
                        }
                    }
                    .ic-btn.left{
                        float:left;
                    }
                }
            }
        }
    }
</style>
<script>
export default {
  name: 'cast',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      array:[]
    }
  },
  computed :{
  },
  mounted(){
  //mounted == ready
    var _this = this;
    $.ajax({
        url:'https://m.douban.com/rexxar/api/v2/status/anonymous_timeline?max_id=&ck=&for_mobile=1',
        dataType:'jsonp',
        processData: false,
        type:'get',
        success:function(data){
            console.log(data)
            _this.array = data;
            console.log(_this.array)
        }
    })
  }
}
</script>
