import React, { Component } from 'react'
import './App.css'


export default class ImageItem extends Component {
    render() {
        return (
            <li>
                <p>{this.props.imageItemProp.title}</p>
                <img className='image' src={this.props.imageItemProp.url} alt={this.props.imageItemProp.title}></img>
                <p>{this.props.imageItemProp.description}</p>
                <p>{this.props.imageItemProp.horns}</p>
            </li>
        )
    }
}
