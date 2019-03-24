import { connect } from 'react-redux'
import AlbumList from '../presentational-components/AlbumList'
import { addAlbum } from '../actions'

const mapStateToProps = state => ({
  albums: state.albums,
  userID: state.user.id,
})

const mapDispatchToProps = dispatch => ({
  addAlbum: album => dispatch(addAlbum(album))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumList)