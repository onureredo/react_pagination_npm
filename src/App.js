import React, { useState, useEffect } from 'react';
import Images from './Components/Images';
import './style.css';

//https://jsonplaceholder.typicode.com/
function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json()
    .then(data => {
      setImages(data)
      // console.log(data);
    })
      )
  }, [])


  return (
    <div className="App">
      <Images data={images}/>
    </div>
  );
}

export default App;
