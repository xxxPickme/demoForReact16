/*
 * @Author: your name
 * @Date: 2021-08-05 15:52:46
 * @LastEditTime: 2021-08-12 17:01:08
 * @LastEditors: lxx
 * @Description: In User Settings Edit
 * @FilePath: \demo1\demo0805\src\App.js
 */
import logo from './logo.svg';
import './App.css';
import React from 'react'
import Com from './Com'
const Fragment = React.Fragment

function App(aaaa) {

  // function changeEvent(e) {
  //   console.log("e", e)
  //   return function(){
  //     console.log("this", this)
  //   }
  // }
  // const a = 123
  // const b = 321
  // console.log("APP-props", aaaa)
  return (
    <Fragment>
      {/* <div className="App">
        <header className="App-header">
          {true}<img src={logo} className="App-logo" alt="logo" />
          <p>
            {false ? a : b}
          </p>
          <input onChange={changeEvent}></input>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Com content={112} aaa={123213}/>
        </header>
      </div> */}
      <Com content="123" aaa={123213}/>
    </Fragment>
  );

}


export default App;
