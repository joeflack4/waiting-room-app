import React from "react";

export default class BigBlueBox extends React.Component {
  render() {
    return <div style={{
      background: '#dce5ed',
      border: '2px solid #bbc0c9',
      borderRadius: '10px',
      marginBottom: '10px',
      marginTop: '10px'}}
    >
      {this.props.children}
    </div>
  }
}