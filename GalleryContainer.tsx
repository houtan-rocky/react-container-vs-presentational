import * as React from 'react';
import Gallery from './Gallery';

function GalleryContainer() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetchImages();
  }, []);

  function fetchImages() {
    fetch('https://api.github.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }

  return <Gallery users={users} />;
}

export default GalleryContainer;
