import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import updateAge from './actions';
import { useState } from 'react';

function App(props) {

  const [age,changeAge] = useState()

  const submitForm = (event) => {
    event.preventDefault();
    props.updateAge(age);
  }

  return (
    <div className="App">
      <form onSubmit={submitForm}>
        <label>Age: </label>
        <input type="text" onChange={(event) => changeAge(event.target.value)} />
        <button type="submit">Submit</button>
      </form>

      <h1>Age: {props.age}</h1>
    </div>
  );
}

const mapStateToProps = state => ({
  age: state.ageReducer.age
})

const mapDispatchToProps = {
  updateAge
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
