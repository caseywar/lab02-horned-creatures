import React, { Component } from 'react'
import './App.css'
import Header from './Header.js'
import images from './data.js'
import ImageList from './ImageList.js'
import Dropdown from './Dropdown.js'

export default class App extends Component {
  state = {
    keyword: '',
    horns: '',
  }

  handleKeywordChange = (e) => {
    this.setState({
      keyword: e.target.value
    });
  }

  handleHornChange = (e) => {
    this.setState({
      horns: Number(e.target.value)
    });
  }

  render() {
    const filteredImages = images.filter((item) => {
      if (!this.state.keyword && !this.state.horns) return true;

      if (this.state.keyword && !this.state.horns) {
        if (item.keyword === this.state.keyword) return true;
      }

      if (this.state.horns && !this.state.keyword) {
        if (item.horns === this.state.horns) return true;
      }

      if (this.state.horns && this.state.keyword) {
        if (item.horns === this.state.horns && item.keyword === this.state.keyword) return true;
      }
      return false;


    });


    return (
      <div>
        <div className='body'>
          <Header />
        </div>
        <div>
          <section className="dropdownTitles">
            <span className='dropdowns'>Type</span>
            <Dropdown
              currentValue={this.state.keyword}
              handleChange={this.handleKeywordChange}
              options={['All Types', 'narwhal', 'rhino', 'unicorn', 'unilego', 'triceratops', 'markhor', 'mouflon', 'addax', 'chameleon', 'lizard', 'dragon']}
            />
          </section>
        </div>
        <div>
          <section className="dropdownTitles">
            <span className='dropdowns'>Horns</span>
            <Dropdown
              currentValue={this.state.horns}
              handleChange={this.handleHornChange}
              options={['All Horns', 1, 2, 3, 100]}
            />
          </section>
          <ImageList
            filteredImages={filteredImages}
          />
        </div>


      </div>
    )
  }
}
