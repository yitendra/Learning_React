import React from 'react';
import './App.css';
import * as styles from './styles';

function App() {
  const name="yitendra"
        
  return (
    <div className="App">
      <div style={styles.styles}>REACT</div>
      <button>{name}</button>
    </div>
  );
}

export default App;
