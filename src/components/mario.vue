<template>
    <div>
        <div>this is template body</div>
        <router-link to="/posts" class="list-group-item"><div class="bgImg bgImg1"></div><div class="title">跳转</div></router-link>
        <router-view></router-view>
    </div>
</template>
<style>

</style>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        computed :{

        },
        mounted(){
            var _this = this
        }
    }
</script>
