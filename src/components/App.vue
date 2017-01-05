<template>
  <section id="App" class="page"   >
    <main class="viewport">
      <div>
        <div class="slider">
        </div>
        <div class="feed-section" style="width: 100%;height: 8.4rem;overflow: scroll;">
          <template v-for ='arr in array.recommend_feeds'>
              <a href="javascript:;" class="feed-item">
                <div class="author">
                  <div class="avatar" :style="{backgroundImage: 'url(' + arr.author.avatar + ')'}">
                    <!--<img :src='arr.author.avatar'>-->
                    <div style="padding-top: 100%;"></div>
                  </div>
                  <span class="name">{{arr.author.name}}</span>
                </div>
                <span class="feed-label">{{arr.column.name}}</span>
                <div class="feed-content">
                  <div class="cover" :style="{backgroundImage: 'url(' + arr.cover_url + ')'}">
                    <div style="padding-top: 100%;"></div>
                  </div>
                  <h3>{{arr.title}}</h3>
                  <p>{{arr.desc}}</p>
                </div>
                <div class="feed-info"></div>
              </a>
          </template>
        </div>
      </div>
    </main>
    <section id="pageLoading"  v-show="pageLoading"></section>
  </section>
</template>

<script>
import slider from 'script/slider'
export default {
  name: 'App',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      pageLoading:false,
      array:[]
    }
  },
  computed :{
    loader(){
      var _this = this;
      $.ajax({
        url:'https://m.douban.com/rexxar/api/v2/recommend_feed?alt=json&next_date=&loc_id=108288&gender=&birthday=&udid=9fcefbf2acf1dfc991054ac40ca5114be7cd092f&for_mobile=true',
        dataType:'jsonp',
        processData: false,
        type:'get',
        success:function(data){
          _this.array  = data;
          _this.pageLoading = false;
        }
      })
    }
  },
  mounted(){
    var _this = this;
   _this.loader;
    var slideImgList = eval($('#slideImgList').val());
    new slider({
      sliderBox :$('.slider')[0], //容器
      sliderDate:slideImgList,    //内容
      sliderTime:5000,          //自动切换时间
      lazyload:true               //是否懒加载
    });
  }
}
</script>

<style lang="less">
  #App{
    .feed-section{
      .feed-item{
        display: block;
        padding: 15px 18px 18px;
        position: relative;
        color: #494949;
        .author{
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
          -webkit-align-items: center;
          -ms-flex-align: center;
          align-items: center;
          .avatar{
            width: 18px;
            height: 18px;
            vertical-align: top;
            border-radius: 100%;
            margin-right: 6px;
            position: relative;
          }
          .name{
            font-size:12px;
          }
        }
        .feed-label{
          position: absolute;
          top: 12px;
          right: 18px;
          border-radius: 3px;
          padding: 3px 10px;
          color: #aaa;
          font-size:12px;
          &:before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            border: 1px solid #ccc;
            border-radius: 3px;
            box-sizing: border-box;
            width: 200%;
            height: 200%;
            -webkit-transform: scale(0.5);
            transform: scale(0.5);
            -webkit-transform-origin: left top;
            transform-origin: left top;
          }
        }
        .feed-content{
          overflow: hidden;
          .cover{
            width: 23.6%;
            margin-left: 25px;
            margin-top:10px;
            float: right;
            position: relative;
            background-size:100%
          }
          h3{
            text-align: justify;
            font-size: 18px;
            padding-right: 36px;
            color: #494949;
            line-height: 22px;
            word-wrap: break-word;
            margin-top: 10px;
          }
          p{
            overflow: hidden;
            text-align: justify;
            color: #aaa;
            font-size: 13px;
            max-width: calc(100% - 36px);
            display: -webkit-box;
            overflow: hidden;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            margin-top: 10px;
            line-height: 22px;
          }
        }
      }
    }
  }
</style>
