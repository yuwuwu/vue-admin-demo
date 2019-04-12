const getters = {
  sidebar: state => state.app.sidebar,
  visitedViews: state => state.app.visitedViews,
  token: state => state.user.token,
  name:state => state.user.name,
  menu: state => state.user.menu
}
export default getters
