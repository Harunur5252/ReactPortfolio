import React, { Component } from 'react'
import GridLoader from "react-spinners/GridLoader";

export default class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
          loading: true,
        };
    }

  render() {
    return (
        <div className="sweet-loading">
        <GridLoader
          size={15}
          color={"#36d7b7"}
          loading={this.state.loading}
          speedMultiplier={1.5}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    )
  }
}
