import * as types from './mutation-type'
import api from '../../api/<%=moduleName%>'

// 获取文章列表
export const get<%=firstUpperCaseModule%>List = ({ commit }) => {
  return api.get<%=firstUpperCaseModule%>List().then((res) => {
    commit(types.GET_<%=upperCaseModule%>_LIST_SUCCESS, res)
  })
}

// 添加文章
export const create<%=firstUpperCaseModule%> = ({ commit }, {<%=moduleName%>)}) => {
  return api.create<%=firstUpperCaseModule%>(<%=moduleName%>)).then((res) => {
    commit(types.CREATE_<%=upperCaseModule%>_SUCCESS, res)
  })
}

// 删除文章
export const delete<%=firstUpperCaseModule%> = ({ commit }, {<%=moduleName%>)}) => {
  return api.delete<%=firstUpperCaseModule%>({ _id: <%=moduleName%>._id }).then((res) => {
    commit(types.DELETE_<%=upperCaseModule%>_SUCCESS, <%=moduleName%>))
  })
}

// 保存文章
export const update<%=firstUpperCaseModule%> = ({commit}, {<%=moduleName%>}) => {
  return api.update<%=firstUpperCaseModule%>(<%=moduleName%>).then((res) => {
    commit(types.UPDATE_<%=upperCaseModule%>_SUCCESS, <%=moduleName%>))
  })
}
