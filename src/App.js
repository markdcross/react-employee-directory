import React, {Fragment} from 'react'
import Header from './components/Header'
import Search from './components/Search';
import Table from './components/Table';
import './App.css';

function App() {
  return (
    <Fragment >
      <Header />
      <Search />
      <Table />
    </Fragment >
  );
}

export default App;
