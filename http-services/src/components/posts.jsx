import React, { Component } from "react";
import http from "../services/httpServices";
import config from "../config.json";
//sentry.io for logging errors
class Posts extends Component {
  state = { posts: [] };
  handleAdd = async () => {
    const obj = {
      title: "saud saleem",
      body: "Lorem ipsum delor ",
    };
    const { data: post } = await http.post(config.apiEndpoint, obj);
    const posts = [post, ...this.state.posts];
    this.setState({
      posts,
    });
  };
  //optimistic (delete,update data immediatly,if error occur then revert changes) and presmtic approach (wait for API response then update state)

  handleUpdate = async (post) => {
    //const orignalPosts = [...this.state.posts]
    //try
    // const { data: post } = await axios.put(config.apiEndpoint + '/' + post.id, obj);
    //catch
    //this.setState({posts: OriginalPosts})
  };
  handleDelete = async () => {
    // const { data: post } = await axios.delete(config.apiEndpoint + '/' + post.id, obj);
    //Expected vs unexpected error
    //catch(err)
    //if(err.response && error.status == 400 || error.status == 404)
    //400,404 are expected errors
    //else
    //server,DB down, code errors are unexpected errors
  };

  async componentDidMount() {
    const { data: posts } = await http.get(config.apiEndpoint);
    this.setState({
      posts,
    });
  }
  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.handleAdd}
        >
          Add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post) => {
              return (
                <tr key={post.id}>
                  <td>{post.title}</td>
                  <td>
                    <button type="button" className="btn btn-secondary">
                      Update
                    </button>
                  </td>
                  <td>
                    <button type="button" className="btn btn-danger">
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Posts;
