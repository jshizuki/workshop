/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-unused-vars */
// import React from "react";

// rsc tab
// import React from 'react';

import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [ { id: "XzpdEbpKODjvrxmevD" },
        { id: "duv1n6pewtf7NevYZS" }],
      selectedGifId: "XzpdEbpKODjvrxmevD"
    };
    // this.search("pocahontas");
  }

  // search = (query) => {
  // giphy('MOBXUz7uYgIPHAGpu1VAUoXFCPdcaQu3').search({
  // q: query,
  // rating: 'g',
  // limit: 10
  // }, (error, result) => {
  // this.setState({
  // gifs: result.data
  // });
  // });
  // }

search = (query) => {
  if (query === '') {
  // If the query is empty, set the state back to the default GIFs
    this.setState({
      gifs: [
        { id: "XzpdEbpKODjvrxmevD" },
        { id: "duv1n6pewtf7NevYZS" }
      ]
    });
  } else {
  // Perform the search using the Giphy API
    giphy({ apiKey: 'MOBXUz7uYgIPHAGpu1VAUoXFCPdcaQu3', https: true }).search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }
}

selectGif = (id) => {
  this.setState({
    selectedGifId: id
  });
}

render() {
  const gifs = [
    { id: "XzpdEbpKODjvrxmevD" },
    { id: "duv1n6pewtf7NevYZS" }
  ];
  return (
    <div>
      <div className="left-scene">
        <SearchBar searchFunction={this.search} />
        <div className="selected-gif">
          <Gif id={this.state.selectedGifId} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
      </div>
    </div>
  );
}
}

export default App;
