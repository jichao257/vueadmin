<template>
    <container id="app">
        <grid vertical="middle" v-if="login == 'login'">
            <grid-item size="5/6"><img src="../assets/images/logo.png" alt="logo"></grid-item>
            <grid-item size="1/6"><h4 class="username">admin &nbsp;&nbsp;&nbsp;&nbsp; <el-button type="primary" icon="close" @click="logout">退出</el-button></h4></grid-item>
        </grid>
        <grid v-if="login == 'login'">
            <grid-item size="1/8">
                <el-menu theme="dark" class="left-menu">

                    <router-link to="/home">
                        <el-menu-item index="1">
                            <i class="el-icon-menu"></i>
                            首页
                        </el-menu-item>
                    </router-link>

                    <router-link to="/page">
                        <el-menu-item index="2" @click="changeModule('clients')">
                            <i class="el-icon-setting"></i>
                            学生管理
                        </el-menu-item>
                    </router-link>

                    <router-link to="/page">
                        <el-menu-item index="3" @click="changeModule('myModule')">
                            <i class="el-icon-setting"></i>
                            my-module
                        </el-menu-item>
                    </router-link>

                </el-menu>
            </grid-item>
            <grid-item size="7/8" id="page">
                <transition
                        name="custom-classes-transition"
                        enter-active-class="animated fadeInDown">
                    <router-view></router-view>
                </transition>
            </grid-item>


            <!--<grid-item size="1/8" :rwd="{ sm: '0/1', xs: '0/1' }">-->
                <!--<el-menu theme="dark" class="left-menu">-->
                    <!--<router-link to="/home"><el-menu-item index="1"><i class="el-icon-menu"></i>首页</el-menu-item></router-link>-->
                    <!--<router-link to="/page"><el-menu-item index="4" @click="changeModule('clients')"><i class="el-icon-setting"></i>学生管理</el-menu-item></router-link>-->
                <!--</el-menu>-->
            <!--</grid-item>-->
            <!--<grid-item size="0/1" :rwd="{ sm: '1/1', xs: '0/1' }">-->
                <!--<el-menu theme="dark" mode="horizontal">-->
                    <!--<router-link to="/home"><el-menu-item index="1">首页</el-menu-item></router-link>-->
                    <!--<router-link to="/page"><el-menu-item index="2">账单管理</el-menu-item></router-link>-->
                    <!--<router-link to="/page"><el-menu-item index="3">班期管理</el-menu-item></router-link>-->
                <!--</el-menu>-->
            <!--</grid-item>-->
            <!--<grid-item size="7/8" :rwd="{ sm: '1/1', xs: '1/1' }" id="page">-->
                <!--<transition-->
                    <!--name="custom-classes-transition"-->
                    <!--enter-active-class="animated fadeInDown">-->
                    <!--<router-view></router-view>-->
                <!--</transition>-->
            <!--</grid-item>-->
        </grid>
        <login v-if="login != 'login'"></login>
    </container>
</template>

<script>
    import * as types from '../store/mutation-types'
    import login from './views/Login'

    export default {

        computed: {

            // 登录状态
            login () {
                return this.$store.state.login;
            },

        },

        components: {
            'login': login
        },

        methods: {

            // 改变当前的 module
            changeModule (module) {
                this.$store.commit(types.CHANGE_MODULE, module);
            },

            // 退出
            logout (module) {
                this.$store.commit(types.LOGOUT);
                this.$router.push('/home');
            },
        },

        created () {

            // 获取缓存中的登陆状态
            this.$store.commit(types.LOGIN, '');

            // 获取缓存数据
            this.$store.dispatch(types.CACHE);

            // 重置到首页
            this.$router.replace('/home');
        }
    }
</script>

<style>
    #app {
        margin-top: 20px;
    }
    a, a:hover, a:visited {
        text-decoration: none;
    }
    .is-active {
        color: #20a0ff;
    }
    .left-menu {
        min-height: 700px;
    }
</style>