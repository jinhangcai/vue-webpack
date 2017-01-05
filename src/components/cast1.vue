<template>
    <div id="cast1">
        <div class="content-bar">
            <div class="content" placeholder="分享生活点滴..." contenteditable="true" @keyup='submit' v-html='text'>
            </div>
            <div class="feed-images single" v-if='AddImg'>
                <div class="item portrait">
                    <img :src='AddImg'  class='landscape'>
                    <i class="del" @click='del'></i>
                </div>
            </div>
        </div>
        <div class="info">
            <div class="btn btn-camera"  @click='uploadImg'>
                <input class="fileImage" type="file" accept="image/*" name="uploadImg" multiple="camera" @change="onFileChange" v-if='showinput'>
            </div>
            <div class="btn btn-at"></div>
            <div class="btn btn-hash"></div>
            <div class="num" v-if='copyNumber-copyNumber1 <=0'>0</div>
            <div class="num" v-else>{{copyNumber-copyNumber1}}</div>
        </div>
    </div>
</template>
<style lang='less'>
    #cast1{
        margin:0 auto;
        width:5.8rem;
        .content-bar{
            width:100%;
        }
        .content{
            width:100%;
            height:1.5rem;
            padding-top:.5rem;
            font-size: 17px;
            line-height: 1.5;
            color: #494949;
        }
        .feed-images{
            margin-top: 15px;
            .item{
                display: inline-block;
                max-height: 300px;
                overflow: hidden;
                position: relative;
                cursor: pointer;
                img{
                    max-width: 100%;
                    display:block;
                }
                .del{
                    &:before{
                        content: "×";
                        font-family: sans-serif;
                        font-size: 16px;
                        color: #fff;
                        font-weight: 200;
                        display: block;
                    }
                    font-style: normal;
                    display: block;
                    position: absolute;
                    top: 4px;
                    right: 4px;
                    width: 24px;
                    height: 24px;
                    text-align: center;
                    background-color: rgba(0,0,0,0.7);
                    border-radius: 50%;
                    display: -webkit-box;
                    display: -moz-box;
                    display: box;
                    display: -webkit-flex;
                    display: -moz-flex;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-align: center;
                    -moz-box-align: center;
                    box-align: center;
                    -webkit-align-items: center;
                    -moz-align-items: center;
                    -ms-align-items: center;
                    -o-align-items: center;
                    align-items: center;
                    -ms-flex-align: center;
                    -webkit-box-pack: center;
                    -moz-box-pack: center;
                    box-pack: center;
                    -webkit-justify-content: center;
                    -moz-justify-content: center;
                    -ms-justify-content: center;
                    -o-justify-content: center;
                    justify-content: center;
                    -ms-flex-pack: center;
                }
            }
        }
        [contenteditable=true]:empty::before{
            content: attr(placeholder);
            display: block;
            color: #ccc;
        }
        .info{
            position: relative;
            z-index: 10001;
            overflow: hidden;
            height: 44px;
            margin: 0 -18px;
            padding: 10px 18px;
            box-sizing: border-box;
            &:before{
                left: 0;
                top: 0;
                width: 100%;
                height: 1px;
                background: #E8E8E8;
                -webkit-transform: scaleY(0.5);
                content: '';
                position: absolute;
                -webkit-transform-origin: 0 bottom;
            }
            .btn{
                background: center/cover no-repeat;
                width: 24px;
                height: 24px;
                float: left;
                cursor: pointer;
                margin-right: 25px;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
            .btn-camera{
                background: url('../images/coin/ic_status_camera_green.svg');
                overflow:hidden;
                input{
                    width: 100%;
                    height: 100%;
                    opacity: 0;
                    filter: alpha(opacity=0);
                    cursor: pointer;
                    align-items: baseline;
                    color: inherit;
                    text-align: start;
                }
            }
            .btn-at{
                background: url('../images/coin/ic_status_at_green.svg');
                overflow:hidden;
            }
            .btn-hash{
                background: url('../images/coin/ic_status_hash_green.svg');
                overflow:hidden;
            }
            .num{
                color: #aaa;
                font-size: 15px;
                float: right;
                line-height: 24px;
            }
        }
    }
</style>
<script>
//ps:积分商城图片上传插件不能使用  && 没有上传图片的服务器地址  所以就纯展示效果
//VueCoreImageUpload  如有服务器地址，则可研究下这个插件
//为input file绑定change事件，在第一次执行有效，后面的执行就没有效果了
import PoP  from 'module/dialog'
var popalert = new PoP('alert');
export default {
  name: 'cast1',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      array:[],
      text:'',
      copyNumber:140,
      copyNumber1:0,
      AddImg:'',
      ImgShow:false,
      showinput:true
    }
  },
//  components: {
//     'vue-core-image-upload': VueCoreImageUploads
//  },
  computed :{

  },
  methods:{
      submit(e){
          var _this = this;
          _this.copyNumber1 = e.target.innerHTML.length;
            if(_this.copyNumber-_this.copyNumber1 <=0){
                //截取字符串
                e.target.innerHTML=e.target.innerHTML.substring(0,140);
            }
      },
      uploadImg(){

      },
      onFileChange(e) {
          var files = e.target.files || e.dataTransfer.files;
          if (!files.length)
              return;
          this.showinput = false;
          this.createImage(files[0]);
      },
      createImage(file) {
          var _this = this;
          if (file.type.indexOf("image") == 0) {
              if (file.size >= 5242880 || file.size <= 102400) {
                  popalert.run({
                      contStr: '请上传100KB~5MB的图片'
                  });
                  this.showinput = true;
                  return;
              }
          } else {
              popalert.run({
                  contStr: '请上传图片'
              });
              this.showinput = true;
              return;
          }
          var image = new Image();
          var reader = new FileReader();
          reader.onload = (e) => {
              _this.AddImg = e.target.result;
              _this.createShow(e);
          };
          reader.readAsDataURL(file);
      },
      createShow(e){
          this.showinput = true;
      },
      del:function(e){
          var _this = this;
          _this.AddImg = '';
      }
  },
  mounted(){
    var _this = this;
    console.log(_this.text)
  }
}
</script>
