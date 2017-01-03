import * as types from './mutation-type'

const mutations = {
  [types.GET_<%=upperCaseModule%>_LIST_SUCCESS] (state, data) {
    state.list = data
  },
  [types.CREATE_<%=upperCaseModule%>_SUCCESS] (state, data) {
    state.list.push(data)
  },
  [typpe.UPDATE_<%=upperCaseModule%>_SUCCESS] (state, data) {
    state.list.findIndex(value, index, arr) => {
      if(value._id === data._id) {
        state.list[index] = data
      }
    }
  },
  [types.DELETE_<%=upperCaseModule%>_SUCCESS] (state, data) {
    state.list.findIndex(value, index, arr) => {
      if(value === data) {
        state.list.splice(index, 1)
      }
    }
  }
}

export default mutations
