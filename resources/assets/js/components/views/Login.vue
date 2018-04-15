<template>
    <container id="app">
        <grid horizontal="center" vertical="middle" class="box">
            <grid-item>
                <img src="../../assets/images/logo.png" alt="logo">
            </grid-item>
            <grid-item>
                <grid-item>
                    <h3 class="title">{{ title }}</h3>
                </grid-item>
                <grid-item>
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
                        <el-form-item label="用户名：" prop="username">
                            <el-input type="text" v-model="ruleForm.username"></el-input>
                        </el-form-item>
                        <el-form-item label="密 码：" prop="password">
                            <el-input type="password" v-model="ruleForm.password"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm')">登 录</el-button>
                        </el-form-item>
                    </el-form>
                </grid-item>
            </grid-item>
        </grid>
    </container>
</template>

<script>
    import * as types from '../../store/mutation-types'

    export default {
        data () {
            return {
                title: '财务日记账',
                ruleForm: {
                    username: '',
                    password: '',
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 1, max: 20, message: '用户名长度在 1 到 20 个字符', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.login();
                    } else {
                        return false;
                    }
                });
            },
            login () {
                this.$store.commit(types.LOGIN, this.ruleForm);
                this.$router.replace('/home');
            }
        }
    }

</script>

<style scope="scope">
    .box {
        padding-top: 60px;
    }

    .title {
        text-align: center;
        height: 80px;
        line-height: 80px;
    }

</style>