<template>
  <div class="index">
    <el-container>
      <el-header>
        <h1>Vue知识点总结</h1>
      </el-header>
      <el-main>
        <el-row :gutter="20" type="flex" justify="center">
          <el-col :span="20">
            <el-col v-for="item in questionDataGetter" :key="item.id" :span="8">
              <el-card class="questionItem">
                <div slot="header" class="title">
                  <span>{{ item.title }}</span>
                </div>
                <div class="answer" v-html="item.answer" />
              </el-card>
            </el-col>
          </el-col>
        </el-row>
      </el-main>
      <el-footer>
        <div class="pagination">
          <el-pagination
            layout="prev, pager, next"
            :page-size="9"
            :total="totalGetter"
            @current-change="handleCurrentChange"
          />
        </div>
      </el-footer>
    </el-container>
    <img src="../../public/logo-192.png" alt="" />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  asyncData({
    store,
    route: {
      params: { page },
    },
  }) {
    const currentPage = page || 1;
    return store.dispatch("QUERY_QUESTIONS_DATA", { currentPage });
  },
  computed: {
    // ...mapGetters(['questionDataGetter', 'totalGetter']),
    questionDataGetter: function () {
      return this.$store.getters.questionDataGetter;
    },
    totalGetter: function () {
      return this.$store.getters.totalGetter;
    },
  },
  methods: {
    handleCurrentChange(val) {
      this.$router.push({
        name: "Index",
        params: {
          page: val,
        },
      });
    },
  },
};
</script>
<style lang="less" scoped>
h1 {
  color: #409eff;
  text-align: center;
}
.questionItem {
  margin-bottom: 20px;
  .title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .answer {
    height: 75px;
    line-height: 25px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    color: #787878;
  }
}
.pagination {
  text-align: center;
}
</style>
