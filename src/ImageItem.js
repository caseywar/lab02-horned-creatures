import React, { Component } from 'react'
import './App.css'


export default class ImageItem extends Component {
    render() {
        return (
            <div>
                <div>{this.props.title}</div>
                <img className='image' src={this.props.picture} alt={this.props.title}></img>
                <p>{this.props.description}</p>
            </div>
        )
    }
}
