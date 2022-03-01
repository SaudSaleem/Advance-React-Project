import React, { Component } from "react";
import { getMovies } from "../service/movies";
import { getGenres } from "../service/genres";
import MoviesTable from "./moviesTable";
import Pagination from "./commons/pagnination";
import ListGroup from "./commons/listGroup";
import { paginate } from "../utills/paginate";
import _ from "lodash";
class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    selectedState: "",
    selectedGenre: "",
    sortColumn: { column: "title", order: "asc" },
  };
  handleDelete = (movie) => {
    const movies = this.state.movies.filter(
      (_movie) => _movie._id !== movie._id
    );
    this.setState({
      movies: movies,
    });
  };
  handleLike(movie) {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
  }
  handlePageChange = (page) => {
    this.setState({
      currentPage: page,
    });
  };
  handleGenreSelect = (genre) => {
    this.setState({
      selectedState: genre,
      selectedGenre: genre,
      currentPage: 1,
    });
  };
  handleSort = (sortColumn) => {
    this.setState({
      sortColumn,
    });
  };
  componentDidMount() {
    const genre = [{ _id: "", name: "All Genre" }, ...getGenres()];
    this.setState({
      movies: getMovies(),
      genres: genre,
    });
  }
  render() {
    if (this.state.movies.length === 0)
      return <p>There are no movie available</p>;
    //filter selected genre movie
    const filtered =
      this.state.selectedGenre && this.state.selectedGenre._id
        ? this.state.movies.filter(
            (m) => m.genre._id === this.state.selectedGenre._id
          )
        : this.state.movies;
    //sorting
    const sorted = _.orderBy(
      filtered,
      [this.state.sortColumn.column],
      [this.state.sortColumn.order]
    );
    //paginate
    const movies = paginate(
      // this.state.movies,
      sorted,
      this.state.currentPage,
      this.state.pageSize
    );
    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedState}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <MoviesTable
            movies={movies}
            sortColumn={this.state.sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <h3 className="ml-3">Showing {filtered.length} movies </h3>
          <Pagination
            itemsCount={filtered.length}
            pageSize={this.state.pageSize}
            currentPage={this.state.currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
