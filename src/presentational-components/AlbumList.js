/*global FB*/
import React from 'react'
import PropTypes from 'prop-types'
import Album from './Album'


const albumListStyle = {
  marginTop: "100px",

}

class AlbumList extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    if (localStorage.getItem('userID')) {
      console.log('Welcome!  Fetching your information.... ');
      FB.api(`/${localStorage.getItem('userID')}/albums?access_token=${localStorage.getItem('fbToken')}`, (albums) => {
        albums.data.forEach(album => {
          FB.api(`/${album.id}?access_token=${localStorage.getItem('fbToken')}`, 'GET', {fields: 'cover_photo'} , (photo) => {
            FB.api(`/${photo.cover_photo.id}?access_token=${localStorage.getItem('fbToken')}`, 'GET', {fields: 'album,icon,images'}  ,(response) => {
              this.props.addAlbum({
                id: response.id,
                name: response.album.name,
                cover: response.images[4].source
              });
            });
          });
        });
      });
    }
  }

  render() {
    return (<div style={albumListStyle}>
    <h2> My Albums </h2>
    {this.props.albums.map((album, index) => (
      <Album key={index} {...album} />
    ))}
  </div>)
  }
}


AlbumList.propTypes = {
    albums: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      album: PropTypes.any.isRequired
    }).isRequired
  ).isRequired,
  addAlbum: PropTypes.func.isRequired
}

export default AlbumList