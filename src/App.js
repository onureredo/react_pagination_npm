import React, { useState, useEffect } from 'react';
import './style.css';

//https://jsonplaceholder.typicode.com/
function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json() //convert response into JSON
    .then(data => {
      setImages(data);
    }))
  }, [])


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
