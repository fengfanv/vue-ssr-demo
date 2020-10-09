import Vue from 'vue'
import Vuex from 'vuex'
// import actions from './actions'
// import mutations from './mutations'
// import getters from './getters'

Vue.use(Vuex)

import { queryQuestions } from '../api/query'

export function createStore() {
  return new Vuex.Store({
    state: {
      questionsData: [],
      total: null
    },
    getters: {
      questionDataGetter(state) {
        return state.questionsData
      },
      totalGetter(state) {
        return state.total
      }
    },
    mutations: {
      SET_QUESTIONS_DATA: (state, { questionsData, currentPage }) => {
        state.questionsData = questionsData.slice((currentPage - 1) * 9, currentPage * 9)
        state.total = questionsData.length
      }
    },
    actions: {
      QUERY_QUESTIONS_DATA: ({ commit }, { currentPage }) => {
        return queryQuestions().then((res) => {
          if (res.data.code === 0) {
            const questionsData = res.data.data
            commit('SET_QUESTIONS_DATA', { questionsData, currentPage })
          }
        })
      }
    }
  })
}
