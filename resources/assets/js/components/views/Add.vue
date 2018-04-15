<template>
    <grid :key="module + option">
        <grid-item size="1/2">
            <form-auto :inline="false" :form="aForm" @updateValue="updateValue" @store="store"></form-auto>
        </grid-item>
    </grid>
</template>

<script>
    import * as types from '../../store/mutation-types'
    import formAuto from '../public/FormAuto'

    export default {

        computed: {

            // 当前 module
            module () {
                return this.$store.state.module;
            },

            // 当前 option
            option () {
                return this.$store.state.option;
            },

            // 当前 module 的本页模板配置
            add () {
                return this.$store.state[this.module][this.option];
            },

            aForm () {
                if (this.add.form === undefined) {
                    return [];
                } else {
                    return this.add.form;
                }
            }
        },

        methods: {

            // 执行 moudule 中配置的 mutation
            emit (index, method) {
                method = method.toLocaleUpperCase();
                this.$store.commit(this.module + '/' + types[method], index);
            },

            // 执行添加
            store () {
                let load = this.$loading();
                this.$store.dispatch(this.module + '/' + types.STORE).then((res) => {
                    load.close();
                    this.$notify(res.notify);
                }).catch((error) => {
                    load.close();
                    this.$notify(error.notify);
                });
            },

            // 绑定 v-model
            updateValue (index, value) {
                let request = {index: index, value: value};
                this.$store.dispatch(this.module + '/' + types.UPDATE_STORE_FORM, request);
            }
        },

        components: {
            'form-auto': formAuto,
        },

    }
</script>

