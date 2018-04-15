<template>
        <el-dialog
                :title="title"
                :visible.sync="visible">
            <el-form :rules="rules" :model="values" ref="formAutoDialog" label-width="80px" :key="index">
                <el-form-item
                        v-for="(item, index) in form"
                        :key="index"
                        :label="item.label"
                        :prop="index.toString()">
                    <form-item :config="item" :index="index" :formData="formData" @updateValue="updateValue"></form-item>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="cancel">取 消</el-button>
                <el-button type="primary" @click="update('formAutoDialog')">确 定</el-button>
            </div>
        </el-dialog>
</template>

<script>
    import * as types from '../../store/mutation-types'
    import formItem from './FormItem'

    export default {

        data () {
            return {
                values: {},
                visible: false,
                index: '',
            }
        },

        props: {
            form: Array,
            title: String,
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
            update (formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$emit('update');
                    } else {
                        return false;
                    }
                });
            },

            // 取消
            cancel () {
                this.visible = false;
            },

            // 显示
            show (data, index) {

                // 初始化表单初始值
                this.form.forEach((item, index) => {
                    index = index.toString();
                    this.values[index] = data[item.name];
                });

                this.index=index;
                this.visible = true;
            },
        },

        components: {
            'form-item': formItem
        }
    }
</script>
