import React from "react";
import withTooltip from "./withTooltip";
class Movie extends React.Component {
  render() {
    return (
      <div>
        Movie {this.props.showTooltip}
        {this.props.showTooltip && <div>Some Tooltip</div>}
      </div>
    );
  }
}

export default withTooltip(Movie);
