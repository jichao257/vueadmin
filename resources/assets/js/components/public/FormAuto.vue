<template>
    <el-form :rules="rules" :model="values" ref="formAuto" label-width="80px">
        <el-form-item
                v-for="(item, index) in form"
                :key="index"
                :label="item.label"
                :prop="index.toString()">

            <form-item :config="item" :index="index" :formData="formData" @updateValue="updateValue"></form-item>

        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="store('formAuto')">添 加</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    import * as types from '../../store/mutation-types'
    import formItem from './FormItem'

    export default {

        data () {
            return {
                values:{},
                radio: 2
            }
        },

        props: {
            form: Array,
        },

        computed: {

            rules () {

                // 表单验证规则
                let rules = {};
                this.form.forEach(function (item, index) {
                    index = index.toString();
                    rules[index] = item.rules;
                });
                return rules;
            },

            // 表单的填充数据
            formData () {
                return this.$store.state.formData;
            },
        },

        methods: {

            // 绑定 v-model
            updateValue (index, value) {
                let i = index.toString();
                this.values[i] = value;
                this.$emit('updateValue', index, value);
            },

            // 查询方法
            store (formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$emit('store');
                    } else {
                        return false;
                    }
                });
            }
        },

        created () {

            // 初始化表单初始值
            this.form.forEach(function (item, index) {
                index = index.toString();
                this.values[index] = item.value;
            }.bind(this));

        },

        components: {
            'form-item': formItem
        }

    }
</script>
