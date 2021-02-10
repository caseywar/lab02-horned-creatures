import React, { Component } from 'react'
import Header from './Header.js'
import ImageList from './ImageList.js'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <header className='header'>
          <Header />
        </header>
        <div className='list'>
          <ImageList />
        </div>
      </div>
    )
  }
}
