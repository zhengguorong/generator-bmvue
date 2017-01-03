import * as http from '../util/http'

const get<%=firstUpperCaseModule%>List = () => {
  return http.get('/api/<%=moduleName%>s')
}

const create<%=firstUpperCaseModule%> = (<%=moduleName%>) => {
  return http.post('/api/<%=moduleName%>s', <%=moduleName%>)
}

const update<%=firstUpperCaseModule%> = (<%=moduleName%>) => {
  return http.put('/api/<%=moduleName%>s/' + <%=moduleName%>._id, <%=moduleName%>)
}

const delete<%=firstUpperCaseModule%> = (<%=moduleName%>) => {
  return http.del('/api/<%=moduleName%>s/', <%=moduleName%>)
}


module.exports = {
  get<%=firstUpperCaseModule%>List, create<%=firstUpperCaseModule%>, update<%=firstUpperCaseModule%>, delete<%=firstUpperCaseModule%>
}