import React, { Component } from 'react'
import ImageItem from './ImageItem.js'
import images from './data.js'

export default class ImageList extends Component {
    render() {
        return (
            <div>
                {
                    images.map(image =>
                        <ImageItem
                            title={image.title}
                            picture={image.url}
                        />)
                }

            </div>
        )
    }
}
