<template>
     <div id='cast'>
        <ul class="status-list  comment-list">
            <li>
                <div>
                    <div class="desc">
                        <a href="/people/95805238/">
                            <img src="https://img5.doubanio.com/icon/up95805238-16.jpg" alt="豆瓣">
                        </a>
                        <a href="/people/95805238/status/1932504669/">
                        <div class="user-info">
                            <strong>豆瓣<span>写了日记</span></strong>
                            <div class="timestamp">2016-12-26 20:01:19</div>
                        </div>
                        </a>
                    </div>
                    <a href="/people/95805238/status/1932504669/">
                        <div class="content"></div>
                    </a>
                </div>
                <div class="feed-card article-card has-cover has-subtitle">
                    <a href="https://www.douban.com/note/598885383/">
                        <div class="title">新版日记和评论编辑器上线</div>
                        <div class="detail has-cover">
                            <div class="text">日记和评论一直承载着豆友们主要的文字创作内容。这些内容汇聚在一起，不仅成为了豆友彼此寻找同好的土...</div>
                            <div class="cover" style="background-image: url(&quot;https://img5.doubanio.com/view/status/median/public/4aAkNt.jpg&quot;);"></div>
                        </div>
                    </a>
                </div>
                <div class="info"><div class="ic-btn ic-btn-like  left "><span class="text">8</span></div>
                    <div class="ic-btn ic-btn-comment  left "><span class="text">0</span></div>
                    <div class="ic-btn ic-btn-retweet  left "><span class="text">8</span></div>
                    <div class="ic-btn ic-btn-more   right"></div>
                </div>
            </li>
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
</script>
