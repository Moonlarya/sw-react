import React, { Component } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import Button from "@material-ui/core/Button/Button";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import CharacterService from "services/CharacterService";

import CharCard from "./CharCard";

import "./styles.scss";

const api = "https://swapi.dev/api/";

class Characters extends Component {
  state = {
    characters: null,
    episode: "",
    isLoading: false,
  };
  loadInfo = async () => {
    const { episode } = this.state;
    const info = await CharacterService.getAll(episode);
    this.setState({ characters: info });
  };

  handleChange = (event) => {
    this.setState({ episode: event.target.value }, () => this.loadInfo());
  };

  render() {
    const { characters, episode } = this.state;
    return (
      <>
        <Link to="/">
          <Button variant="contained" color="primary" size="large">
            ←
          </Button>
        </Link>
        <FormControl variant="outlined">
          <InputLabel id="demo-simple-select-outlined-label">Епізод</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={episode}
            onChange={this.handleChange}
            label="Оберіть епізод"
          >
            <MenuItem value={1}>
              Зоряні війни: Епізод 1 – Прихована загроза
            </MenuItem>
            <MenuItem value={2}>Зоряні війни: Епізод 2 – Атака клонів</MenuItem>
            <MenuItem value={3}>
              Зоряні війни: Епізод 3 – Помста Ситхів
            </MenuItem>
            <MenuItem value={4}>Зоряні війни: Епізод 4 – Нова надія</MenuItem>
            <MenuItem value={5}>
              Зоряні війни: Епізод 5 – Імперія завдає удар
            </MenuItem>
            <MenuItem value={6}>
              Зоряні війни: Епізод 6 – Повернення Джедая
            </MenuItem>
          </Select>
        </FormControl>
        <div className="card-list">
          {characters &&
            characters.map((el) => (
              <CharCard
                key={el.name}
                name={el.name}
                gender={el.gender}
                birth_year={el.birth_year}
              ></CharCard>
            ))}
        </div>
      </>
    );
  }
}

export default Characters;
