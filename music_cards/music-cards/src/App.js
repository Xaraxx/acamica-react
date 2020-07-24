import React from 'react';
import ReactDOM from "react-dom";

import './App.css';
import Card from './Card'


const albums = [
  {
    name: "Infestissumam",
    artist: "Ghost B.C.",
    year: 2013,
    img: "https://upload.wikimedia.org/wikipedia/en/3/31/Ghost_-_infestissumam_cover.jpg",
    rating: 3,
    liked: false
  },
  {
    name: "If You Have Ghost",
    artist: "Ghost B.C.",
    year: 2013,
    img: "https://upload.wikimedia.org/wikipedia/en/8/89/Ghost_-_If_You_Have_Ghost.jpg  ",
    rating: 3,
    liked: false
  },
  {
    name: "Meliora",
    artist: "Ghost B.C.",
    year: 2015,
    img: "https://upload.wikimedia.org/wikipedia/en/3/3d/Meliora.JPG",
    rating: 3,
    liked: false
  }
];

function App() {
  return (
    <div className="App">
      <h1>Album Gallery</h1>
      {albums.map(album => <Card album={album}/>)}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
