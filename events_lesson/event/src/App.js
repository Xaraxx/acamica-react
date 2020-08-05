import React from 'react';

import './App.css';

function App() {
  const dispararLasers = (event, color) =>{
    console.log('confirmar la acción')
    console.log(event)
    console.log(color)

    event.persist()
  }

  const handleClick = (event) => {
    event.persist()
    event.preventDefault()
    // alert('Are you sure you to go to this web?')
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={(event, color) => dispararLasers(event, 'rojo')}>
          Disparar lasers! 
        </button>
      </header>
      <main>
        <div>
          <h3>Ingrese un página web! <a href='google.com' onClick={handleClick}> Haz click Aquí!</a></h3>
        </div>
      </main>
    </div>
  );
}

export default App;
