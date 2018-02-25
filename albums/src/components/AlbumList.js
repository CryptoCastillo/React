import React, { Component } from 'react';
import { View } from 'react-native';
import AlbumDetail from './AlbumDetail';

// Class component
class AlbumList extends Component {
  state = { albums: [] };
  componentWillMount() {
    // ASYNC HTTP Request to get albums from the API.
    // eslint-disable-next-line
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then((response) => response.json())
    .then((responseData) => this.setState({ albums: responseData }));
  }

 // Render all the albums that was fetched from the API.
  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

// Render the component
  render() {
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

// Make compomnent available to other parts of the application
export default AlbumList;
