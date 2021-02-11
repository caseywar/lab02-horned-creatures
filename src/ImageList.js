import React, { Component } from 'react'
import ImageItem from './ImageItem.js'

export default class ImageList extends Component {
    render() {
        return (
            <ul className="list">
                { this.props.filteredImages.map(imageObject =>
                    <ImageItem
                        key={imageObject.name}
                        imageItemProp={imageObject}
                    />)}
            </ul>
        )
    }
}
