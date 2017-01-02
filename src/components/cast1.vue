<template>
    <div id="cast1">
        <div class="content" placeholder="分享生活点滴..." contenteditable="true" v-model='text'>

        </div>
        <div class="info">
            <div class="btn btn-camera">
                <input type="file" accept="image/*" name="image" multiple="">
            </div>
            <div class="btn btn-at"></div>
            <div class="btn btn-hash"></div>
            <div class="num ">140</div>
        </div>
    </div>
</template>
<style lang='less'>
    #cast1{
        margin:0 auto;
        width:5.8rem;
        .content{
            width:100%;
            height:1.5rem;
            padding-top:.5rem;
            font-size: 17px;
            line-height: 1.5;
            color: #494949;
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
export default {
  name: 'cast1',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      text:'',
      array:[]
    }
  },
  computed :{
  },
  mounted(){
    var _this = this;
    console.log(_this.text)
  }
}
</script>
