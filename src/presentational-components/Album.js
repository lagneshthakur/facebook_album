import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const albumStyle = {
  display: "block",
};

const albumTitleStyle = {
  display: "inherit",
};

class Album extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (<div style={albumStyle}>
      <h4 style={albumTitleStyle}>{this.props.name}</h4>
      <Link to={`/album/${this.props.id}`} ><img src={this.props.cover} height="200px" width="300px" /></Link>
    </div>)
  }

}


Album.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired
}

export default Album