import React from 'react'
import PropTypes from 'prop-types'

const photoStyle = {
  display: "block",
};

const photoTitleStyle = {
  display: "inherit",
};

class Photo extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (<div style={photoStyle}>
      <h4 style={photoTitleStyle}>{this.props.name}</h4>
      <img src={this.props.cover} height="200px" width="300px" />
    </div>)
  }

}


Photo.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired
}

export default Photo