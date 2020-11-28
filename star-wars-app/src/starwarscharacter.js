import "./App.css";
import React from "react";
export default class StarWarsCharacter extends React.Component {
  render() {
    return (
      <tr>
          <td>{this.props.name}</td>
          <td>{this.props.height}</td>
          <td>{this.props.mass}</td>
          <td>{this.props.hair_color}</td>
          <td>{this.props.skin_color}</td>
          <td>{this.props.eye_color}</td>
          <td>{this.props.birth_year}</td>
          <td>{this.props.gender}</td>
      </tr>
    );
  }
}