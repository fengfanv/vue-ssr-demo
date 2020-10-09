import http from '../util/http'

export function queryQuestions() {
  return http.get('/api/question').then((res) => {
    return res
  })
}
