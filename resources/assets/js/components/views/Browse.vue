<template>
    <div :key="module + option">
        <grid>
            <grid-item size="1/1">
                <form-inline :form="browse.form" @updateValue="updateSearchValue" @index="index"></form-inline>
            </grid-item>
            <grid-item size="1/1">
                <table-expand
                    :data="data"
                    :config="browse"
                    @index="index"
                    @emit="emit">
                </table-expand>
            </grid-item>
        </grid>
        <form-auto-dialog
                :title="update.title"
                ref="formAutoDialog"
                :form="update.form"
                @updateValue="updateDialogValue"
                @update="doUpdate">
        </form-auto-dialog>
    </div>
</template>

<script>
    import * as types from '../../store/mutation-types'
    import formInline from '../public/FormInLine'
    import tableExpand from '../public/TableExpand'
    import formAutoDialog from '../public/FormAutoDIalog'

    export default {
        data () {
            return {
                editIndex: '',
                editOption: '',
            }
        },

        computed: {

            // 当前 module
            module () {
                return this.$store.state.module;
            },

            // 当前 option
            option () {
                return this.$store.state.option;
            },

            // 当前 module 的数据
            data () {
                return this.$store.state[this.module]['data'];
            },

            // 当前 浏览模板配置
            browse () {

                let def = {
                    table: [],
                    page: {
                        size: 15,
                        total: 0
                    },
                    expand: [],
                    buttons: [],
                    form: []
                }
                return this.$store.state[this.module][this.option]['browse'] === undefined ? def : this.$store.state[this.module][this.option]['browse'];
            },

            // 修改 弹窗模板配置
            update () {
                let def = {
                    title: '',
                    form: []
                }
                return this.$store.state[this.module][this.option][this.editOption] === undefined ? def : this.$store.state[this.module][this.option][this.editOption];
            }
        },

        methods: {

            // 执行 moudule 中配置的 mutation 或执行 模板方法 或跳转路由
            emit (index, method) {
                switch (method.type) {
                    case 'emit':

                        method = method.do.toLocaleUpperCase();

                        this.$confirm('您确定要执行此操作吗，此操作可能无法撤回！', '提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning'
                        }).then(() => {

                            let load = this.$loading();
                            this.$store.dispatch(this.module + '/' + types[method], index).then((res) => {
                                load.close();
                                this.$notify(res.notify);
                            }).catch((error) => {
                                load.close();
                                this.$notify(error.notify);
                            });

                        }).catch(() => {
                            this.$message({
                                type: 'info',
                                message: '操作已经取消！'
                            });
                        });


                        break;

                    case 'local':
                        this[method.do]({index: index, editOption: method.editOption});

                        // 如果 指定了emit 则执行
                        if (method.emit !== undefined) {
                            let e = method.emit.toLocaleUpperCase();
                            this.$store.dispatch(this.module + '/' + types[e], {index: index});
                        }
                        break;

                    case 'route':

                        // 修改当前的 option
                        this.$store.commit(types.CHANGE_OPTION, method.option);

                        // 如果 指定了emit 则执行
                        if (method.emit !== undefined) {
                            let e = method.emit.toLocaleUpperCase();
                            this.$store.dispatch(this.module + '/' + types[e], {index: index});
                        }

                        // 跳转路由
                        this.$router.push(method.do);
                        break;
                }
            },

            // 执行查询
            index (page) {
                if (!_.isNumber(page)) {
                    page = 1;
                }

                let load = this.$loading();
                this.$store.dispatch(this.module + '/' + types.INDEX, page).then((res) => {
                    load.close();
                    this.$notify(res.notify);
                }).catch((error) => {
                    load.close();
                    this.$notify(error.notify);
                });
            },

            // 显示修改弹窗面板
            showEdit (request) {
                this.editIndex=request.index;
                this.editOption=request.editOption;

                let load = this.$loading();
                this.$store.dispatch(this.module + '/' + types.EDIT, request).then((res) => {
                    load.close();
                    this.$notify(res.notify);
                    if (res.notify.type == 'success') {
                        this.$refs['formAutoDialog'].show(res.data, request.index);
                    }
                }).catch((error) => {
                    load.close();
                    this.$notify(error.notify);
                });
            },

            // 执行修改
            doUpdate () {
                let load = this.$loading();
                let request = {
                    index: this.editIndex,
                    editOption: this.editOption,
                };

                this.$store.dispatch(this.module + '/' + types.UPDATE, request).then((res) => {
                    load.close();
                    this.$notify(res.notify);
                    this.$refs['formAutoDialog'].cancel();
                }).catch((error) => {
                        load.close();
                    this.$notify(error.notify);
                });
            },

            // 绑定 搜索表单的 model
            updateSearchValue (index, value) {
                let request = {index: index, value: value};
                this.$store.dispatch(this.module + '/' + types.UPDATE_BROWSE_FORM, request);
            },

            // 绑定 修改表单的 model
            updateDialogValue (index, value) {
                let request = {index: index, value: value, editOption: this.editOption};
                this.$store.dispatch(this.module + '/' + types.UPDATE_BROWSE_DIALOG, request);
            }
        },

        components: {
            'form-inline': formInline,
            'table-expand': tableExpand,
            'form-auto-dialog': formAutoDialog,
        },

    }
</script>
