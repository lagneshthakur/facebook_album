import { connect } from 'react-redux'
import PhotoList from '../presentational-components/PhotoList'
import { addPhoto } from '../actions'

const mapStateToProps = state => ({
  photos: state.photos
})

const mapDispatchToProps = dispatch => ({
  addPhoto: photo => dispatch(addPhoto(photo))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoList)