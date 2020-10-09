export default {
  SET_QUESTIONS_DATA: (state, { questionsData, currentPage }) => {
    state.questionsData = questionsData.slice((currentPage - 1) * 9, currentPage * 9)
    state.total = questionsData.length
  }
}
