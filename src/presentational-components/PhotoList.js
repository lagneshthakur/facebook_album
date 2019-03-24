/*global FB*/
import React from 'react'
import PropTypes from 'prop-types'
import Photo from './Photo'
import { Link } from "react-router-dom";


const photoListStyle = {
  marginTop: "100px",

}

class PhotoList extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    if (localStorage.getItem('userID')) {
      let albumID = this.props.history.location.pathname.split('/')[this.props.history.location.pathname.split('/').length-1];
      console.log('Fetching photos in album.... ');
      FB.api(`/${albumID}/photos?access_token=${localStorage.getItem('fbToken')}`, {fields: 'photos'} ,(albums) => {
        debugger
        albums.data.forEach(album => {
          FB.api(`/${album.id}?access_token=${localStorage.getItem('fbToken')}`, 'GET', {fields: 'cover_photo'} , (photo) => {
            FB.api(`/${photo.cover_photo.id}?access_token=${localStorage.getItem('fbToken')}`, 'GET', {fields: 'album,icon,images'}  ,(response) => {
              this.props.addPhoto({
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
    return (<div style={photoListStyle}>
    <h3><Link to="/" >Back</Link></h3>
    <h2> My Photos </h2>
    {this.props.photos.map((photo, index) => (
      <Photo key={index} {...photo} />
    ))}
  </div>)
  }
}


PhotoList.propTypes = {
    photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      album: PropTypes.any.isRequired
    }).isRequired
  ).isRequired,
  addPhoto: PropTypes.func.isRequired
}

export default PhotoList