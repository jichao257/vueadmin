<template>

    <div>
        <!--label-->
        <span v-if="config.type=='label'" >{{ config.text }}</span>

        <!--text-->
        <el-input v-if="config.type=='text'" v-model.trim="value" :placeholder="config.placeholder" ></el-input>

        <!--textarea-->
        <el-input v-if="config.type=='textarea'" type="textarea" v-model.trim="value"></el-input>

        <!--radio-->
        <el-radio-group v-else-if="config.type=='radio'" v-model="value" >
            <el-radio v-for="item in options" :label="item.value" :key="item.value">{{ item.label }}</el-radio>
        </el-radio-group>

        <!--checkbox-->
        <el-checkbox-group v-else-if="config.type=='checkbox'" v-model="value">
            <el-checkbox v-for="item in options" :label="item.value" :key="item.value">{{ item.label }}</el-checkbox>
        </el-checkbox-group>

        <!--select-->
        <el-select v-else-if="config.type=='select'" v-model="value" :placeholder="config.placeholder">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>

        <!--cascader 级联菜单-->
        <el-cascader v-else-if="config.type=='cascader'" :options="options" v-model="value" :placeholder="config.placeholder" ></el-cascader>

        <!--date-->
        <el-date-picker v-else-if="config.type=='date'" v-model="value" :type="options.type" :placeholder="config.placeholder" :picker-options="options.picker"></el-date-picker>
    </div>

</template>

<script>

    export default {

        data () {
            return {
                value: this.config.value,
            }
        },

        props: {
            config: Object,
            index: Number,
            formData: Object
        },

        computed: {
            options () {
                return this.config.options === undefined ? this.formData[this.config.key] : this.config.options;
            }
        },

        watch: {
            value (value, old) {
                this.$emit('updateValue', this.index, value);
            }
        }

    }
</script>
