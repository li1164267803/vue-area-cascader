<template>
  <Cascader
    ref="cascader"
    v-bind="{ ...$props, ...$attrs }"
    :options="options"
    :show-search="{ filter }"
    v-on="$listeners"
  />
</template>

<script>
import axios from 'axios'
import { Cascader } from 'ant-design-vue'
import 'ant-design-vue/lib/cascader/style/index.js'

export default {
  name: 'VueAreaCascader',
  components: { Cascader },
  model: {
    // prop: 'value', // 默认返回的是value的值
    event: 'change' // 自定义方法，用来更新 model
  },
  props: {
    // 滑上展示下一级
    expandTrigger: {
      type: String,
      default: 'hover'
    },
    // 点击选中 省市区，不用选择三级
    changeOnSelect: {
      type: Boolean,
      default: true
    },
    // 提示信息
    placeholder: {
      type: String,
      default: '请搜索'
    },
    // 外部传入的部分省  只显示部分省市区
    filterProvince: {
      type: Array,
      default() {
        return []
      }
    },
    fieldNames: {
      type: Object,
      default() {
        return {
          label: 'name',
          value: 'id',
          children: 'children'
        }
      }
    }
  },
  data() {
    return {
      options: []
    }
  },
  mounted() {
    this.$emit('forward-ref', this.$refs.cascader)
    this.init()
  },
  methods: {

    async init() {
      const { data } = await axios.get(
        'https://q-independent.aixuexi.com/B:1029:K/1605283200/7abe9b1de98349fb82dee02afde1c868.json'
      )
      // 只显示部分省份
      if (this.filterProvince.length >= 1) {
        const brr = []
        this.filterProvince.forEach(v => {
          brr.push(data.find(options => options.id === v))
        })
        this.options = brr
      } else {
        this.options = data
      }
    },
    filter(inputValue, path) {
      return path.some(
        option =>
          option.name.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
      )
    }
  }
}
</script>

<style lang="less" >
.ant-cascader-picker {
  // width: 357px;
  height: 34px;
  .ant-input {
    height: 34px;
  }
  .suffixIcon-demo {
    font-size: 20px;
    width: 20px;
    height: 20px;
    margin-top: -10px;
  }
}
</style>

<style lang="less">
.ant-cascader-menu {
  &::-webkit-scrollbar {
    width: 6px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background: rgba(144, 147, 153, 0.5);
  }
  &::-webkit-scrollbar-track {
    border-radius: 5px;
    background: transparent;
  }
}
</style>
