import React, { Component } from 'react'
import ImageItem from './ImageItem.js'
import images from './data.js'

export default class ImageList extends Component {
    render() {
        return (
            <div>
                <select onChange={this.handleChange}>
                    <option value=''>Show All</option>
                    <option value='narwhal'>narwhal</option>
                    <option value='rhino'>rhino</option>
                    <option value='unicorn'>unicorn</option>
                    <option value='unilego'>unilego</option>
                    <option value='triceratops'>triceratops</option>
                    <option value='markhor'>markhor</option>
                    <option value='mouflon'>mouflon</option>
                    <option value='addax'>addax</option>
                    <option value='chameleon'>chameleon</option>
                    <option value='lizard'>lizard</option>
                    <option value='dragon'>dragon</option>







                </select>



                <div>
                    {
                        images.map(image =>
                            <ImageItem
                                title={image.title}
                                picture={image.url}
                                description={image.description}
                                type={image.keyword}
                            />)
                    }
                </div>
            </div>
        )
    }
}
