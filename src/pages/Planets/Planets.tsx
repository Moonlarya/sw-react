import React, { Component } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import Button from "@material-ui/core/Button/Button";
import PlanetCard from "./PlanetCard";

import "./styles.scss";

const api = "https://swapi.dev/api/";

class Planets extends Component {
  state = {
    planets: [],
    pageNumber: null,
    isLoading: false,
    hasNext: false,
    hasPrevious: false,
  };

  loadInfo = async (pageNumber = 1) => {
    try {
      this.setState({ isLoading: true });
      const response = await axios({
        url: `${api}planets/`,
        params: {
          page: pageNumber,
        },
      });

      const { results } = response.data;

      this.setState({ planets: results, pageNumber });

      if (response.data.next) {
        this.setState({ hasNext: true });
      } else {
        this.setState({ hasNext: false });
      }

      if (response.data.previous) {
        this.setState({ hasPrevious: true });
      } else {
        this.setState({ hasPrevious: false });
      }
    } catch {
      this.setState({
        planets: [],
        pageNumber,
        hasNext: false,
        hasPrevious: false,
        isLoading: false,
      });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidMount() {
    this.loadInfo();
  }

  nextPage = () => {
    const { pageNumber } = this.state;

    this.setPage(pageNumber + 1);
  };

  previousPage = () => {
    const { pageNumber } = this.state;

    this.setPage(pageNumber - 1);
  };

  setPage = (page: number) => {
    this.setState({ pageNumber: page }, () => {
      this.loadInfo(page);
    });
  };

  render() {
    const { planets, isLoading, pageNumber, hasNext, hasPrevious } = this.state;

    return (
      <>
        <Link to="/">
          <Button variant="contained" color="primary" size="large">
            ←
          </Button>
        </Link>
        <div className="button-panel">
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={this.previousPage}
            disabled={!hasPrevious}
          >
            ←
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={this.nextPage}
            disabled={!hasNext}
          >
            →
          </Button>
        </div>
        <h1>Сторінка {pageNumber}</h1>
        <div className="card-list">
          {!isLoading &&
            planets.map((el) => <PlanetCard key={el.name} name={el.name} />)}

          {!isLoading && planets.length === 0 && <h1>No data exists</h1>}

          {isLoading && <h1>Spinner</h1>}
        </div>
      </>
    );
  }
}

export default Planets;
