import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CounterPage, TodosPage } from './pages';


function App() {
  return (
    <div className="App">
      <TodosPage />

      <CounterPage />
    </div>
  );
}

export default App;
