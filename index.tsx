import * as React from 'react';
import { render } from 'react-dom';

import GalleryContainer from './GalleryContainer';
import './styles.css';

function App() {
  return (
    <div className="App">
      <h1>
        Images <span role="img" aria-label="emoji"></span>
      </h1>
      <GalleryContainer />
    </div>
  );
}

render(<App />, document.getElementById('root'));
