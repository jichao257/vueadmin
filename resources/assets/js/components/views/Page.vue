<template>
    <div :key="module">
        <grid>
            <grid-item size="1/1">
                <router-link
                        v-for="(item, index) in children" 
                        :to="item.path" 
                        :key="index" 
                        class="page-child">
                    <el-button type="primary" :icon="item.icon" @click="changeOption(item.option)">{{ item.text }}</el-button>
                </router-link>
            </grid-item>
            <grid-item size="1/1">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item
                        v-for="(item, index) in breadcrumb"
                        :key="index"
                        :to="item.path">
                        <span class="bread">{{ item.name }}</span>
                    </el-breadcrumb-item>
                </el-breadcrumb>
            </grid-item>
            <grid-item size="1/1">
                <transition
                    name="custom-classes-transition"
                    enter-active-class="animated fadeIn">
                    <router-view></router-view>
                </transition>
            </grid-item>
        </grid>
    </div>
</template>

<script>
    import * as types from '../../store/mutation-types'

    export default {
        data () {
            return {
                m: ''
            }
        },
        computed: {

            // 当前 module
            module () {
                return this.$store.state.module;
            },

            // 当前 module 数据
            data () {
                return this.$store.state[this.module]['data'];
            },

            // 当前 module 配置的子路由
            children () {
                return this.$store.state[this.module]['children'];
            },

            // 面包屑显示的名称
            breadcrumbName () {
                return this.$store.state[this.module]['breadcrumbName'];
            },

            // 生成面包屑
            breadcrumb () {

                // 计算breadcrumb 的每一项
                let name = this.breadcrumbName;
                let path = this.$route.path;
                let bread = [];
                let last;
                path = path.split('/');

                bread = _.map(path, function (n) {

                    if (n == '') {
                        last = '/' + n;
                        return {path: last, name: '首页'};
                    } else if (last == '/') {
                        last = last + n;
                    } else {
                        last = last + '/' + n;
                    }

                    return {path: last, name: name[last]};

                });

                return bread;
            },



        },

        // 修改当前 option
        methods: {
            changeOption (option) {
                this.$store.commit(types.CHANGE_OPTION, option);
            }
        }
    }
</script>

<style scope="scope">
    .page-child {
        margin-right: 10px;
    }
    .vfg-grid-item {
        margin-bottom: 20px;
    }
    .bread {
        font-size: 16px;
    }
</style>
