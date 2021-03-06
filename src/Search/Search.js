import React, { Component } from "react";
import "../Styles/_Search.scss";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ""
    };
  }

  handleInput = e => {
    this.setState({
      searchQuery: e.target.value
    });
  };

  findMatchingStudio = query => {
    return this.props.studios.filter(studio => {
      let studioName = studio.name.toUpperCase();
      return studioName.match(query);
    });
  };

  handleInputChange = e => {
    e.preventDefault();
    this.setState({ searchQuery: "" });
    let userInput = this.state.searchQuery.trim().toUpperCase();
    let result = this.findMatchingStudio(userInput);
    this.props.storeRendered(result);
  };

  render() {
    return (
      <section className="searchStudioContainer">
        <form
          className="searchStudio"
          data-test="search-studio"
          onSubmit={this.handleInputChange}
        >
          <input
            type="text"
            placeholder="Search By Studio Name"
            value={this.state.searchQuery}
            onChange={this.handleInput}
            className="studioSearch"
            data-test="search-input"
          />
        </form>
      </section>
    );
  }
}

export default Search;
