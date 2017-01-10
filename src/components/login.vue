<template>
    <div id="login">
        <div class="wrapper">
            <div class="header">
                <span class="title">豆瓣</span>
            </div>
            <h1> <span @click='go'><a class="list-group-item">取消</a></span>登录豆瓣</h1>
            <div class="mobile-accounts">
                    <div class="form-element form-element-first">
                        <label>
                            <strong>帐号</strong>
                            <input type="text" name="form_email" placeholder="邮箱 / 手机号" value="" style="border-top:1px solid #ccc;" v-model='text'>
                        </label>
                    </div>
                    <div class="form-element form-pwd">
                        <label>
                            <strong>请输入密码</strong>
                            <input type="password" name="form_password" id="form_password" placeholder="密码" v-model='psd'>
                            <span class="openpwd"></span>
                        </label>
                    </div>
                    <div class="form-element submit-button">
                        <input class="btn-submit" type="submit" value="登录" @click='gotologin'>
                    </div>
                <div class="item item-3rd">
                    <div class="more-login-btn">其他登录方式 &amp; 找回密码</div>
                    <div class="open-app">使用豆瓣App</div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang='less'>
    .router-link{
        display:none;
    }
    #login{
        .header{
            display:none;
        }
        h1{
            background: #fff;
            height: 45px;
            border-bottom: 1px solid #eee;
            padding: 0 18px;
            text-align: center;
            font-size: 18px;
            font-weight: bold;
            line-height: 45px;
            a{
                color: #42bd56;
                font-size: 15px;
                font-weight: normal;
                position: absolute;
                left: 18px;
                top: 0;
            }
            a:link{
                color: #42bd56;
                text-decoration: none;
            }
        }
        .mobile-accounts{
            padding: 15px;
            .form-element{
                position: relative;
                strong{
                    font-size: 15px;
                    color: #222;
                    display: none;
                    margin-bottom: 5px;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    user-select: none;
                }
                input{
                    outline: 0;
                    border-top-left-radius: 3px;
                    border-top-right-radius: 3px;
                    border-top: 1px solid #ccc;
                }
                input[type="text"],input[type="password"]{
                    -webkit-appearance: none;
                    appearance: none;
                    display: inline-block;
                    height: 44px;
                    font-size: 15px;
                    margin: 0;
                    padding: 0 8px;
                    background: #fff;
                    border: 1px solid #ccc;
                    border-radius: 0;
                    border-top: 0;
                    width: 100%;
                    line-height: 32px;
                    -webkit-box-sizing: border-box;
                    -moz-box-sizing: border-box;
                    box-sizing: border-box;
                }
            }
            .submit-button{
                margin-top: 10px;
                text-align: center;
                .btn-submit{
                    cursor: pointer;
                    font-size: 17px;
                    text-align: center;
                    width: 100%;
                    padding: 10px 26px;
                    color: #ffffff;
                    background: #17AA52;
                    border: 1px solid #17AA52;
                    -webkit-border-radius: 3px;
                    -moz-border-radius: 3px;
                    border-radius: 3px;
                }
                button, input[type="button"], input[type="reset"], input[type="submit"]{
                    cursor: pointer;
                    -webkit-appearance: button;
                    -webkit-tap-highlight-color: #ccc;
                }
            }
            .more-login-btn{
                margin-top: 15px;
                color: #aaa;
                text-align: center;
            }
            .open-app{
                display: block;
                margin-top: 40px;
                text-align: center;
                font-size: 15px;
                line-height: 1;
                color: #42bd56;
            }
        }
    }
</style>
<script>
import PoP  from 'module/dialog'
var popwait = new PoP('wait');
export default{
    data(){
        return{
            msg:'hello vue',
            text:'',
            psd:'',
            from:'1312312312'
        }
    },
    computed :{
    },
    methods:{
        gotologin(){
            var _this = this;
            var phone=/^1[34578]\d{9}$/,
                email=/(^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+$)|(^$)/;
            if(_this.text == '' || _this.psd == ''){
                return;
            }
            if((phone.test(_this.text) || email.test(_this.text))){
                if(_this.psd.length < 6){
                    popwait.run({
                        contStr: '密码错误'
                    });
                }
                store.commit('increment');
                routers.push(_this.from)
            }else{
                popwait.run({
                    contStr: '帐号错误'
                });
            }
        },
        go(){
            routers.go(-1);
        }
    },
    beforeRouteEnter (to, from, next) {
        // 在渲染该组件的对应路由被 confirm 前调用
        // 不！能！获取组件实例 `this`
        // 因为当钩子执行前，组件实例还没被创建
        next(vm=>{
            vm.from = from.fullPath;
        })
    },
    mounted(){
        var _this = this;
        _this.text = '';
        _this.psd = '';
    }
}
</script>
