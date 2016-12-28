<template>
    <div id='tab'>
        {{msg}}
        <a class="aas">我是a标签</a>
    </div>
</template>
<style lang="less">
    #tab{
        color: red;
        .aas{
            color:blue;
        }
    }
</style>
<script>
    export default{
        data(){
            return{
                msg:'hello vue',
                pageLoading:true
            }
        },
        computed :{

        },
        mounted(){
            var _this = this;
            _this.pageLoading = false;
        }
    }
</script>

