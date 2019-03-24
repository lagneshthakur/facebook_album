import { connect } from 'react-redux'
import User from '../presentational-components/User'
import { setUser, removeUser } from '../actions'

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user)),
  removeUser: user => dispatch(removeUser())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User)