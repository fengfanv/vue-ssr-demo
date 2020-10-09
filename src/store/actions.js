import { queryQuestions } from '../api/query'

export default {
  QUERY_QUESTIONS_DATA: ({ commit }, { currentPage }) => {
    return queryQuestions().then((res) => {
      if (res.data.code === 0) {
        const questionsData = res.data.data
        commit('SET_QUESTIONS_DATA', { questionsData, currentPage })
      }
    })
  }
}
