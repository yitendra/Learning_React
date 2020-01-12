import React from 'react';
import './App.css';
import * as styles from './styles';
import Container2 from './containers/Container2';
import Container3 from './containers/Container3';
import Routes from './Routes';

function App() {
  const name="yitendra"
        
  return (
    <div className="App">
      <div style={styles.styles}>REACT</div>
      <button>{name}</button>

      {/* Readable Ternary Expression */}
      {true
      ?<div>This is true</div>
      :<div>This is false</div>
      }

      <Container2/>
      <Container3/>
      <hr />
      <Routes/>
    </div>
  );
}

export default App;
