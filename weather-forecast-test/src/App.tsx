import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import style from './styles/style.less';
import './App.css';

const options = {
  method: 'GET',
  url: 'https://dark-sky.p.rapidapi.com/%7Blatitude%7D,%7Blongitude%7D',
  params: { units: 'auto', lang: 'en' },
  headers: {
    'X-RapidAPI-Key': '95eb2434d5mshf32530b34122ca2p16f777jsn9d04a477a5d3',
    'X-RapidAPI-Host': 'dark-sky.p.rapidapi.com'
  }
};

function App() {
  React.useEffect(() => {
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className={style.header}>
          Edit <code>src/App.tsx</code> and save to reload.1
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
