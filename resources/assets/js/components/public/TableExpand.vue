<template>
    <div>
        <el-table
                :data="data"
                style="width: 100%">
            <el-table-column type="expand">
                <template scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item
                                v-for="(item, index) in config.expand"
                                :label="item.label"
                                :key="index">
                            <span>{{ props.row[item.prop] }}</span>
                        </el-form-item>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column
                    v-for="(item, index) in config.table"
                    :prop="item.prop"
                    :label="item.label"
                    :width="item.width"
                    :key="index">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    width="200">
                <template scope="scope">
                    <el-button
                            v-for="(item, index) in config.buttons"
                            @click="emit(scope.$index, item.method)"
                            :key="index"
                            type="text"
                            size="small">
                        {{ item.label }}
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="block">
            <el-pagination
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-size="config.page.size"
                    layout="prev, pager, next, jumper"
                    :total="config.page.total">
            </el-pagination>
        </div>

    </div>

</template>

<script>
    export default {
        data () {
            return {
                currentPage: 1
            }
        },
        props: {
            data: Array,
            config: Object
        },

        methods: {
            emit (index, act) {
                this.$emit('emit', index, act);
            },
            handleCurrentChange(page) {
                this.currentPage = page;
                this.$emit('index', page)
            }
        }
    }
</script>

<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 80px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 30%;
  }
</style>