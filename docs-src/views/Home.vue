<template>
  <div class="page-home page">
    <h2>Demo</h2>
    <section class="demo">
      <div class="section-content">
        <h2>默认点击选中单独省市区 支持联想搜索</h2>
        <AreaCascader v-model="data1" />
        返回选择后的id：{{ data1 }}
      </div>
    </section>
    <section class="snippets">
      <Collapse>
        <div class="section-content">
          <CodeSnippet class="snippet" :code="componentSnippet" lang="html" />
          <div class="plus">+</div>
          <CodeSnippet class="snippet" :code="mainSnippet" lang="js" />
        </div>
      </Collapse>
    </section>

    <section class="demo">
      <div class="section-content">
        <h2>省份 必须选择三级</h2>
        <AreaCascader v-model="data2" :change-on-select="false" />
        返回选择后的id：{{ data2 }}
      </div>
    </section>
    <section class="snippets">
      <Collapse>
        <div class="section-content">
          <CodeSnippet class="snippet" :code="componentSnippet2" lang="html" />
          <div class="plus">+</div>
          <CodeSnippet class="snippet" :code="mainSnippet" lang="js" />
        </div>
      </Collapse>
    </section>

    <section class="demo">
      <div class="section-content">
        <h2>使用change事件 返回具体的省份信息</h2>
        <AreaCascader v-model="data3" @change="dataPickerChange" />
        返回选择后的id：{{ data3 }} <br>
        返回选择后的详细信息：请打开控制台查看
      </div>
    </section>
    <section class="snippets">
      <Collapse>
        <div class="section-content">
          <CodeSnippet class="snippet" :code="componentSnippet3" lang="html" />
          <div class="plus">+</div>
          <CodeSnippet class="snippet" :code="mainSnippet3" lang="js" />
        </div>
      </Collapse>
    </section>

    <section class="demo">
      <div class="section-content">
        <h2>只显示部分省份</h2>
        <AreaCascader v-model="data4" :filter-province="['10013267','10145665','10640332']" />
        返回选择后的id：{{ data4 }} <br>
      </div>
    </section>
    <section class="snippets">
      <Collapse>
        <div class="section-content">
          <CodeSnippet class="snippet" :code="componentSnippet4" lang="html" />
          <div class="plus">+</div>
          <CodeSnippet class="snippet" :code="mainSnippet" lang="js" />
        </div>
      </Collapse>
    </section>

  </div>
</template>

<script>
import CodeSnippet from '../components/CodeSnippet.vue'
import Collapse from '../components/Collapse.vue'
import { AreaCascader } from '../../dist/vue-area-cascader.esm'

const mainSnippet = `
import {AreaCascader} from 'vue-area-cascader';

export default {
  name: 'App',
  components: {
    AreaCascader
  }
}
`
const mainSnippet3 = `
import {AreaCascader} from 'vue-area-cascader';

export default {
  components: {
    AreaCascader
  },
  methods: {
    dataPickerChange(date, dateStr) {
      console.log('🚀返回选择的省份详细信息：', date, dateStr)
    }
  }
}
`

const componentSnippet = `<AreaCascader v-model="data1" /> {{ data1 }}`
const componentSnippet2 = `<AreaCascader v-model="data2" :change-on-select="false" /> {{ data2 }}`
const componentSnippet3 = `<AreaCascader v-model="data3" @change="dataPickerChange" />`
const componentSnippet4 = `<AreaCascader v-model="data3" :filter-province="['10013267','10145665','10640332']" />`

export default {
  name: 'Home',
  components: {
    CodeSnippet,
    Collapse,
    AreaCascader
  },

  data() {
    return {
      data1: [],
      data2: [],
      data3: [],
      data4: [],
      mainSnippet,
      mainSnippet3,
      componentSnippet,
      componentSnippet2,
      componentSnippet3,
      componentSnippet4
    }
  },
  methods: {
    dataPickerChange(date, dateStr) {
      console.log('🚀返回选择的省份详细信息：', date, dateStr)
    }
  }
}
</script>
