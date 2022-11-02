import React from "react";
import logo from '../logo.svg';
import Button from './Button';

export default function Home() {
    return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
        <p>
          This is a place where you feel more comfortable to study Finnish!
        </p>
        <Button />
      </header>
    </div>
    );
};