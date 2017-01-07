<template>
  <section id="App"   >
    <main >
      <div>
        <!--原型链写的滑动-->
        <!--<div class="slider"></div>-->
        <!--vue组件写的滑动-->
        <slider :pages="someList" :sliderinit="sliderinit" @slide='slide'>
          <!-- slot  -->
        </slider>
        <!--<button @click="slidePre">上一页</button>-->
        <!--<button @click="slideNext">下一页</button>-->
        <!--<button @click="appendslider">添加一页</button>-->
        <!--<button @click="turnTo(2)">跳转到第三页</button>-->
        <div class="feed-section" style="width: 100%;height: 8.4rem;overflow: scroll;">
          <template v-if='!pageLoading'>
            <!--<section id="pageLoading" ></section>-->
            <div class="pageloading"></div>
          </template>
          <template v-else v-for ='arr in array.recommend_feeds'>
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
    <!--<section id="pageLoading"  v-show="pageLoading"></section>-->
  </section>
</template>

<script>
//原型链写的滑动js
//import slider from 'script/slider'

//vue组件写的滑动
import slider from './slider.vue'
export default {
  name: 'App',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      pageLoading:false,
      array:[],
      //起步加载的背景图片和文案  ps:要先加载一条出来，不然会出错
      someList:[
        {
          title: 'slide1',
          style:{
            'background':'#1bbc9b'
          }
        },
        {
          title: 'slide2',
          style:{
            'background':'#1bbc9b'
          }
        },
        {
          title: 'slide3',
          style:{
            'background':'#1bbc9b'
          }
        }
      ],
      //滑动配置
      sliderinit: {
        currentPage: 1,   //当前页
        start: {},
        end: {},
        tracking: false,  //跟踪
        thresholdTime: 500,//滑动判定距离
        thresholdDistance: 100,//滑动判定时间
        loop:true,//无限循环
        // autoplay:1000,//自动播放:时间[ms]
      }
    }
  },
  components:{
    slider
  },
  created () {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    var _this = this;
    _this.fetchData()
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      var _this = this;
      $.ajax({
        url:'https://m.douban.com/rexxar/api/v2/recommend_feed?alt=json&next_date=&loc_id=108288&gender=&birthday=&udid=9fcefbf2acf1dfc991054ac40ca5114be7cd092f&for_mobile=true',
        dataType:'jsonp',
        processData: false,
        type:'get',
        success:function(data){
          _this.array  = data;
          _this.pageLoading = true;
        }
      });
    },
//点击按钮触发滑动事件  用vue组件写的
//    turnTo (num) {
//      // 传递事件 vue 2.0 传递事件修改了，好的写法应该直接写在空vue类中
//      this.$children[0].$emit('slideTo', num);
//      console.log(this);
//    },
//    slideNext () {
//      this.$children[0].$emit('slideNext');
//    },
//    slidePre () {
//      this.$children[0].$emit('slidePre');
//    },
//    appendslider(){
//      this.someList.push({
//        title: 'slidernew',
//        style:{
//          background:'#333',
//          color:'#fff'
//        }
//      });
//    },
    // 监听事件也发生了变化,需要指向一个子组件实例
    slide(pagenum){
      console.log(pagenum);
    }
  },
  mounted(){
    var _this = this;
    var slideImgList = eval($('#slideImgList').val());
//    _this.someList = [];
//    slideImgList.forEach(function(e){
//      var obj = {};
//      obj.title ='';
//      obj.style={};
//      obj.style.background='url('+e.fullShowUrl+')';
//      _this.someList.push(obj)
//    });


//用原型链写的滑动事件
//    new slider({
//      sliderBox :$('.slider')[0], //容器
//      sliderDate:slideImgList,    //内容
//      sliderTime:5000,          //自动切换时间
//      lazyload:true               //是否懒加载
//    });

  }
}
</script>

<style lang="less">
  #App{
    width:100%;
    height:100%;
    overflow:hidden;
    .pageloading{
      width:0.85rem;
      height:0.81rem;
      background: url('../images/loading.gif') no-repeat;
      background-size:100%;
      margin:2rem auto 0;
    }
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
