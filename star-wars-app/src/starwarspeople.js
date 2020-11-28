import "./App.css";
import StarWarsCharacter from "./starwarscharacter"; 
import React from "react";
export default class StarWarsPeople extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        people: [],
      };
    }
    componentDidMount() {
      fetch('https://swapi.dev/api/people/')
      .then((response) => {
        return response.json()
      })
      .then((people) => {
          this.setState({people:people.results});
          console.log(this.state.people[3])
      })
    }

  render() {
    return (
      <div>
        <table>
            <tr>
                <th>Nombre</th>
                <th>Peso</th>
                <th>Masa</th>
                <th>Color de pelo</th>
                <th>Color de piel</th>
                <th>Color de ojos</th>
                <th>Cumpleaños</th>
                <th>Genero</th>
            </tr>
            {
                this.state.people.map((person) => {
                    return <StarWarsCharacter 
                        name={person.name}
                        height={person.height}
                        mass={person.mass}
                        hair_color={person.hair_color}
                        skin_color={person.skin_color}
                        eye_color={person.eye_color}
                        birth_year={person.birth_year}
                        gender={person.gender}/>
                })
            }
        </table>
      </div>
    );
  }
}