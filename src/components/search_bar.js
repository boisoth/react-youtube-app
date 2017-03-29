import React, { Component } from 'react';

class SearchBar extends Component{

  constructor(props){
    super(props);

    this.state = { term: '' };
  }

  render(){
    return(
      <div className="input-group search-bar">
        <input type="text" className="form-control" placeholder="Search for..."
               value={this.state.term}
               onChange={event => this.onInputChange(event.target.value)}
        />
        <div className="input-group-btn">
            <div className="btn btn-secondary search-glass"><span className="glyphicon glyphicon-search"></span></div>
          </div>
      </div>
    );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;