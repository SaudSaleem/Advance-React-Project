import React, { Component } from "react";
import Like from "./commons/like";
class MoviesTable extends Component {
  state = {};
  raiseSort = (column) => {
    const sortColumn = { ...this.props.sortColumn };
    if (this.props.sortColumn.column === column) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.column = column;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };
  render() {
    const { movies, onDelete, onLike } = this.props;
    return (
      <main className="container">
        <h1>Movies Component</h1>
        <table className="table">
          <thead>
            <tr>
              <th onClick={() => this.raiseSort("title")}>Title</th>
              <th onClick={() => this.raiseSort("genre.type")}>Genre</th>
              <th onClick={() => this.raiseSort("numberInStock")}>Stock</th>
              <th onClick={() => this.raiseSort("dailyRentalRate")}>Rate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title} </td>
                <td>{movie.genre.type}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like liked={movie.liked} onClick={() => onLike(movie)} />
                </td>
                <td>
                  <button
                    onClick={() => onDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}

export default MoviesTable;
