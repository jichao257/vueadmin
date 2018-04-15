<template>
    <div id="app">
        <h3>欢迎光临！</h3>
        <p v-for="item in notices">{{ item }}</p>
    </div>
</template>

<script>
    export default {
        computed: {

            // 当前 module
            module () {
                return this.$store.state.module;
            },

            // 当前 module 的数据
            notices () {
                return this.$store.state[this.module]['notices'];
            },
        },
    }
</script>
